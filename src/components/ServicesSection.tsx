
import { SearchIcon, Users, Briefcase, Shield, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: <Briefcase className="h-6 w-6 text-gold-500" />,
    title: "C-Suite & VP Hires",
    description: "Strategic placement of executives who align with your company's vision and can drive exceptional results."
  },
  {
    icon: <Users className="h-6 w-6 text-gold-500" />,
    title: "Foundational Leadership Teams",
    description: "Building the critical first 10–50 employees who will set the cultural and operational foundation."
  },
  {
    icon: <Shield className="h-6 w-6 text-gold-500" />,
    title: "Confidential Replacements",
    description: "Discreet, high-sensitivity executive transitions handled with unparalleled discretion."
  },
  {
    icon: <Target className="h-6 w-6 text-gold-500" />,
    title: "Ultra-Niche Specialists",
    description: "Finding rare talent in specialized domains including AI, GTM, Deeptech, and emerging technologies."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in [animation-delay:0.2s]">
          <h2 className="heading-lg mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zeref-800 to-zeref-950">Our Focus Areas</span>
          </h2>
          <p className="body-md text-gray-600">
            Zeref Partners specializes in mission-critical hires for startups backed by conviction capital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border border-gray-100 hover:border-gold-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm opacity-0 animate-fade-in" 
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <CardHeader>
                <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{service.icon}</div>
                <CardTitle className="font-serif group-hover:text-gold-600 transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
