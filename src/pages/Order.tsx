import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "DORM PIECE",
    price: "£5.99",
    description: "Perfect for people with less needs and who are looking for something simple. Get up to two of our items individually.",
    features: [
      "Choose up to 2 premium items",
      "Individual selection",
      "Premium quality",
      "Quick delivery",
      "Perfect for minimal needs"
    ],
    popular: false
  },
  {
    name: "DORM DROP",
    price: "£65.99",
    description: "Need the items? Buy our beautiful bundle that offers a wide variety of items for you to enjoy.",
    features: [
      "Curated bundle collection",
      "Wide variety of premium items",
      "Style-matched aesthetic",
      "Complete room enhancement",
      "Direct delivery to your dorm",
      "Professional packaging"
    ],
    popular: true
  },
  {
    name: "DORM REFORM",
    price: "£75.99",
    description: "Need the items and the state of the art services? Order our exclusive dorm reform. It even comes with customisable features!!!",
    features: [
      "Complete luxury transformation",
      "State-of-the-art services",
      "Full customisation options",
      "Personal consultation",
      "Professional installation",
      "Premium item selection",
      "Ongoing support"
    ],
    popular: false
  }
];

const Order = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Join the <span className="text-gradient-gold">Waitlist</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Select your preferred package and secure your exclusive transformation. 
              Limited availability for this semester.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <Card 
                key={pkg.name}
                className={`relative p-8 hover:shadow-luxury transition-all duration-300 ${
                  pkg.popular ? 'border-luxury-gold border-2 scale-105' : 'border-border'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-luxury-gold text-luxury-charcoal px-6 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground">From prices as little as</span>
                    <div className="text-4xl font-bold text-luxury-gold mt-1">{pkg.price}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
                
                <div className="border-t border-border pt-6 mb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={pkg.popular ? "gold" : "luxury"}
                  size="lg" 
                  className="w-full"
                >
                  Select Package
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">
              All packages include our signature attention to detail and commitment to excellence. 
              Each transformation is tailored to your unique style and needs.
            </p>
            <p className="text-sm text-muted-foreground italic">
              * Prices shown are starting points. Final pricing depends on customisation and specific requirements.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Order;
