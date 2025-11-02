import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand / Home Link */}
          <a href="/" className="text-2xl font-bold">
            Dormify<span className="text-luxury-gold">.</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-luxury-gold transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-luxury-gold transition-colors">About</a>
            <a href="/contact" className="text-foreground hover:text-luxury-gold transition-colors">Contact</a>
            
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => navigate('/order')}
            >
              Join Waitlist
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-foreground hover:text-luxury-gold transition-colors">Home</a>
              <a href="/about" className="text-foreground hover:text-luxury-gold transition-colors">About</a>
              <a href="/contact" className="text-foreground hover:text-luxury-gold transition-colors">Contact</a>
              
              <Button 
                variant="luxury" 
                size="lg" 
                className="w-full"
                onClick={() => navigate('/order')}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
