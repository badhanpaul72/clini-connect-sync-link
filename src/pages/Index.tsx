
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThreeDModel from '@/components/ThreeDModel';
import PhoneMockup from '@/components/PhoneMockup';
import AnimatedSection from '@/components/AnimatedSection';
import FeatureCard from '@/components/FeatureCard';
import StepCard from '@/components/StepCard';
import { 
  UserRound, Users, Shield, Clock, Calendar, ClipboardList, 
  QrCode, Smartphone, CheckCircle, UserPlus, Building, Download,
  Mail, Phone, MapPin, User
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Index() {
  const headerRef = useRef<HTMLElement>(null);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-clinic-50/50 to-white overflow-x-hidden">
      {/* Header */}
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
            <a href="#download" className="text-gray-700 hover:text-clinic-500 transition-colors">Download</a>
            <a href="#contact" className="text-gray-700 hover:text-clinic-500 transition-colors">Contact</a>
          </nav>
          
          <Button variant="default" size="lg" className="bg-clinic-500 hover:bg-clinic-600 hidden md:flex">
            <Download className="w-4 h-4 mr-2" />
            Download App
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 md:pt-0 flex items-center hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              style={{ opacity, y: translateY }}
              className="text-center md:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Connecting <span className="text-gradient">Healthcare</span> Professionals
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8 max-w-lg md:mx-0 mx-auto"
              >
                CliniSync seamlessly connects doctors and healthcare organizations with secure profiles, patient management, and efficient scheduling.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button size="lg" className="bg-clinic-500 hover:bg-clinic-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
                <Button size="lg" variant="outline" className="border-clinic-500 text-clinic-500">
                  <QrCode className="w-4 h-4 mr-2" />
                  Scan QR Code
                </Button>
              </motion.div>
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
      
      {/* App Preview Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Healthcare Collaboration</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CliniSync brings doctors and healthcare facilities together with a secure, efficient platform.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3}>
              <PhoneMockup imageSrc="/placeholder.svg" />
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <div className="space-y-6">
                <div className="bg-clinic-50 p-4 rounded-xl">
                  <h3 className="font-semibold mb-2 text-clinic-700">Doctor Authentication</h3>
                  <p className="text-gray-600 text-sm">Secure sign-up with Aadhar verification and unique doctor authentication ID for trusted connections.</p>
                </div>
                
                <div className="bg-clinic-50 p-4 rounded-xl">
                  <h3 className="font-semibold mb-2 text-clinic-700">Organization Verification</h3>
                  <p className="text-gray-600 text-sm">Healthcare organizations register with GSTIN for easy discovery and verification by healthcare professionals.</p>
                </div>
                
                <div className="bg-clinic-50 p-4 rounded-xl">
                  <h3 className="font-semibold mb-2 text-clinic-700">QR Connection</h3>
                  <p className="text-gray-600 text-sm">Connect instantly by scanning QR codes containing authentication details for swift professional networking.</p>
                </div>
                
                <div className="bg-clinic-50 p-4 rounded-xl">
                  <h3 className="font-semibold mb-2 text-clinic-700">Patient Management</h3>
                  <p className="text-gray-600 text-sm">Organizations can register patients, manage appointments, and send WhatsApp confirmations seamlessly.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-clinic-50/30">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Healthcare Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CliniSync provides specialized tools for both doctors and healthcare organizations.
            </p>
          </AnimatedSection>
          
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
      
      {/* How It Works Section */}
      <section id="howitworks" className="py-20 bg-gradient-to-b from-clinic-50/30 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How CliniSync Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to connect healthcare professionals with organizations.
            </p>
          </AnimatedSection>
          
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
      
      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-clinic-500 to-clinic-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Started with CliniSync Today
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Download the app now and transform how you connect with healthcare professionals.
            </p>
          </AnimatedSection>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <AnimatedSection delay={0.2}>
              <Button size="lg" variant="secondary" className="bg-white text-clinic-500 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
                <QrCode className="w-5 h-5 mr-2" />
                Scan QR Code
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Developer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Development Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the minds behind CliniSync
            </p>
          </AnimatedSection>
          
          <div className="max-w-md mx-auto bg-clinic-50 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-clinic-400 to-clinic-600 mb-4 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>
              <h3 className="text-2xl font-bold mb-1">John Doe</h3>
              <p className="text-clinic-500 mb-4">Lead Developer</p>
              
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-clinic-500" />
                  <span>john@clinisync.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-clinic-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-clinic-500" />
                  <span>123 Healthcare Street, Medicity, IN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-clinic-50/60">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about CliniSync? Get in touch with our team.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <AnimatedSection delay={0.2}>
              <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-500 focus:border-clinic-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-500 focus:border-clinic-500 transition"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-clinic-500 focus:border-clinic-500 transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-clinic-500 hover:bg-clinic-600">
                  Send Message
                </Button>
              </form>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-xl font-bold mb-6 text-clinic-600">Other Ways to Reach Us</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center text-clinic-500">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">support@clinisync.com</p>
                      <p className="text-gray-600">info@clinisync.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center text-clinic-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 12345 67890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinic-100 flex items-center justify-center text-clinic-500">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">123 Healthcare Street,</p>
                      <p className="text-gray-600">Medicity, IN 400001</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Footer */}
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
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-clinic-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-clinic-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-clinic-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-clinic-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2024 CliniSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
