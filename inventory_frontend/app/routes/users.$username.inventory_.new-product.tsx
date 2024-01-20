import { redirect, type ActionFunctionArgs, } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { Button } from '../components/ui/reusable/button'
import { Input } from '../components/ui/reusable/input'

export async function action({
    params,
    request,
}: ActionFunctionArgs) {
    const username = params.username
    const body = await request.formData();
    const name = body.get("name")
    const price = body.get("unitprice")
    const quantity = body.get("quantity")
    const apiUrl = 'http://localhost:5000/api/inventory';

    const postData = {
        name,
        price,
        quantity,
    };
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    };

    await fetch(apiUrl, requestOptions);

    const redirect_ = `/users/${username}/inventory`
    return redirect(redirect_);
}

export default function NewProduct() {

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-6">
            <h2 className="w-1/2 h-10 bg-green-300 font-bold text-center pt-2">Register new product</h2>
            <Form method="POST" className="bg-slate-200 p-8 shadow-md rounded-md italic font-bold flex h-1/3 w-2/3 flex-col gap-y-4 overflow-x-hidden px-10 pb-28 pt-12 max-w-xl">
                <div className="inline-flex">
                    <label htmlFor='name' className="w-1/2" > Product name:</label>
                    <Input name="name" type="text" defaultValue='name' required={true} />
                </div>
                <div className="inline-flex">
                    <label htmlFor='unitprice' className="w-1/2" > Unit price ($):</label>
                    <Input name="unitprice" type="text" defaultValue="0.00" required={true} />
                </div>
                <div className="inline-flex">
                    <label htmlFor='quantity' className="w-1/2" > Quantity: </label>
                    <Input name="quantity" type="number" defaultValue='1' required={true} />
                </div>
                <Button className='relative top-8 hover:bg-green-500 italic bg-green-300 w-1/3 self-center px-4 py-2'> Create </Button>
            </Form>
        </div>
    );
}
