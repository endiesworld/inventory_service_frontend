import { Link } from "@remix-run/react";

export default function Products() {
    return (
        <div className=" w-full h-fit">
            <table className="w-full table-fixed border-collapse border border-slate-400 text-left">
                <thead className="h-12 bg-slate-200 ">
                    <tr>
                        <th className="w-1/5 border-collapse border border-slate-400">Product ID</th>
                        <th className="w-1/5 border-collapse border border-slate-400">Name</th>
                        <th className="w-1/5 border-collapse border border-slate-400">Price</th>
                        <th className="w-1/5 border-collapse border border-slate-400">Quantity</th>
                        <th className="w-1/5 border-collapse border border-slate-400">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-8 ">
                        <td className="border-collapse border border-slate-400">we23df689ght74</td>
                        <td className="border-collapse border border-slate-400">Malcolm Lockyer</td>
                        <td className="border-collapse border border-slate-400">$4,500</td>
                        <td className="border-collapse border border-slate-400">1961</td>
                        <td className="border-collapse border border-slate-400">
                            <Link to="/">
                                <button className="btn w-2/3 h-2/3 bg-indigo-500 rounded-lg"> Delete </button> 
                            </Link>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}