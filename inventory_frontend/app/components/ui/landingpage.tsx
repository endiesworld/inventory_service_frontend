import InventorySVG from '../../assets/ilustration2.svg'; // Replace with the actual path to your SVG file

const LandingPage = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center ">
            <img
                src={InventorySVG}
                alt="Inventory Service"
                className="w-1/2 h-screen object-center"
            />
            <div className="w-1/2 h-screen flex justify-center flex-col ">
                <div className="w-2/3 bg-blue-500 p-8 shadow-md rounded-md flex justify-center flex-col">
                    <h1 className="text-3xl font-bold mb-4 text-center italic text-yellow-300">All Your Inventories in one CLICK!</h1>
                    <p className="text-yellow-300 mb-6 text-center">
                        An efficient inventory service is user-friendly, offers real-time tracking, integrates with other systems, scales easily, includes automation features, provides robust reporting, ensures reliability and support, prioritizes security, is cost-effective, and receives positive customer reviews for its practical benefits.
                    </p>
                    <button className=" self-center text-blue-500 px-4 py-2 w-1/3 rounded-md bg-slate-50 hover:bg-slate-200">
                        Get Started
                    </button>
                </div>
                
            </div>
            
        </div>
    );
};

export default LandingPage;