
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Founder-Led Discovery",
    description: "We extract the DNA of your ideal hire through a deep founder interview."
  },
  {
    number: "02",
    title: "Elite Passive Search",
    description: "Quiet outreach to operators not looking — but perfectly aligned."
  },
  {
    number: "03",
    title: "Precision Screening",
    description: "Each profile is vetted for culture, chemistry, and founder-vision fit."
  },
  {
    number: "04",
    title: "Shortlist Delivery",
    description: "You'll only see 3–5 game-changers who can transform your business."
  },
  {
    number: "05",
    title: "30/60/90-Day Talent Success Check-ins",
    description: "We stay with you — beyond Day 1 to ensure long-term success."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-zeref-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,223,128,0.1),transparent)]"></div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in [animation-delay:0.2s]">
          <span className="text-gold-500 uppercase text-sm font-semibold tracking-wider mb-2 block">Our Approach</span>
          <h2 className="heading-lg mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zeref-800 to-zeref-950">
              Our Signature Search Process
            </span>
          </h2>
          <p className="body-md text-gray-600">
            Minimum Viable Premium: We don't flood inboxes. We send high-signal intros backed by strategic conviction.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line connecting the process steps */}
          <div className="absolute left-[42px] lg:left-1/2 top-8 bottom-0 w-px bg-gradient-to-b from-gold-200 to-gold-400 -ml-px hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 md:gap-0 relative md:items-center opacity-0 animate-fade-in group`}
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 lg:text-right' : 'md:pl-16 md:order-2'}`}>
                  <Card className="border-none shadow-md md:shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                    <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-500"></div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-gold-600 transition-colors">{step.title}</h3>
                      <p className="text-gray-600 group-hover:text-gray-900 transition-colors">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-serif text-xl shadow-lg group-hover:shadow-gold-500/30 group-hover:scale-110 transition-all">
                    {step.number}
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
