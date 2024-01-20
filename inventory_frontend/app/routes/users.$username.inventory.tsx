import { redirect, type ActionFunctionArgs, } from '@remix-run/node'
import  { json } from "@remix-run/node";
import Wrapper from '../components/ui/wrapper';
import Products from '../components/ui/products';
import { useLoaderData } from "@remix-run/react";

export async function action({
    params,
    request
}: ActionFunctionArgs) {
    const formData = await request.formData()
    const intent = formData.get('intent')
    const username = params.username
    const productId = params.productId
    let redirect_ = '/'
    if (intent === 'update') {
        redirect_ = `/users/${username}/inventory/edit/${productId}` 
    }
    else if (intent === 'delete'){
        redirect_ = `/users/${username}/inventory/delete/${productId}`
    }
    else{
        redirect_ = `/users/${username}/inventory/new-product`
    }
    return redirect(redirect_);
}

// Type to describe the data we get from the API
type Inventory = {
    name: string;
    price: number;
    quantity: number;
    id: string
};

export async function loader(){
    const response = await fetch("http://localhost:5000/api/inventory/products");
    const products: Inventory[] = await response.json();
    return json({ products });
}

export default function Inventory() {
    const {products} = useLoaderData<typeof loader>();
    
    return (
        <div className="w-screen h-screen">
            <Wrapper>
                <Products products_={products}/>
            </Wrapper>
        </div>
    );
}
