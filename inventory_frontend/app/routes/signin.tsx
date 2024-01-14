import {Form } from '@remix-run/react'
import { Button } from '../components/ui/reusable/button'
import { Input } from '../components/ui/reusable/input'
import InventorySVG from '../assets/ilustration2.svg'; // Replace with the actual path to your SVG file



export default function Signin() {

    return (
        <div className="w-screen h-screen flex justify-center items-center ">
            <img
                src={InventorySVG}
                alt="Inventory Service"
                className="w-1/2 h-screen object-center"
            />
            <Form action="/" method="post" className="bg-slate-300 flex h-1/3 w-2/3 flex-col gap-y-4 overflow-x-hidden px-10 pb-28 pt-12">
                <label htmlFor='username' > Username</label>
                <Input name="username" type="text" defaultValue='username'/>
                <label htmlFor='password'> Password</label>
                <Input name="password" type="password" />
                <Button>submit</Button>
            </Form>
        </div>
    );
}
