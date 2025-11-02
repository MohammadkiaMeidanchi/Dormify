import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-12">
              About <span className="text-gradient-gold">Us</span>
            </h1>
            
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-xl leading-relaxed mb-8">
                Dormify is a business established by <span className="font-semibold text-luxury-gold">Jonathan Oku, Jeremy Chiege, Arlan Akhmetov, and MohammadKia Meidanchi</span>, with the mission of enhancing student comfort at Oxford International College Brighton.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                Our goal is to transform school dormitories into a home that's away from home, helping students settle in more smoothly — especially those arriving from abroad. By improving the living environment, we aim to boost student morale, which in turn can contribute to stronger academic performance.
              </p>
              
              <p className="text-2xl font-bold mb-8 text-luxury-emerald">
                Room problems?? We solve them.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                The target market are students of all kind, of all sorts of personalities. You tell us your theme, we adjust. Our prices are flexible and vary depending on our customers' demand. With a small extra labour fee, you can have the room of your dreams.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
