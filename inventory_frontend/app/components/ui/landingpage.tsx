import InventorySVG from '../../assets/ilustration.svg'; // Replace with the actual path to your SVG file

const LandingPage = () => {
    return (
        <div className="bg-gray-400 h-screen flex items-center ">
            <img
                src={InventorySVG}
                alt="Inventory Service"
                className="w-20/100 h-30/100 "
            />
            <div className="relative w-65/100 h-50/100 max-w-md bg-white p-8 shadow-md rounded-md">
                <h1 className="text-3xl font-bold mb-4">Your Awesome App</h1>
                <p className="text-gray-600 mb-6">
                    Welcome to the most amazing app. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </p>
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Get Started
                </button>
            </div>
            
        </div>
    );
};

export default LandingPage;