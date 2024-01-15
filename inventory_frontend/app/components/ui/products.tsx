import { Link } from "@remix-run/react";

export default function Products({products_}) {
    return (
        <div className="container w-full h-fit">
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
                            <td className="border-separate border border-slate-400">
                                <Link to= {`${product.id}`} >
                                    <button className="btn w-2/3 h-2/3 bg-indigo-500 rounded-lg"> Action </button>
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}