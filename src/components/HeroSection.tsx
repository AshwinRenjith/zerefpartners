
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-zeref-950 to-zeref-900 text-white pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[100px] animate-pulse transform -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zeref-500/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl opacity-0 animate-fade-in [animation-delay:0.2s]">
          <span className="gold-trident text-6xl mb-6 inline-block hover:scale-110 transition-transform cursor-default">🔱</span>
          <h1 className="heading-xxl text-white mb-8 [text-wrap:balance]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Connecting</span> Visionary Leaders with Companies Shaping Tomorrow
          </h1>
          <p className="body-lg mb-10 text-gray-300 max-w-2xl leading-relaxed">
            Zeref Partners is a retained executive search firm delivering high-conviction, 
            low-noise hiring solutions to ambitious founders and elite teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/zerefpartners"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-zeref-950 hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-gold-500/20"
              >
                Schedule a Discovery Call
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 bg-transparent text-gold-500 hover:bg-white/10 hover:text-white backdrop-blur-sm transform hover:scale-105 transition-all"
            >
              Learn Our Process
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 animate-fade-in [animation-delay:1s]">
        <a 
          href="#services" 
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors group"
        >
          <span className="text-sm font-medium mb-2">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
            <ArrowDown className="w-3 h-3 mt-2 animate-bounce text-white/60 group-hover:text-white/90" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
