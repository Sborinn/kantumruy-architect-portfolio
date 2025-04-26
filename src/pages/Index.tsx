
import { HomeIcon, Brush, Construction, Wrench } from "lucide-react";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import PortfolioGallery from "../components/PortfolioGallery";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "រចនាផ្ទះ",
      description: "យើងរចនាលំនៅដ្ឋានទំនើបដែលផ្គួបផ្សំរវាងភាពស្រស់ស្អាត និងបែបបទរស់នៅប្រកបដោយផាសុខភាព។"
    },
    {
      icon: Construction,
      title: "សំណង់ផ្ទះថ្មី",
      description: "យើងសាងសង់គម្រោងថ្មីដែលបំពេញតាមស្តង់ដារខ្ពស់បំផុតមានប្រើសម្ភារៈល្អៗជាមួយវិស្វករជំនាញ។"
    },
    {
      icon: Wrench,
      title: "ការជួសជុលនិងធ្វើអាប់ដេត",
      description: "យើងធ្វើអោយផ្ទះចាស់របស់អ្នកបានកែលម្អទៅជាទំនើបដោយរក្សាឧត្តមភាពដើម។"
    },
    {
      icon: Brush,
      title: "ការតុបតែងផ្ទះ",
      description: "យើងបង្កើតការតុបតែងផ្ទៃក្នុងតាមបែបទំនើបដែលឆ្លុះបញ្ចាំងពីបុគ្គលិកលក្ខណៈរបស់អ្នក។"
    }
  ];

  return (
    <div className="min-h-screen font-kantumruy">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-cover bg-center parallax-bg"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80')",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <h1 className="heading-xl mb-6">
              សេវាកម្មសំណង់ និងរចនាប្រណិត
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              បំពេញសុបិន្តផ្ទះក្នុងសុបិនរបស់អ្នក។
            </p>
            <a href="#contact" className="btn btn-primary">
              ទំនាក់ទំនងយើង
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?auto=format&fit=crop&w=800&q=80" 
                alt="About Us" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">អំពីយើង</h2>
              <p className="text-body mb-6">
                យើងជាក្រុមហ៊ុនសេវាកម្មរចនានិងសំណង់លំដាប់ខ្ពស់ដែលបានបង្កើតឡើងនៅឆ្នាំ២០១០។ យើងមានបទពិសោធន៍ជាង១៣ឆ្នាំក្នុងការរចនានិងសាងសង់អគារដែលបំពេញតាមបទដ្ឋានអន្តរជាតិនិងតម្រូវការរបស់អតិថិជន។
              </p>
              <p className="text-body mb-6">
                ក្រុមការងាររបស់យើងរួមមានស្ថាបត្យករ វិស្វករ និងអ្នករចនាលំដាប់អន្តរជាតិដែលមានចំណេះដឹងខ្ពស់ក្នុងការផ្តល់ជូននូវដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិតនិងមាននិរន្តរភាព។
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="heading-lg mb-1">១៣+</p>
                  <p className="text-muted-foreground">ឆ្នាំបទពិសោធន៍</p>
                </div>
                <div>
                  <p className="heading-lg mb-1">២០០+</p>
                  <p className="text-muted-foreground">គម្រោងបានបញ្ចប់</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-secondary/50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">សេវាកម្មរបស់យើង</h2>
            <p className="text-body text-muted-foreground">
              យើងផ្តល់ជូននូវសេវាកម្មពេញលេញចាប់ពីការរចនា ការសាងសង់ ការជួសជុល និងការតុបតែង ដើម្បីបំពេញតាមតម្រូវការផ្សេងៗរបស់អតិថិជន។
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">ស្នាដៃរបស់យើង</h2>
            <p className="text-body text-muted-foreground">
              សូមទស្សនាគម្រោងដែលយើងបានបញ្ចប់ ដែលឆ្លុះបញ្ចាំងពីគុណភាព និងស្តាយជំនាញរបស់យើង។
            </p>
          </div>
          
          <PortfolioGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-secondary/50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">មតិអតិថិជន</h2>
            <p className="text-body text-muted-foreground">
              សូមស្តាប់ពីបទពិសោធន៍របស់អតិថិជនរបស់យើងដែលបានប្រើប្រាស់សេវាកម្មរបស់យើង។
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">ទំនាក់ទំនងយើង</h2>
            <p className="text-body text-muted-foreground">
              សូមទាក់ទងមកយើងខ្ញុំ ដើម្បីពិភាក្សាអំពីគម្រោងរបស់អ្នក។ យើងរង់ចាំដោយក្តីរំភើប!
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
