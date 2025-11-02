import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Instagram, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-12">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12">
              Connect with us through our social media or email
            </p>
            
            <div className="grid gap-8">
              <Card className="p-8 hover:shadow-luxury transition-all duration-300 text-center">
                <a 
                  href="https://instagram.com/dormify.oic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="bg-luxury-gold p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Instagram className="w-8 h-8 text-luxury-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Instagram</h3>
                    <p className="text-luxury-gold font-semibold">@dormify.oic</p>
                  </div>
                </a>
              </Card>
              
              <Card className="p-8 hover:shadow-luxury transition-all duration-300 text-center">
                <a 
                  href="mailto:dormify.oic@gmail.com"
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="bg-luxury-gold p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-luxury-charcoal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Email</h3>
                    <p className="text-luxury-gold font-semibold">dormify.oic@gmail.com</p>
                  </div>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
