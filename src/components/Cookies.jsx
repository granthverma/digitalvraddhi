import { Link } from "react-router-dom"; 

import { FaHome } from "react-icons/fa";

function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      
   
      
      <div className="mt-8 border-t pt-4">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
       

       
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <FaHome className="text-lg" />
            <span>Return to Homepage</span>
          </Link>
       

      </div>
    </div>
  );
}

export default Cookies; 