import  { json } from "@remix-run/node";
import Wrapper from '../components/ui/wrapper';
import Products from '../components/ui/products';
import { useLoaderData } from "@remix-run/react";

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
    
    // Return the data as JSON
    return json({ products });

}

export default function Index() {
    const {products} = useLoaderData<typeof loader>();
    
    return (
        <div className="w-screen h-screen">
            <Wrapper>
                <Products products_={products}/>
            </Wrapper>
        </div>
    );
}
