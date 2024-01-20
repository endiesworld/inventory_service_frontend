import {Form } from "@remix-run/react";

export default function Products({products_}) {
    return (
        <div className="container w-full h-fit flex flex-col gap-y-4">
            <table className="w-full table-auto border-separate border border-slate-400 text-left">
                <thead className="h-12 bg-slate-200 ">
                    <tr>
                        <th className="w-1/5 border-separate border border-slate-400">Product ID</th>
                        <th className="w-1/5 border-separate border border-slate-400">Name</th>
                        <th className="w-1/5 border-separate border border-slate-400">Price</th>
                        <th className="w-1/5 border-separate border border-slate-400">Quantity</th>
                        <th className="w-1/5 border-separate border border-slate-400">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products_.map(product =>
                        <tr className="h-8 " key={product.id}>
                            <td className="border-separate border border-slate-400">{product.id}</td>
                            <td className="border-separate border border-slate-400">{product.name}</td>
                            <td className="border-separate border border-slate-400">{product.price}</td>
                            <td className="border-separate border border-slate-400">{product.quantity}</td>
                            <td className="border-separate border border-slate-400 ">
                                <Form method="POST" className="inline-flex">
                                    <button name="intent" value={`update ${product.id}`} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                                        Update
                                    </button>
                                    <button name="intent" value={`delete ${product.id}`} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                                        Delete
                                    </button>
                                </Form>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Form method="POST" className="inline-flex self-center">
                <button name="intent" value="New Product" className="bg-green-200 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded-l">
                    New Product
                </button>
            </Form>
        </div>
    );
}