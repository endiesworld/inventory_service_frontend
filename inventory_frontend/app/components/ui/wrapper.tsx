import { Link } from "@remix-run/react";

export default function Wrapper({children}){
    return (
        <div className= "w-screen h-screen container">
            <nav className="w-full h-10 bg-slate-400"></nav>
            <div className="w-full h-4/5 flex flex-row">
                <div className="w-2/12 h-full bg-slate-100  ">
                    <Link to="/">Products</Link>
                </div>
                <main className="w-10/12 h-full ">
                    {children}
                </main>
            </div>
            
        </div>
    );
}