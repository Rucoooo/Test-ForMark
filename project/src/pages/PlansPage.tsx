import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Check, ArrowRight } from 'lucide-react';
import { UserData } from '../App';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';

type PlanOption = {
  id: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  bestValue?: boolean;
};

type UserDetailsPageProps = {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
};

const PlansPage = ({ userData, updateUserData }: UserDetailsPageProps) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentInterval, setPaymentInterval] = useState<'monthly' | 'yearly'>('monthly');

  const planOptions: PlanOption[] = [
    {
      id: 'powertrain',
      name: 'olive.powertrain',
      monthlyPrice: '$49.95',
      yearlyPrice: '$499.50',
      features: [
        'Engine components',
        'Transmission',
        'Drive axle',
        'Transfer case',
        '24/7 roadside assistance',
        'Rental car reimbursement'
      ]
    },
    {
      id: 'complete',
      name: 'olive.complete.care',
      monthlyPrice: '$94.64',
      yearlyPrice: '$946.40',
      bestValue: true,
      features: [
        'Everything in powertrain',
        'Electrical system',
        'Cooling system',
        'Steering',
        'Suspension',
        'Fuel system',
        'Braking system',
        'Air conditioning/heating'
      ]
    },
    {
      id: 'basic',
      name: 'olive.powertrain+',
      monthlyPrice: '$49.95',
      yearlyPrice: '$499.50',
      features: [
        'Everything in powertrain',
        'Air conditioning',
        'Basic electrical',
        'Fuel system',
        'Cooling system',
        'Basic technology coverage'
      ]
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    
    const selectedPlanDetails = planOptions.find(plan => plan.id === planId);
    if (selectedPlanDetails) {
      updateUserData({ 
        selectedPlan: selectedPlanDetails.name,
        price: paymentInterval === 'monthly' ? selectedPlanDetails.monthlyPrice : selectedPlanDetails.yearlyPrice 
      });
    }
  };

  const handleContinue = () => {
    if (selectedPlan) {
      navigate('/purchase-summary');
    }
  };

  return (
    <div>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mb-2">Hi {userData.firstName}! Here are your options for your {userData.vehicleYear} {userData.vehicleMake} {userData.vehicleModel}</h1>
          
          <div className="flex justify-center mt-8 mb-12">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  paymentInterval === 'monthly'
                    ? 'bg-white text-[#5626ff] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setPaymentInterval('monthly')}
              >
                Pay Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  paymentInterval === 'yearly'
                    ? 'bg-white text-[#5626ff] shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setPaymentInterval('yearly')}
              >
                Pay Yearly (Save 16%)
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planOptions.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'border-[#5626ff] shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                } ${plan.bestValue ? 'relative' : ''}`}
                onClick={() => handleSelectPlan(plan.id)}
              >
                {plan.bestValue && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-max px-4 py-1 bg-[#5626ff] text-white text-xs font-medium rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f0edff] mb-4">
                    <Shield className="h-6 w-6 text-[#5626ff]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <div className="flex justify-center items-baseline mb-2">
                    <span className="text-3xl font-bold text-[#5626ff]">
                      {paymentInterval === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    {paymentInterval === 'monthly' && (
                      <span className="text-gray-500 text-sm ml-1">/mo</span>
                    )}
                    {paymentInterval === 'yearly' && (
                      <span className="text-gray-500 text-sm ml-1">/yr</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-[#5626ff] mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-[#5626ff] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <button
              onClick={handleContinue}
              disabled={!selectedPlan}
              className={`btn-primary inline-flex items-center ${
                !selectedPlan ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Continue
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">The olive difference</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0edff] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fast & easy process</h3>
              <p className="text-gray-600 text-sm">Get your quote in minutes with our simple online application.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0edff] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Choose your mechanic</h3>
              <p className="text-gray-600 text-sm">Use any licensed repair facility of your choice nationwide.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0edff] flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Transparent coverage</h3>
              <p className="text-gray-600 text-sm">Know exactly what's covered with clear terms and no hidden fees.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Plans are covered by olive</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#f0edff] flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium mb-1">Routine maintenance</h3>
                <p className="text-sm text-gray-600">Regular servicing to keep your vehicle in top condition</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#f0edff] flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium mb-1">Pre-existing conditions</h3>
                <p className="text-sm text-gray-600">Coverage for issues that existed before your policy began</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#f0edff] flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium mb-1">Commercial vehicle use</h3>
                <p className="text-sm text-gray-600">Protection for vehicles used for business purposes</p>
              </div>
            </div>
            
            <div className="flex items-start p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-[#f0edff] flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium mb-1">Consequential damage</h3>
                <p className="text-sm text-gray-600">Coverage for damage caused by covered component failure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Testimonials />
      
      <FaqSection />
    </div>
  );
};

export default PlansPage;