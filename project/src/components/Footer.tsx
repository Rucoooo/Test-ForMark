import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link to="/" className="text-[#5626ff] font-bold text-xl mb-2">olive<span className="text-xs">.com</span></Link>
            <div className="flex items-center text-sm text-gray-600">
              <Phone size={14} className="mr-1" />
              <span>866-555-0123</span>
            </div>
          </div>
          
          <div className="flex space-x-4 md:space-x-8">
            <Link to="#" className="text-sm text-gray-600 hover:text-[#5626ff]">
              Contact Us
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-[#5626ff]">
              Terms & Conditions
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-[#5626ff]">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="https://images.pexels.com/photos/11805278/pexels-photo-11805278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="GBE Insurance" className="h-6 mr-4" />
            <img src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="BBB Accredited" className="h-6" />
          </div>
          
          <p className="text-xs text-gray-500 text-center md:text-right">
            © 2023 Olive.com. All rights reserved. Coverage administered by QBE First Insurance Agency, Inc. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;