import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-luxury">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Space?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Join the community of students who chose comfort, luxury, and success. 
            Your dream dorm is just one click away.
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
          
          <p className="mt-8 text-primary-foreground/70 text-sm italic">
            Exclusively available to OICB Students
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
