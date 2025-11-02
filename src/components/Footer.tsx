import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-2xl font-bold mb-4">
            Dormify<span className="text-luxury-gold">.</span>
          </h3>
          <p className="text-primary-foreground/80 mb-6 leading-relaxed">
            Transforming student living into luxury experiences. 
            Comfort, personalization, and excellence for achievers.
          </p>
          <p className="text-luxury-gold font-semibold italic mb-6">
            Your space, your style, our touch
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <a 
              href="https://instagram.com/dormify.oic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-luxury-gold/10 p-2 rounded-lg hover:bg-luxury-gold/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:dormify.oic@gmail.com" 
              className="bg-luxury-gold/10 p-2 rounded-lg hover:bg-luxury-gold/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex gap-6 justify-center text-sm text-primary-foreground/80 mb-8">
            <a href="/about" className="hover:text-luxury-gold transition-colors">About Us</a>
            <a href="/contact" className="hover:text-luxury-gold transition-colors">Contact</a>
            <a href="/order" className="hover:text-luxury-gold transition-colors">Order</a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          <p>© 2025 Dormify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
