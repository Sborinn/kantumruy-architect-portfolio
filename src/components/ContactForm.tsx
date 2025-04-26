
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="heading-md mb-6">ទំនាក់ទំនងយើង</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-secondary rounded-lg">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="text-body-bold mb-1">អាសយដ្ឋាន</h4>
              <p className="text-muted-foreground">មហាវិថី ព្រះនរោត្តម, ភ្នំពេញ, កម្ពុជា</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-secondary rounded-lg">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="text-body-bold mb-1">អ៊ីមែល</h4>
              <p className="text-muted-foreground">info@architecture.com.kh</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-secondary rounded-lg">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="text-body-bold mb-1">ទូរស័ព្ទ</h4>
              <p className="text-muted-foreground">+855 23 123 456</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 h-72 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.046617300238!2d104.91069871871016!3d11.568332695953611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1650243291223!5m2!1sen!2skh" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            title="Google Maps"
          />
        </div>
      </div>
      
      <div>
        <form onSubmit={handleSubmit} className="bg-card p-6 rounded-xl shadow-sm">
          {isSubmitted ? (
            <div className="text-center p-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="heading-sm mb-2">អរគុណសម្រាប់ការផ្ញើសារ!</h3>
              <p className="text-muted-foreground">យើងនឹងឆ្លើយតបទៅកាន់អ្នកក្នុងពេលឆាប់ៗ</p>
            </div>
          ) : (
            <>
              <h3 className="heading-sm mb-6">ផ្ញើសារមកកាន់យើង</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    ឈ្មោះ
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    អ៊ីមែល
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    ទូរស័ព្ទ
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    សារ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "កំពុងផ្ញើ..." : "ផ្ញើសារ"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
