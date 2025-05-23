import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';

const Header = () => {
  const location = useLocation();
  const showProgress = location.pathname !== '/';
  
  // Determine current step based on pathname
  const getCurrentStep = () => {
    switch (location.pathname) {
      case '/vehicle-details':
        return 1;
      case '/user-details':
        return 2;
      case '/plans':
        return 3;
      case '/purchase-summary':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <header className="bg-[#5626ff] text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <span className="text-white">olive</span>
          <span className="text-xs ml-0.5">.com</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <a href="tel:866-555-0123" className="hidden md:flex items-center text-sm font-medium">
            <Phone size={16} className="mr-1" />
            <span>866-555-0123</span>
          </a>
        </div>
      </div>
      
      {showProgress && (
        <div className="bg-[#4315e8] py-2">
          <div className="container mx-auto px-4">
            <ProgressIndicator currentStep={getCurrentStep()} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;