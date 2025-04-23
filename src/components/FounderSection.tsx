
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="about-founder" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(205,138,51,0.05),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="/lovable-uploads/a1b5d141-cecf-473f-a9a8-b99325700930.png" 
                  alt="Ashwin Renjith, Founder of Zeref Partners" 
                  className="object-cover w-full h-full"
                />
                <AvatarFallback>
                  <User className="w-full h-full text-gray-300" />
                </AvatarFallback>
              </Avatar>
            </div>
            {/* Placing the user image directly above emoji and text */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="opacity-0 animate-fade-in [animation-delay:0.3s]">
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="/lovable-uploads/a1b5d141-cecf-473f-a9a8-b99325700930.png" 
                alt="Ashwin Renjith" 
                className="w-8 h-8 rounded-full border-2 border-gold-400 object-cover"
              />
              <span className="text-gold-500 uppercase text-sm font-semibold tracking-wider">About the Founder</span>
            </div>
            <h2 className="heading-lg mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zeref-800 to-zeref-950">
                Ashwin Renjith – Founder, Zeref Partners
              </span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="body-md">
                Ashwin Renjith isn’t your typical search professional — he’s a founder first.
              </p>
              <p className="body-md">
                After building and scaling startup teams from zero, Ashwin realized the harsh truth every early-stage company faces: the first 10 hires make or break the mission. And yet, most search firms treat recruiting like transactions, not transformations.
              </p>
              <p className="body-md">
                Zeref Partners was born from that pain.
              </p>
              <p className="body-md">
                A product of India’s rising tech-entrepreneurial wave, Ashwin combines founder empathy, talent obsession, and a strategist's mindset. He speaks both languages: the heart of the builder and the head of the operator. Whether it’s placing a stealth-mode AI CTO or quietly replacing a misaligned VP, Ashwin operates with discretion, depth, and a war-time mentality.
              </p>
              <p className="body-md">
                He founded Zeref Partners to serve high-stakes startups that need more than just resumes — they need partners in war.
              </p>
              <p className="body-md italic font-semibold">
                “I’ve been in the founder’s chair — I know how existential each hire feels. That’s why I built a firm that sends conviction, not confusion.”
              </p>
              <p className="body-md">
                Ashwin personally leads every search at Zeref, ensuring each client gets white-glove attention, unparalleled focus, and access to talent before they hit the market.
              </p>
            </div>
            <a 
              href="https://www.linkedin.com/in/ashwin-renjith-629024220/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="mt-8 bg-gradient-to-r from-zeref-800 to-zeref-900 text-white hover:text-white hover:from-zeref-900 hover:to-zeref-950 transform hover:scale-105 transition-all shadow-lg hover:shadow-zeref-900/20"
              >
                Connect with Ashwin
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
