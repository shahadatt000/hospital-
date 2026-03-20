import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Baby, 
  Brain, 
  Microscope, 
  Stethoscope, 
  Calendar, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Bell, 
  UserCircle,
  Zap,
  Leaf,
  ClipboardList,
  Users,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  Star
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <nav className="flex justify-between items-center px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <span className="text-xl font-black tracking-tighter text-primary cursor-pointer">Clinical Sanctuary</span>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-primary font-semibold border-b-2 border-primary pb-1 text-sm">Departments</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Doctors</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Services</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">Appointments</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden sm:flex bg-error text-white px-5 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all active:scale-95 items-center gap-2 text-[10px] uppercase tracking-widest shadow-lg shadow-error/20">
            <Zap size={14} fill="currentColor" />
            Emergency
          </button>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <Bell size={20} className="cursor-pointer hover:text-primary transition-colors hidden sm:block" />
            <UserCircle size={24} className="cursor-pointer hover:text-primary transition-colors" />
            <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#" className="text-primary font-bold text-lg">Departments</a>
              <a href="#" className="text-on-surface-variant font-medium text-lg">Doctors</a>
              <a href="#" className="text-on-surface-variant font-medium text-lg">Services</a>
              <a href="#" className="text-on-surface-variant font-medium text-lg">Appointments</a>
              <button className="bg-error text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-widest mt-4">
                <Zap size={16} fill="currentColor" />
                Emergency
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-7 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-[10px] font-bold mb-8 tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          WORLD-CLASS CARE AVAILABLE
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-on-surface leading-[0.9] tracking-tighter mb-8">
          The Future of <br/><span className="text-primary">Human Wellness</span>.
        </h1>
        <p className="text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
          Experience a clinical environment designed for serenity. We combine empathetic expertise with cutting-edge medical technology.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="hero-gradient text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all flex items-center gap-3 active:scale-95">
            Book Appointment
            <Calendar size={20} />
          </button>
          <button className="bg-surface-container-high text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all active:scale-95">
            View Specialists
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="lg:col-span-5 relative"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-[40px] -rotate-6 scale-95"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd4N1uGRTDCowfSQ4nnkBsAciv3NjAss0sX6DmbS9sOMzDKrXPZrs_7LTpAPwBbL7r90znOuP3yM2rS_-wxe7fTYIk9YwO5WKstxah8_UFLEv0JlNv75z_caAYUoR-a6DuPdXhPurs-X5332Vm4eRtfA6J-306TIMaaFSbFUMWOOBaqV7xVtUzVbiYqlPEw8miifndoMjMmrW_wot67eIwbGcfPls5w4lL7VsqABoLa1gQsvLzvLhS-1-fYmOaD9Wyy4iSK_Gy-YXg" 
          alt="Modern Hospital Interior" 
          className="relative w-full h-[500px] lg:h-[600px] object-cover rounded-[32px] shadow-2xl z-10"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const StatsBar = () => (
  <section className="bg-surface-container-low py-12">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container-lowest rounded-[32px] p-8 flex flex-wrap items-center justify-between gap-8 shadow-sm"
      >
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 bg-error-container text-error rounded-2xl flex items-center justify-center">
            <Stethoscope size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold">24/7 Emergency Response</h3>
            <p className="text-on-surface-variant text-sm">Average wait time: <span className="text-primary font-semibold">4 Minutes</span></p>
          </div>
        </div>
        <div className="h-12 w-[1px] bg-black/5 hidden lg:block"></div>
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Board Certified</h3>
            <p className="text-on-surface-variant text-sm">Top 1% medical professionals</p>
          </div>
        </div>
        <div className="h-12 w-[1px] bg-black/5 hidden lg:block"></div>
        <button className="bg-error text-white px-8 py-4 rounded-xl font-black flex items-center gap-3 hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-error/20">
          <PhoneCall size={20} />
          CALL EMERGENCY NOW
        </button>
      </motion.div>
    </div>
  </section>
);

interface DepartmentCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  colorClass: string;
  isLarge?: boolean;
  image?: string | null;
}

