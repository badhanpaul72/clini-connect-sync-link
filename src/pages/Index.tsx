import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeDModel from '@/components/ThreeDModel';
import PhoneMockup from '@/components/PhoneMockup';
import AnimatedSection from '@/components/AnimatedSection';
import FeatureCard from '@/components/FeatureCard';
import StepCard from '@/components/StepCard';
import TutorialVideos from '@/components/TutorialVideos';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  UserRound, Users, Shield, Clock, Calendar, ClipboardList, 
  QrCode, Smartphone, CheckCircle, UserPlus, Building, Download,
  Mail, Phone, MapPin, User, Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ContactForm from '@/components/ContactForm';
import { useIsMobile } from '@/hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroActionsRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const translateY = useTransform(scrollY, [0, 100], [0, -20]);
  
  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;
      
      if (window.scrollY > 80) {
        header.classList.add('backdrop-blur-md', 'bg-white/80', 'shadow-md');
        header.classList.remove('bg-transparent');
      } else {
        header.classList.remove('backdrop-blur-md', 'bg-white/80', 'shadow-md');
        header.classList.add('bg-transparent');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heroTitle = heroTextRef.current;
    const heroSubtitle = heroSubtitleRef.current;
    const heroActions = heroActionsRef.current;

    if (heroTitle && heroSubtitle && heroActions) {
      const tl = gsap.timeline();
      
      tl.from(heroTitle, {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out"
      })
      .from(heroSubtitle, {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out"
      }, "-=0.6")
      .from(heroActions, {
        duration: 0.8,
        opacity: 0,
        y: 20,
        ease: "power3.out"
      }, "-=0.6");
    }

    const sections = document.querySelectorAll('.gsap-section');
    
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });

    const headings = document.querySelectorAll('.gsap-heading');
    
    headings.forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out"
      });
    });

    // Add text animation
    const animatedTexts = document.querySelectorAll('.gsap-text');
    
    animatedTexts.forEach((text) => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        duration: 0.8,
        opacity: 0,
        y: 15,
        stagger: 0.1,
        ease: "power3.out"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinic-50/50 to-white overflow-x-hidden">
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
      >
        <div className="container mx-auto py-4 px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-clinic-500 to-clinic-400 flex items-center justify-center text-white font-bold text-xl">
              CS
            </div>
            <span className="text-2xl font-bold text-gradient">CliniSync</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-clinic-500 transition-colors">Features</a>
            <a href="#howitworks" className="text-gray-700 hover:text-clinic-500 transition-colors">How It Works</a>
            <a href="#tutorials" className="text-gray-700 hover:text-clinic-500 transition-colors">Tutorials</a>
            <a href="#download" className="text-gray-700 hover:text-clinic-500 transition-colors">Download</a>
            <a href="#contact" className="text-gray-700 hover:text-clinic-500 transition-colors">Contact</a>
          </nav>
          
          <Button variant="default" size="lg" className="bg-clinic-500 hover:bg-clinic-600 hidden md:flex">
            <Download className="w-4 h-4 mr-2" />
            <a href="https://github.com/badhan-tech-museum/Clini-Sync/releases/tag/Clini_Sync_App_Release" target="_blank" rel="noopener noreferrer" className="text-white">
              Download App
            </a>
          </Button>
          
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-clinic-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <section className="relative min-h-screen pt-20 md:pt-0 flex items-center hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              style={{ opacity, y: translateY }}
              className="text-center md:text-left"
            >
              <h1 
                ref={heroTextRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Connecting <span className="text-gradient">Healthcare</span> Professionals
              </h1>
              
              <p 
                ref={heroSubtitleRef}
                className="text-lg text-gray-600 mb-8 max-w-lg md:mx-0 mx-auto"
              >
                CliniSync seamlessly connects doctors and healthcare organizations with secure profiles, patient management, and efficient scheduling.
              </p>
              
              <div 
                ref={heroActionsRef}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button size="lg" className="bg-clinic-500 hover:bg-clinic-600">
                  <Download className="w-4 h-4 mr-2" />
                  <a href="https://github.com/badhan-tech-museum/Clini-Sync/releases/tag/Clini_Sync_App_Release" target="_blank" rel="noopener noreferrer" className="text-white">
                    Download App
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                className="absolute -top-10 -left-10 w-64 h-64 bg-clinic-400/10 rounded-full animate-pulse-soft blur-3xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-clinic-300/10 rounded-full animate-pulse-soft blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 10 }}
              />
              
              <div className="relative z-10">
                <ThreeDModel />
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="absolute -bottom-36 left-0 right-0 h-40 bg-white"
          style={{ 
            clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0% 100%)",
          }}
        />
      </section>
      
      {/* Add new Tutorial Videos Section here - above the Seamless Healthcare Collaboration section */}
      <section id="tutorials" className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900 gsap-section">
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gsap-heading text-white">
              Video Tutorials
            </h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto text-center mb-8 gsap-text">
              Learn how to set up and use the CliniSync app with our detailed video guides.
            </p>
            
            <div className="flex justify-center mb-12">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-300 rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TutorialVideos />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative overflow-hidden bg-white gsap-section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gsap-heading">Seamless Healthcare Collaboration</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12 gsap-text">
            CliniSync brings doctors and healthcare facilities together with a secure, efficient platform.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3}>
              <PhoneMockup imageSrc="/placeholder.svg" />
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="space-y-6">
                <div className="bg-clinic-50 p-4 rounded-xl gsap-text">
                  <h3 className="font-semibold mb-2 text-clinic-700">Doctor Authentication</h3>
                  <p className="text-gray-600 text-sm">Secure sign-up with Aadhar verification and unique doctor authentication ID for trusted connections.</p>
                </div>
                
                <div className="bg-clinic-50 p-4 rounded-xl gsap-text">
                  <h3 className="font-semibold mb-2 text-clinic-700">Organization Verification</h3>
                  <p className="text-gray-600 text-sm">Healthcare organizations register with GSTIN for easy discovery and verification by healthcare professionals.</p>
                </div>
                
                <div className="bg-clinic-50 p-4 rounded-xl gsap-text">
                  <h3 className="font-semibold mb-2 text-clinic-700">QR Connection</h3>
                  <p className="text-gray-600 text-sm">Connect instantly by scanning QR codes containing authentication details for swift professional networking.</p>
                </div>
                
                <div className="bg-clinic-50 p-4 rounded-xl gsap-text">
                  <h3 className="font-semibold mb-2 text-clinic-700">Patient Management</h3>
                  <p className="text-gray-600 text-sm">Organizations can register patients, manage appointments, and send WhatsApp confirmations seamlessly.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gradient-to-b from-white to-clinic-50/30 gsap-section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gsap-heading">
            Powerful Features for Healthcare Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16 gsap-text">
            CliniSync provides specialized tools for both doctors and healthcare organizations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<UserRound className="w-6 h-6" />}
              title="Secure Profiles" 
              description="Create secure profiles with Aadhar verification and unique doctor IDs for enhanced security."
              index={0}
            />
            <FeatureCard 
              icon={<QrCode className="w-6 h-6" />}
              title="QR Connections" 
              description="Connect instantly by sharing profile QR codes for quick professional networking."
              index={1}
            />
            <FeatureCard 
              icon={<Calendar className="w-6 h-6" />}
              title="Visit Scheduling" 
              description="Organizations can set custom visit schedules for each connected doctor."
              index={2}
            />
            <FeatureCard 
              icon={<ClipboardList className="w-6 h-6" />}
              title="Patient Management" 
              description="Register patients, track visits, and send WhatsApp confirmations."
              index={3}
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6" />}
              title="Professional Network" 
              description="Build and manage your professional healthcare network with ease."
              index={4}
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="Privacy Controls" 
              description="Manage connection requests and professional relationships with privacy controls."
              index={5}
            />
          </div>
        </div>
      </section>
      
      <section id="howitworks" className="py-20 bg-gradient-to-b from-clinic-50/30 to-white gsap-section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gsap-heading">
            How CliniSync Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16 gsap-text">
            Simple steps to connect healthcare professionals with organizations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-clinic-600">For Doctors</h3>
              <div className="space-y-4">
                <StepCard 
                  number={1} 
                  title="Create Secure Profile" 
                  description="Sign up and verify your identity with Aadhar authentication."
                  icon={<User className="w-5 h-5" />}
                  delay={0.1}
                />
                <StepCard 
                  number={2} 
                  title="Generate Doctor ID" 
                  description="Create your unique doctor authentication ID for connections."
                  icon={<UserPlus className="w-5 h-5" />}
                  delay={0.2}
                />
                <StepCard 
                  number={3} 
                  title="Connect via QR/GSTIN" 
                  description="Find and connect with healthcare organizations."
                  icon={<QrCode className="w-5 h-5" />}
                  delay={0.3}
                />
                <StepCard 
                  number={4} 
                  title="Manage Patient Visits" 
                  description="Track patient visits and mark attendance."
                  icon={<CheckCircle className="w-5 h-5" />}
                  delay={0.4}
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-clinic-600">For Organizations</h3>
              <div className="space-y-4">
                <StepCard 
                  number={1} 
                  title="Register Organization" 
                  description="Create account with GSTIN verification for authenticity."
                  icon={<Building className="w-5 h-5" />}
                  delay={0.1}
                />
                <StepCard 
                  number={2} 
                  title="Connect with Doctors" 
                  description="Find doctors by ID or scan their profile QR codes."
                  icon={<Users className="w-5 h-5" />}
                  delay={0.2}
                />
                <StepCard 
                  number={3} 
                  title="Set Visit Schedules" 
                  description="Configure custom visiting days and hours for each doctor."
                  icon={<Calendar className="w-5 h-5" />}
                  delay={0.3}
                />
                <StepCard 
                  number={4} 
                  title="Manage Patients" 
                  description="Register patients and send booking confirmations via WhatsApp."
                  icon={<Smartphone className="w-5 h-5" />}
                  delay={0.4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="download" className="py-20 bg-gradient-to-r from-clinic-500 to-clinic-600 text-white relative overflow-hidden gsap-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gsap-heading">
            Get Started with CliniSync Today
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-center mb-12 gsap-text">
            Download the app now and transform how you connect with healthcare professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <AnimatedSection delay={0.2}>
              <a href="https://github.com/badhan-tech-museum/Clini-Sync/releases/tag/Clini_Sync_App_Release" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="bg-white text-clinic-500 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white gsap-section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gsap-heading">
            Development Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16 gsap-text">
            Meet the minds behind CliniSync
          </p>
          
          <div className="max-w-md mx-auto bg-clinic-50 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-clinic-400 to-clinic-600 mb-4 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>
              <h3 className="text-2xl font-bold mb-1">Badhan Paul</h3>
              <p className="text-clinic-500 mb-4">Lead Developer</p>
              
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-3 text-gray-700 flex-wrap">
                  <Mail className="w-5 h-5 text-clinic-500 flex-shrink-0" />
                  <span className="break-all">badhan.tech.museum.dev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-clinic-500 flex-shrink-0" />
                  <span>+91 97498 89668</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-clinic-500 flex-shrink-0" />
                  <div>
                    <p>Tank More, Balurghat</p>
                    <p>D/Dinajpur, WB, IN, PIN-733103</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 bg-clinic-50/60 gsap-section">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gsap-heading">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-16 gsap-text">
            Have questions about CliniSync? Get in touch with our team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <ContactForm />
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6 text-clinic-600">Other Ways to Reach Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center text-clinic-500 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600 break-all">badhan.tech.museum.dev@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center text-clinic-500 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+91 97498 89668</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center text-clinic-500 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">Tank More, Balurghat</p>
                      <p className="text-gray-600">D/Dinajpur, WB, IN 733103</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-clinic-500 to-clinic-400 flex items-center justify-center text-white font-bold text-xl">
                  CS
                </div>
                <span className="text-2xl font-bold">CliniSync</span>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting healthcare professionals with organizations seamlessly.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#howitworks" className="text-gray-400 hover:text-white transition">How It Works</a></li>
                <li><a href="#tutorials" className="text-gray-400 hover:text-white transition">Tutorials</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition">Download</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 CliniSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
