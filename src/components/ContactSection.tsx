
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-40%,rgba(205,138,51,0.05),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in [animation-delay:0.2s]">
          <span className="text-gold-500 uppercase text-sm font-semibold tracking-wider mb-2 block">Get Started</span>
          <h2 className="heading-lg mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zeref-800 to-zeref-950">
              Ready to Make Your Next Key Hire?
            </span>
          </h2>
          <p className="body-md text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a confidential discovery call to discuss your hiring needs. We'll help you 
            find the exceptional talent your company needs to reach its full potential.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-zeref-800 to-zeref-900 text-white hover:from-zeref-900 hover:to-zeref-950 transform hover:scale-105 transition-all shadow-lg hover:shadow-zeref-900/20"
            asChild
          >
            <button
              data-tally-open="nrgPAp"
              data-tally-emoji-text="✨"
              data-tally-emoji-animation="wave"
              type="button"
            >
              Start Your Search
            </button>
          </Button>
          
          {/* Contact Info */}
          <div className="mt-12 p-6 bg-gradient-to-br from-zeref-50 to-white rounded-xl shadow-sm border border-zeref-100 max-w-md mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-zeref-800">Email:</span>
                <a href="mailto:zerefpartners@proton.me" className="block text-gold-600 hover:text-gold-700 transition-colors">zerefpartners@proton.me</a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="font-medium text-zeref-800">Phone:</span>
                <a href="tel:+919747965366" className="block text-gold-600 hover:text-gold-700 transition-colors">+91 9747965366</a>
              </div>
            </div>
            
            <div className="pt-4 mt-4 border-t border-zeref-100">
              <h3 className="text-sm font-semibold text-zeref-800 mb-3">Connect with us</h3>
              <div className="flex justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/ashwin-renjith-629024220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://x.com/Ashwin_Renjith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-white bg-black hover:bg-gray-800 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  Twitter
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://www.linkedin.com/in/ashwin-renjith-629024220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-zeref-800 to-zeref-900 hover:from-zeref-900 hover:to-zeref-950 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Connect With Ashwin
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