const DepartmentCard = ({ icon: Icon, title, description, colorClass, isLarge = false, image = null }: DepartmentCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`${isLarge ? 'md:col-span-2' : ''} bg-surface-container-low rounded-[32px] p-10 hover:bg-surface-container-high transition-all group cursor-pointer relative overflow-hidden h-[400px]`}
  >
    <Icon size={48} className={`${colorClass} mb-6 group-hover:scale-110 transition-transform`} />
    <h3 className="text-3xl font-bold mb-4">{title}</h3>
    <p className="text-on-surface-variant leading-relaxed max-w-xs">{description}</p>
    {image && (
      <img 
        src={image} 
        alt={title} 
        className="absolute bottom-[-10%] right-[-5%] w-64 h-64 object-cover rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
        referrerPolicy="no-referrer"
      />
    )}
  </motion.div>
);

const Departments = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">Our Departments</span>
          <h2 className="text-5xl font-black tracking-tight leading-tight">Comprehensive care across <span className="text-primary-container">specialized disciplines</span>.</h2>
        </div>
        <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
          Explore all services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DepartmentCard 
          icon={Heart} 
          title="Cardiology" 
          description="Precision diagnostics and advanced treatments for heart health and cardiovascular well-being." 
          colorClass="text-primary"
          isLarge={true}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCE7OzWZXfV8ncdktW0hD3STZBzNGhIUzVE-n5Bpg9neCbOoKHSh5kEb_He4hLKu1k1bM-zqNN3XzFc2yH8e1lLscHEwQn86U-5oSr6aF9wf0XKsUAr7Or-h3S6nm_cLE9M1q63C6QUXfO30iN4nUL-CV-oTYsgMqZQ22evp2ygOe7QtkIwk2moO9QfEqjAq78DNKJ4ZhnEtXiZbvdhHGaN--PTK6iRaOr7PA2ZU9m1itd7Pk0du22YiU8hbPrY8NxP6ACaoUDj7Ht9"
        />
        <DepartmentCard 
          icon={Baby} 
          title="Pediatrics" 
          description="Dedicated care for our youngest patients, from infancy through adolescence." 
          colorClass="text-tertiary"
        />
        <DepartmentCard 
          icon={Brain} 
          title="Neurology" 
          description="Specialized treatment for complex brain and nervous system conditions." 
          colorClass="text-primary"
        />
        <DepartmentCard 
          icon={Microscope} 
          title="Oncology" 
          description="Personalized cancer care powered by research and compassion." 
          colorClass="text-secondary"
        />
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-3 bg-surface-container-low rounded-[32px] p-10 hover:bg-surface-container-high transition-all group cursor-pointer relative overflow-hidden h-[400px]"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center h-full">
            <div className="flex-1">
              <Zap size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Advanced Diagnostics</h3>
              <p className="text-on-surface-variant leading-relaxed">Equipped with the latest MRI, CT, and robotic imaging technology for rapid and accurate diagnosis.</p>
            </div>
            <div className="flex-1 hidden md:block h-full">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdM0eyLH6Z2sHXf1-JStXjFTwBU7euql5KL1YwKrWXrg_QmlgTLq9zc_ZZuCcI7PU38KgqqfIEIMhOIBa16kR77f1_LUh8mwIS4WUaPEmjkiyByvMXiryoeg5xug_po_-qucb8R2z54oW76OsAFQz012GHi-jOqrDaAEtqaaV2OBYCcj44o-IHofHgKJT-xwZ4XiBfBptp1E0zcnb1Ijf3Bi9YQ-rth5X2QeF92srgh023zuplJIR-6rC1k29-UIcVOtzMWaXCGir" 
                alt="Diagnostics Lab" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-surface-container-low overflow-hidden">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcfCZLaXs0w-ViCttnAzq8i6Iq4zrBEhntuBNm1To2PpYizjHxuBUyisr1vsLF-PE4yhC0w_q85BQVAouic30J0vDk39w0FB468Jk7k7N4vub7X27JP37TECxAElggPZMF3H16vOYv-x1gwfu78lW6qn2afGVAaiHzKBgiIk7WFyNfKh5OwP6WFlozXbb1Y8E1XoTuG0hei-AG-13_3TPrNy4IByMCnyW4JsFUBGl86rzvlXoJbyFOZcDEefIF4rsRn_tKZaDqBX6Q" 
              alt="Doctor interaction" 
              className="rounded-[32px] w-full h-80 object-cover mt-8 shadow-lg"
              referrerPolicy="no-referrer"
            />
            <motion.img 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCunoj4gTNjUH5Q3xPsDo_-Co9LJNp_s7i8Yw1Kpp5IeetF3rAOh9Np0V1uXKxqhqlGq8VqVFJP43ZDa8L68L0L81j0S5fuOaYDtfA_u12cVTO8XgMpUv9EYIDxRNBaZisXZp6FgjLBDz0446GFdvhu8jFxjFOLP-YczVLEqga7mGVN9pUtePHOPNDgJp2I3j3EM6kjCMLxWBoymZSWoUKmaChKfcVr2e-DsaBNONj_TKzCnwmFL4z0cR2b_uwijxZMOGZm9NFFWGwQ" 
              alt="Care facility" 
              className="rounded-[32px] w-full h-80 object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 border border-black/5"
          >
            <div className="h-12 w-12 bg-blue-100 text-primary rounded-full flex items-center justify-center">
              <Star size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-2xl font-black">4.9/5</p>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Patient Rating</p>
            </div>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">Why Clinical Sanctuary?</span>
          <h2 className="text-5xl font-black tracking-tight leading-tight mb-10">Quiet clinical excellence that <span className="text-primary-container">puts you first</span>.</h2>
          
          <ul className="space-y-10">
            {[
              { icon: Leaf, title: "Sanctuary Design", desc: "Our facilities are acoustically engineered to reduce stress and promote healing through natural light and silence." },
              { icon: ClipboardList, title: "Patient-Centric Portal", desc: "Access your results, book appointments, and chat with your care team through our encrypted digital platform." },
              { icon: Users, title: "Multidisciplinary Teams", desc: "Your health is handled by a collaborative board of specialists, ensuring no detail is overlooked." }
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <item.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="hero-gradient rounded-[48px] p-12 md:p-20 relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-primary/30"
      >
        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Stay informed about your health.</h2>
          <p className="text-blue-100 text-lg mb-10 opacity-90">Join 50,000+ neighbors who receive our weekly health insights and community wellness updates.</p>
          <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none focus:ring-0 text-white placeholder-white/60 flex-1 px-4 outline-none"
            />
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-surface-container-lowest transition-all active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] text-center border border-white/10">
              <p className="text-4xl font-black mb-1">12+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Locations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] text-center border border-white/10">
              <p className="text-4xl font-black mb-1">450+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Specialists</p>
            </div>
          </div>
        </div>
        
        <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-black/5 rounded-full blur-[80px]"></div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-high pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-1">
          <span className="text-2xl font-black text-primary block mb-8 tracking-tighter">Clinical Sanctuary</span>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-10 font-medium">
            Providing high-end editorial healthcare experiences that prioritize cognitive ease and quiet confidence.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-primary hover:scale-110 transition-transform"><Facebook size={20} /></a>
            <a href="#" className="text-primary hover:scale-110 transition-transform"><Twitter size={20} /></a>
            <a href="#" className="text-primary hover:scale-110 transition-transform"><Instagram size={20} /></a>
            <a href="#" className="text-primary hover:scale-110 transition-transform"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div>
          <h5 className="text-[10px] uppercase font-black tracking-[0.2em] text-on-surface mb-8">Quick Links</h5>
          <ul className="space-y-4">
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium">Departments</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium">Doctors</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium">Careers</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-[10px] uppercase font-black tracking-[0.2em] text-on-surface mb-8">Legal & Access</h5>
          <ul className="space-y-4">
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium">Privacy Policy</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium">Terms of Service</a></li>
            <li><a href="#" className="text-on-surface-variant hover:text-primary transition-all text-sm font-medium">Accessibility</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-[10px] uppercase font-black tracking-[0.2em] text-on-surface mb-8">Emergency Contact</h5>
          <p className="text-primary text-3xl font-black mb-4 tracking-tighter">1-800-SANCTUARY</p>
          <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
            Available 24/7 for medical emergencies and ambulance services.
          </p>
        </div>
      </div>
      
      <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/60">
        <span>© 2024 Clinical Sanctuary Health Systems. All rights reserved.</span>
        <div className="flex gap-8">
          <span>Certified Medical Provider</span>
          <span>ISO 9001:2015</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Departments />
        <WhyChooseUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
