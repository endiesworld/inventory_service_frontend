import { json, redirect, type ActionFunctionArgs, } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { Button } from '../components/ui/reusable/button'
import { Input } from '../components/ui/reusable/input'

type Product = {
    name: string;
    price: number;
    quantity: number;
    id: string
};

export async function loader({
    params,
}: ActionFunctionArgs) {
    const productId = params.productId
    console.log("productId", productId)
    const apiUrl = `http://localhost:5000/api/inventory/products/${productId}`;
    const response = await fetch(apiUrl);
    const product: Product = await response.json();
    return json({ product });
}

export async function action({
    params,
    request,
}: ActionFunctionArgs) {

    const body = await request.formData();
    const username = body.get("username")

    const productId = params.productId
    const apiUrl = `http://localhost:5000/api/inventory/products/${productId}`;

    const requestOptions: RequestInit = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
    await fetch(apiUrl, requestOptions);

    const redirect_ = `/users/${username}/inventory`
    return redirect(redirect_);
}

export default function DeleteProduct() {
    const { product } = useLoaderData<typeof loader>();
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-6">
            <h2 className="w-1/2 h-10 bg-red-300 font-bold text-center pt-2">Completely delete the below product from the database</h2>
            <Form method="POST" className="bg-slate-200 p-8 shadow-md rounded-md italic font-bold flex h-1/3 w-2/3 flex-col gap-y-4 overflow-x-hidden px-10 pb-28 pt-12 max-w-xl">
                <div className="inline-flex">
                    <label htmlFor='name' className="w-1/2" > Product ID:</label>
                    <Input name="name" type="text" defaultValue={product.id} readOnly={true} />
                </div>
                <div className="inline-flex">
                    <label htmlFor='name' className="w-1/2" > Product name:</label>
                    <Input name="name" type="text" defaultValue={product.name} readOnly={true} />
                </div>
                <div className="inline-flex">
                    <label htmlFor='unitprice' className="w-1/2" > Unit price ($):</label>
                    <Input name="unitprice" type="number" defaultValue={product.price} readOnly={true} />
                </div>
                <div className="inline-flex">
                    <label htmlFor='quantity' className="w-1/2" > Quantity: </label>
                    <Input name="quantity" type="number" defaultValue={product.quantity} readOnly={true} />
                </div>
                <Button className='relative top-8 hover:bg-red-500 italic bg-red-300 w-1/3 self-center px-4 py-2'> Delete </Button>
            </Form>
        </div>
    );
}
