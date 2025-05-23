import { Check } from 'lucide-react';

type ProgressIndicatorProps = {
  currentStep: number;
};

const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  const steps = [
    { number: 1, label: 'Vehicle' },
    { number: 2, label: 'Details' },
    { number: 3, label: 'Plans' },
    { number: 4, label: 'Purchase' },
  ];

  return (
    <div className="flex justify-between items-center w-full max-w-md mx-auto">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col items-center">
          <div 
            className={`step-indicator ${
              currentStep > step.number
                ? 'step-completed'
                : currentStep === step.number
                ? 'step-active'
                : 'step-inactive'
            }`}
          >
            {currentStep > step.number ? (
              <Check size={16} />
            ) : (
              step.number
            )}
          </div>
          <span className="text-white text-xs mt-1">{step.label}</span>
        </div>
      ))}
      <div className="absolute left-0 right-0 flex justify-between px-10 z-0">
        <div 
          className="h-[2px] bg-white absolute top-4 left-12 -z-5 transition-all duration-500 ease-in-out"
          style={{ 
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            maxWidth: 'calc(100% - 96px)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;