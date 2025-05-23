import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Is olive covered?',
    answer: 'Yes, olive offers comprehensive coverage for unexpected auto repairs. Our protection plans are designed to help you avoid costly repair bills and keep your vehicle running smoothly.'
  },
  {
    id: 2,
    question: 'Do I pay a deductible on every claim (repairs) I make?',
    answer: 'Yes, a deductible applies to each covered repair. You can choose your deductible amount when selecting your plan. Lower deductibles mean higher premiums, while higher deductibles result in lower monthly payments.'
  },
  {
    id: 3,
    question: 'When does coverage begin?',
    answer: 'For most plans, there is a waiting period of 30 days and 1,000 miles before coverage begins. This helps ensure that pre-existing conditions are not covered. The exact waiting period will be specified in your policy documents.'
  },
  {
    id: 4,
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your olive coverage at any time. If you cancel within the first 30 days, you\'ll receive a full refund. After that, you\'ll receive a prorated refund based on the unused portion of your policy.'
  },
  {
    id: 5,
    question: 'How do I pay my coverage?',
    answer: 'You can pay for your coverage monthly or annually. We accept all major credit cards and ACH payments. You can manage your payment preferences in your online account.'
  },
  {
    id: 6,
    question: 'Are pre-existing conditions or modifications covered?',
    answer: 'No, pre-existing conditions are not covered. Additionally, vehicles with certain modifications may not be eligible for coverage or may have limited coverage. Please review the terms and conditions for specific exclusions.'
  },
  {
    id: 7,
    question: 'What is olive.com?',
    answer: 'Olive.com is a digital vehicle service contract provider that makes it easy to get coverage for unexpected auto repairs. We offer transparent pricing, convenient online purchases, and excellent customer service.'
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">FAQs</h2>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          {faqItems.map((item, index) => (
            <div key={item.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-[#333333] hover:text-[#5626ff]">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="text-[#5626ff]" />
                ) : (
                  <ChevronDown size={20} className="text-gray-400" />
                )}
              </button>
              <div 
                className={`faq-answer ${
                  activeIndex === index ? 'max-h-96 opacity-100 pb-2' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;