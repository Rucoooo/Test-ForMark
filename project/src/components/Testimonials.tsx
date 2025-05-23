import { Star } from 'lucide-react';
import { useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Donna P.',
    location: 'California',
    rating: 5,
    text: 'I was skeptical and afraid to try new coverage for my breakdown insurance but olive made my purchase incredibly easy for a long time.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'David G.',
    location: 'Colorado',
    rating: 5, 
    text: 'I had a great experience with olive. I easily found coverage my auto extended warranty needed. The process was so smooth.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Peggy H.',
    location: 'Florida',
    rating: 5,
    text: 'I experienced a call and assistance from a specialist right away. Excellent customer service. I would recommend olive to everyone. Thank you.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">The (virtually) 5 star auto repair coverage</h2>
          <div className="flex items-center justify-center mb-1">
            <div className="text-2xl font-bold text-[#5626ff] mr-2">4.6</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < 5 ? "text-[#fbd116] fill-[#fbd116]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Based on 2,300+ Google reviews
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`card border transition-all duration-300 ${
                index === activeIndex ? 'border-[#5626ff] shadow-md' : 'border-gray-200'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-600 text-center mb-4 text-sm">"{testimonial.text}"</p>
              <div className="flex justify-center items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-[#fbd116] fill-[#fbd116]"
                  />
                ))}
              </div>
              <p className="text-center font-medium">{testimonial.name}</p>
              <p className="text-center text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full mx-1 ${
                i === activeIndex ? 'bg-[#5626ff]' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(i)}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;