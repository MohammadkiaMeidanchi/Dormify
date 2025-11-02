import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-dorm.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 61, 48, 0.92), rgba(26, 61, 48, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Transform Your Dorm Into
            <span className="text-gradient-gold block mt-2">Luxury Living</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-4 leading-relaxed font-light max-w-2xl mx-auto">
            Where exceptional living meets uncompromising quality. 
            An exclusive experience crafted for those who accept nothing less than perfection.
          </p>
          
          <p className="text-xl text-luxury-gold font-semibold mb-12 italic">
            Your space, your style, our touch
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="gold" 
              size="xl" 
              className="group"
              onClick={() => navigate('/order')}
            >
              Join the Waitlist
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
