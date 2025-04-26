
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "សេវាកម្មល្អបំផុត! ពួកគេបានធ្វើឲ្យសុបិនខ្ញុំក្លាយជាការពិត។ ការរចនាដ៏ស្រស់ស្អាតនិងគុណភាពការងារខ្ពស់ធ្វើឲ្យខ្ញុំពេញចិត្តណាស់។",
    author: "សុខ វណ្ណារា",
    position: "វិស្វករសំណង់"
  },
  {
    id: 2,
    text: "ខ្ញុំសប្បាយចិត្តជាមួយនឹងសេវាកម្មរបស់ពួកគេ។ ពួកគេយល់ដឹងពីតម្រូវការរបស់ខ្ញុំហើយផ្តល់ដំណោះស្រាយដ៏ល្អបំផុត។",
    author: "គង់ សុភា",
    position: "ម្ចាស់ហាងកាហ្វេ"
  },
  {
    id: 3,
    text: "ក្រុមផ្នែកសំណង់របស់ពួកគេមានជំនាញខ្ពស់។ ការងារបានសម្រេចមុនពេលកំណត់ហើយការចំណាយក៏សមរម្យទៀតផង។",
    author: "ស៊ិន វិចិត្រ",
    position: "ម្ចាស់អចលនទ្រព្យ"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-card rounded-xl p-8 md:p-12 shadow-sm">
        <div className="absolute -top-5 left-8 bg-accent p-2 rounded-lg">
          <Quote className="w-6 h-6 text-white" />
        </div>
        
        <div className="mt-6">
          <p className="text-body-bold mb-8">{currentTestimonial.text}</p>
          <div>
            <p className="font-semibold">{currentTestimonial.author}</p>
            <p className="text-sm text-muted-foreground">{currentTestimonial.position}</p>
          </div>
        </div>
        
        <div className="absolute bottom-6 right-6 flex space-x-2">
          <button 
            onClick={goToPrevious} 
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="មតិមុន"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={goToNext} 
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="មតិបន្ទាប់"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
