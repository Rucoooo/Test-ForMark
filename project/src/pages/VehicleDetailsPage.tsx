import { useState, useEffect } from 'react';
import { Car, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../App';

type VehicleDetailsPageProps = {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
};

// Car models by make
const carModels: { [key: string]: string[] } = {
  'Acura': ['ILX', 'MDX', 'RDX', 'TLX', 'NSX'],
  'Audi': ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'e-tron'],
  'BMW': ['3 Series', '5 Series', 'X3', 'X5', 'i4', 'iX'],
  'Buick': ['Enclave', 'Encore', 'Envision'],
  'Cadillac': ['CT4', 'CT5', 'Escalade', 'XT4', 'XT5', 'XT6'],
  'Chevrolet': ['Blazer', 'Camaro', 'Corvette', 'Equinox', 'Malibu', 'Silverado', 'Tahoe'],
  'Chrysler': ['300', 'Pacifica'],
  'Dodge': ['Challenger', 'Charger', 'Durango'],
  'Ford': ['Bronco', 'Edge', 'Escape', 'Explorer', 'F-150', 'Mustang', 'Ranger'],
  'GMC': ['Acadia', 'Sierra', 'Terrain', 'Yukon'],
  'Honda': ['Accord', 'Civic', 'CR-V', 'HR-V', 'Odyssey', 'Pilot', 'Ridgeline'],
  'Hyundai': ['Elantra', 'Kona', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson'],
  'Infiniti': ['Q50', 'Q60', 'QX50', 'QX60', 'QX80'],
  'Jeep': ['Cherokee', 'Compass', 'Grand Cherokee', 'Wrangler'],
  'Kia': ['Forte', 'K5', 'Seltos', 'Sorento', 'Sportage', 'Telluride'],
  'Lexus': ['ES', 'IS', 'NX', 'RX', 'UX'],
  'Lincoln': ['Aviator', 'Corsair', 'Nautilus', 'Navigator'],
  'Mazda': ['CX-30', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'GLE', 'GLC', 'S-Class'],
  'Nissan': ['Altima', 'Frontier', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra'],
  'Subaru': ['Ascent', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Outback'],
  'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y'],
  'Toyota': ['Camry', 'Corolla', 'Highlander', 'RAV4', 'Tacoma', 'Tundra'],
  'Volkswagen': ['Atlas', 'Golf', 'ID.4', 'Jetta', 'Passat', 'Tiguan'],
  'Volvo': ['S60', 'S90', 'XC40', 'XC60', 'XC90']
};

const VehicleDetailsPage = ({ userData, updateUserData }: VehicleDetailsPageProps) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{
    vehicleYear?: string;
    vehicleMake?: string;
    vehicleModel?: string;
    mileage?: string;
  }>({});

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 25 }, (_, i) => (currentYear - i).toString());
  
  const carMakes = ['Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];
  
  const [availableModels, setAvailableModels] = useState<string[]>([]);

  useEffect(() => {
    if (userData.vehicleMake) {
      setAvailableModels(carModels[userData.vehicleMake] || []);
      // Reset model if make changes
      if (!carModels[userData.vehicleMake]?.includes(userData.vehicleModel)) {
        updateUserData({ vehicleModel: '' });
      }
    } else {
      setAvailableModels([]);
      updateUserData({ vehicleModel: '' });
    }
  }, [userData.vehicleMake]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: {
      vehicleYear?: string;
      vehicleMake?: string;
      vehicleModel?: string;
      mileage?: string;
    } = {};
    
    if (!userData.vehicleYear) {
      newErrors.vehicleYear = 'Year is required';
    }
    
    if (!userData.vehicleMake) {
      newErrors.vehicleMake = 'Make is required';
    }
    
    if (!userData.vehicleModel) {
      newErrors.vehicleModel = 'Model is required';
    }
    
    if (!userData.mileage) {
      newErrors.mileage = 'Mileage is required';
    } else if (isNaN(Number(userData.mileage)) || Number(userData.mileage) < 0) {
      newErrors.mileage = 'Mileage must be a positive number';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    navigate('/user-details');
  };
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-2">Your ride</h1>
      <p className="text-center text-gray-600 mb-8">Tell us about your vehicle.</p>
      
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 bg-[#f0edff] rounded-full flex items-center justify-center">
          <Car size={48} className="text-[#5626ff]" />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="card">
        <div className="mb-4">
          <label htmlFor="vehicleYear" className="label">Year</label>
          <select
            id="vehicleYear"
            className={`select-field ${errors.vehicleYear ? 'border-red-500' : ''}`}
            value={userData.vehicleYear}
            onChange={(e) => {
              updateUserData({ vehicleYear: e.target.value });
              if (errors.vehicleYear) {
                setErrors({ ...errors, vehicleYear: undefined });
              }
            }}
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.vehicleYear && <p className="text-red-500 text-xs mt-1">{errors.vehicleYear}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="vehicleMake" className="label">Make</label>
          <select
            id="vehicleMake"
            className={`select-field ${errors.vehicleMake ? 'border-red-500' : ''}`}
            value={userData.vehicleMake}
            onChange={(e) => {
              updateUserData({ vehicleMake: e.target.value });
              if (errors.vehicleMake) {
                setErrors({ ...errors, vehicleMake: undefined });
              }
            }}
          >
            <option value="">Select Make</option>
            {carMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
          {errors.vehicleMake && <p className="text-red-500 text-xs mt-1">{errors.vehicleMake}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="vehicleModel" className="label">Model</label>
          <select
            id="vehicleModel"
            className={`select-field ${errors.vehicleModel ? 'border-red-500' : ''}`}
            value={userData.vehicleModel}
            onChange={(e) => {
              updateUserData({ vehicleModel: e.target.value });
              if (errors.vehicleModel) {
                setErrors({ ...errors, vehicleModel: undefined });
              }
            }}
            disabled={!userData.vehicleMake}
          >
            <option value="">Select Model</option>
            {availableModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
          {errors.vehicleModel && <p className="text-red-500 text-xs mt-1">{errors.vehicleModel}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="vehicleTrim" className="label">Trim</label>
          <input
            type="text"
            id="vehicleTrim"
            className="input-field"
            value={userData.vehicleTrim}
            onChange={(e) => updateUserData({ vehicleTrim: e.target.value })}
            placeholder="e.g. EX, LX, Sport (optional)"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="mileage" className="label">Mileage</label>
          <input
            type="text"
            id="mileage"
            className={`input-field ${errors.mileage ? 'border-red-500' : ''}`}
            value={userData.mileage}
            onChange={(e) => {
              updateUserData({ mileage: e.target.value });
              if (errors.mileage) {
                setErrors({ ...errors, mileage: undefined });
              }
            }}
            placeholder="Current mileage"
          />
          {errors.mileage && <p className="text-red-500 text-xs mt-1">{errors.mileage}</p>}
        </div>
        
        <div className="flex justify-center">
          <button type="submit" className="btn-primary inline-flex items-center">
            Continue
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
        
        <div className="mt-4 flex items-center justify-center">
          <input 
            type="checkbox" 
            id="consent" 
            className="h-4 w-4 text-[#5626ff] focus:ring-[#5626ff] border-gray-300 rounded"
            defaultChecked
          />
          <label htmlFor="consent" className="ml-2 block text-xs text-gray-500">
            I authorize olive.com to collect my personal information to provide me a quote. See our privacy policy.
          </label>
        </div>
      </form>
    </div>
  );
};

export default VehicleDetailsPage;