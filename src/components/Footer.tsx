
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-foreground">
                ស្ថាបត្យកម្ម
              </a>
            </div>
            <p className="text-body text-muted-foreground mb-6 max-w-md">
              យើងជាក្រុមហ៊ុនសេវាកម្មសំណង់និងរចនាផ្ទះលំដាប់ខ្ពស់ ដែលផ្ដល់ជូនសេវាកម្មប្រណិតនៅក្នុងប្រទេសកម្ពុជា។
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">តំណរភ្ជាប់រហ័ស</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-accent transition-colors">
                  ដើម
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  អំពីយើង
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  សេវាកម្ម
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                  ស្នាដៃរបស់យើង
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  ទំនាក់ទំនង
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">ទំនាក់ទំនង</h4>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>មហាវិថី ព្រះនរោត្តម, ភ្នំពេញ</p>
              <p>info@architecture.com.kh</p>
              <p>+855 23 123 456</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} សេវាកម្មសំណង់ និងរចនាប្រណិត។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
