import { ArrowRight, Check, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Unexpected auto breakdowns happen.<br />
              Let <span className="text-[#5626ff]">olive</span> pay the bill.
            </h1>
            <p className="text-gray-600 mb-6">Get a quote in 30 seconds or less.</p>
            
            <Link to="/vehicle-details" className="btn-primary">
              Get Protected Now
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f0edff] flex items-center justify-center mb-3">
                <Shield size={24} className="text-[#5626ff]" />
              </div>
              <p className="text-sm">3 coverage plans</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f0edff] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 14v1" />
                  <path d="M9 8v1" />
                  <path d="M15 14v1" />
                  <path d="M15 8v1" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <p className="text-sm">No waiting periods</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f0edff] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                  <path d="m2 13 1.41 1.41" />
                  <path d="M7 13a5 5 0 0 1-5 5" />
                </svg>
              </div>
              <p className="text-sm">Fixed rates</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#f0edff] flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p className="text-sm">Quick & Easy online</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How olive works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make getting coverage for unexpected auto repairs simple, affordable, and hassle-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0edff] flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                  <path d="m9 16 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose your plan</h3>
              <p className="text-gray-600">Select the coverage that works best for your vehicle and budget.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0edff] flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get covered immediately</h3>
              <p className="text-gray-600">No waiting periods. Your coverage begins right after purchase.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-[#f0edff] flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff]">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" x2="6" y1="2" y2="4" />
                  <line x1="10" x2="10" y1="2" y2="4" />
                  <line x1="14" x2="14" y1="2" y2="4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Just file a claim</h3>
              <p className="text-gray-600">When you need a repair, simply file a claim online or by phone.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/vehicle-details" className="btn-primary inline-flex items-center">
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Coverage Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's covered by olive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our plans are designed to protect you from unexpected repair costs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#f8f5ff] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="text-[#5626ff] mr-2" />
                Routine maintenance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Oil changes and filter replacements</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Spark plug replacements</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Brake pad replacements</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Tire rotations and alignments</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#f8f5ff] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff] mr-2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                Pre-existing conditions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Coverage for vehicles with existing issues</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Mechanical breakdowns from wear and tear</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Electrical system issues</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Commercial vehicle coverage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#f8f5ff] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff] mr-2">
                  <path d="m4 13 5 5 11-11" />
                </svg>
                Powertrain coverage
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Engine components and repairs</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Transmission system repairs</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Drive axle protection</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Transfer case coverage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#f8f5ff] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5626ff] mr-2">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Mechanical alterations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Coverage for modified vehicles</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Aftermarket parts and accessories</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Performance upgrades</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-[#34c759] mt-1 mr-2 flex-shrink-0" />
                  <span>Modified suspension systems</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/vehicle-details" className="btn-primary inline-flex items-center">
              Get Your Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};

export default HomePage;