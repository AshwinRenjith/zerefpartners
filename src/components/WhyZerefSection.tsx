
import { Check } from 'lucide-react';

const reasons = [
  {
    title: "High Conviction. Low Volume.",
    description: "We only connect you with candidates we genuinely believe will excel in your company's unique environment."
  },
  {
    title: "Deep Founder Empathy.",
    description: "Our experience working with startups means we understand the challenges you face and the talent you need."
  },
  {
    title: "No dashboards. No ghosting.",
    description: "We're committed to transparent, responsive communication throughout the search process."
  },
  {
    title: "One client per vertical, per time zone.",
    description: "We eliminate conflicts of interest by maintaining exclusivity in your market segment."
  },
  {
    title: "Built to find the \"1 in 1,000.\"",
    description: "Our specialized approach targets the exceptional few who will truly transform your organization."
  }
];

const WhyZerefSection = () => {
  return (
    <section id="why-zeref" className="section-padding bg-zeref-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(205,138,51,0.15),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 animate-fade-in [animation-delay:0.2s]">
            <span className="text-gold-500 uppercase text-sm font-semibold tracking-wider mb-2 block">Why Choose Us</span>
            <h2 className="heading-lg mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Why Founders Should Choose Zeref Partners
              </span>
            </h2>
            <p className="body-md text-gray-300 mb-8">
              Our approach to executive search is built around the unique needs of ambitious 
              founders and elite teams who are shaping the future.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="flex opacity-0 animate-fade-in-right group hover:translate-x-2 transition-transform duration-300"
                  style={{animationDelay: `${0.4 + index * 0.1}s`}}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-600/30 flex items-center justify-center group-hover:from-gold-500/40 group-hover:to-gold-600/40 transition-all">
                      <Check className="h-3.5 w-3.5 text-gold-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-gold-400 transition-colors">{reason.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in [animation-delay:0.4s] group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-zeref-700/30 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-zeref-800/80 to-zeref-900/80 rounded-2xl"></div>
            <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-zeref-900/50 backdrop-blur-sm p-8 md:p-12 group-hover:border-gold-500/20 transition-colors">
              <span className="gold-trident text-4xl mb-6 inline-block group-hover:scale-110 transition-transform">🔱</span>
              <h3 className="font-serif text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                "To connect visionary leaders with companies shaping tomorrow."
              </h3>
              <p className="text-gray-300 italic mb-8">
                Our mission drives everything we do. We believe the right leadership can transform good 
                companies into great ones, and we're passionate about making those connections.
              </p>
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-zeref-900 font-serif text-xl group-hover:scale-110 transition-transform">ZP</div>
                  <div className="ml-4">
                    <div className="font-serif font-semibold">Zeref Partners</div>
                    <div className="text-sm text-gray-400">Retained Executive Search</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyZerefSection;
