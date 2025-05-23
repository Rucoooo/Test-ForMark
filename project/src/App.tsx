import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import UserDetailsPage from './pages/UserDetailsPage';
import PlansPage from './pages/PlansPage';
import PurchaseSummaryPage from './pages/PurchaseSummaryPage';

// User form data type
export type UserData = {
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleTrim: string;
  mileage: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  selectedPlan: string;
  price: string;
};

function App() {
  const [userData, setUserData] = useState<UserData>({
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleTrim: '',
    mileage: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    selectedPlan: '',
    price: '',
  });

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/vehicle-details" 
            element={<VehicleDetailsPage userData={userData} updateUserData={updateUserData} />} 
          />
          <Route 
            path="/user-details" 
            element={<UserDetailsPage userData={userData} updateUserData={updateUserData} />} 
          />
          <Route 
            path="/plans" 
            element={<PlansPage userData={userData} updateUserData={updateUserData} />} 
          />
          <Route 
            path="/purchase-summary" 
            element={<PurchaseSummaryPage userData={userData} />} 
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;