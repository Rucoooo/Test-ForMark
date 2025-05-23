import { useState } from 'react';
import { User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../App';

type UserDetailsPageProps = {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
};

const UserDetailsPage = ({ userData, updateUserData }: UserDetailsPageProps) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
  }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10;
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    updateUserData({ phone: formatted });
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: {
      firstName?: string;
      lastName?: string;
      phone?: string;
      email?: string;
    } = {};
    
    if (!userData.firstName) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!userData.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!userData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(userData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!userData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(userData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    navigate('/plans');
  };
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-2">Your details</h1>
      <p className="text-center text-gray-600 mb-8">Tell us about you so we can get your price.</p>
      
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 bg-[#f0edff] rounded-full flex items-center justify-center">
          <User size={48} className="text-[#5626ff]" />
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="label">First name</label>
            <input
              type="text"
              id="firstName"
              className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
              value={userData.firstName}
              onChange={(e) => {
                updateUserData({ firstName: e.target.value });
                if (errors.firstName) {
                  setErrors({ ...errors, firstName: undefined });
                }
              }}
              placeholder="First name"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor="lastName" className="label">Last name</label>
            <input
              type="text"
              id="lastName"
              className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
              value={userData.lastName}
              onChange={(e) => {
                updateUserData({ lastName: e.target.value });
                if (errors.lastName) {
                  setErrors({ ...errors, lastName: undefined });
                }
              }}
              placeholder="Last name"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="label">Phone number (mobile preferred)</label>
          <input
            type="tel"
            id="phone"
            className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
            value={userData.phone}
            onChange={handlePhoneChange}
            placeholder="(555) 555-5555"
            maxLength={14}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            className={`input-field ${errors.email ? 'border-red-500' : ''}`}
            value={userData.email}
            onChange={(e) => {
              updateUserData({ email: e.target.value });
              if (errors.email) {
                setErrors({ ...errors, email: undefined });
              }
            }}
            placeholder="example@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        
        <div className="flex justify-center">
          <button type="submit" className="btn-primary inline-flex items-center">
            See Your Price
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>These details will be used for your quote and to provide service. By submitting this form, you agree to receive communication from olive.com.</p>
          <p className="mt-2">By clicking "See Your Price", you acknowledge you have read and agree to the <a href="#" className="text-[#5626ff] underline">Privacy Policy</a> and <a href="#" className="text-[#5626ff] underline">Terms of Service</a>.</p>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsPage;