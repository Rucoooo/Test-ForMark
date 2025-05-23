import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { UserData } from '../App';

type PurchaseSummaryPageProps = {
  userData: UserData;
};

const PurchaseSummaryPage = ({ userData }: PurchaseSummaryPageProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  const formatPrice = (price: string) => {
    if (!price) return '$0.00';
    return price.startsWith('$') ? price : `$${price}`;
  };

  if (isComplete) {
    return (
      <div className="bg-gray-50 min-h-[calc(100vh-72px)] flex items-center justify-center py-12">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-20 h-20 bg-[#f0edff] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={40} className="text-[#5626ff]" />
            </div>
            
            <h1 className="text-2xl font-bold mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              Your purchase is complete and your coverage is now active. We've sent a confirmation email to {userData.email} with all the details.
            </p>
            
            <div className="bg-[#f8f5ff] p-4 rounded-lg mb-6 text-left">
              <h3 className="font-medium mb-2">Coverage Summary:</h3>
              <p><span className="text-gray-600">Plan:</span> {userData.selectedPlan}</p>
              <p><span className="text-gray-600">Vehicle:</span> {userData.vehicleYear} {userData.vehicleMake} {userData.vehicleModel}</p>
              <p><span className="text-gray-600">Price:</span> {formatPrice(userData.price)}</p>
            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              Your policy documents will arrive in your email shortly. If you have any questions, please contact our customer support team.
            </p>
            
            <a href="/" className="btn-primary">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-72px)] py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-8">Purchase summary</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#f0edff] rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">{userData.selectedPlan || 'olive.complete.care'}</h3>
                <p className="text-sm text-gray-600">{userData.vehicleYear} {userData.vehicleMake} {userData.vehicleModel}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-lg">{formatPrice(userData.price)}</p>
              <p className="text-xs text-[#5626ff] underline cursor-pointer">Plan details</p>
            </div>
          </div>
          
          <div className="border-t border-b border-gray-100 py-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span>{formatPrice(userData.price)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Monthly Payment</span>
              <span>{formatPrice(userData.price)}</span>
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <input 
              type="checkbox" 
              id="terms" 
              className="h-4 w-4 text-[#5626ff] focus:ring-[#5626ff] border-gray-300 rounded"
              defaultChecked
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-500">
              I have read and accepted the Olive Coverage Plan Terms & Conditions available here.
            </label>
          </div>
          
          <button
            onClick={handlePurchase}
            disabled={isProcessing}
            className={`btn-primary w-full ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              <span className="flex items-center justify-center">
                CONTINUE
                <ArrowRight size={18} className="ml-2" />
              </span>
            )}
          </button>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          <p>By clicking "Continue", you authorize olive.com to charge the payment method above.</p>
          <p className="mt-2">Questions? Call us at 866-555-0123</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSummaryPage;