import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Mail, MapPin, Clock, Check, ArrowRight, Menu, X, Star, Users, Award, ChevronUp } from 'lucide-react';

const placeholderImageUrls = {
  hero: "/images/hero.jpg",
  bathroom1: "/images/bathroom1.jpg",
  kitchen1: "/images/kitchen1.jpg",
  floor1: "/images/floor1.jpg",
  bathroom2: "/images/bathroom2.jpg",
  detail1: "/images/detail1.jpg",
  detail2: "/images/detail2.jpg",
  logo: "/images/logo.png",
  kitchen2: "/images/kitchen2.jpg",
  floor2: "/images/floor2.jpg"

};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const heroImages = ["/images/hero.jpg", "/images/bathroom1.jpg", "/images/kitchen1.jpg"];
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Cambio automático de imágenes en el hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevenir scroll cuando el menú está abierto
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleCallClick = () => {
    window.location.href = "tel:+17867626304";
  };

  const handleMessageClick = () => {
    window.location.href = "sms:+17867626304";
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-blue-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <img src={placeholderImageUrls.logo} alt="WNL Flooring" className="h-20 mx-auto mb-6 animate-pulse" />
            <div className="w-16 h-16 border-4 border-blue-300 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-xl font-medium">Cargando WNL Flooring...</p>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-white font-sans">
        {/* Header with Logo and Navigation */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2 backdrop-blur-sm' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`flex items-center ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                <img src={placeholderImageUrls.logo} alt="WNL Flooring Logo" className="h-12 mr-4" />
                <div>
                  <h1 className="text-2xl font-bold tracking-tight">WNL Flooring</h1>
                  <p className="text-sm opacity-90">Premium Tile Remodeling</p>
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu} 
                className={`p-2 focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center space-x-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <button onClick={() => scrollToSection('services')} className="font-medium text-sm uppercase tracking-wide hover:opacity-75 transition-opacity">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="font-medium text-sm uppercase tracking-wide hover:opacity-75 transition-opacity">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="font-medium text-sm uppercase tracking-wide hover:opacity-75 transition-opacity">Contact</button>
              
              <div className="flex items-center pl-4 ml-4 border-l border-gray-300">
                <button 
                  onClick={handleCallClick} 
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <PhoneCall size={18} className="mr-2" />
                  (786) 762-6304
                </button>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col">
            <div className="flex justify-between items-center p-6">
              <div className="flex items-center text-white">
                <img src={placeholderImageUrls.logo} alt="WNL Flooring Logo" className="h-12 mr-4" />
                <h1 className="text-2xl font-bold">WNL Flooring</h1>
              </div>
              <button onClick={toggleMenu} className="text-white p-2">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow text-white text-center space-y-8 py-8">
              <button onClick={() => scrollToSection('services')} className="text-2xl font-medium hover:text-blue-300 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-2xl font-medium hover:text-blue-300 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-2xl font-medium hover:text-blue-300 transition-colors">Contact</button>
              <div className="flex flex-col space-y-4 mt-8 w-64">
                <button 
                  onClick={handleCallClick} 
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <PhoneCall size={20} className="mr-2" />
                  Call Now
                </button>
                <button 
                  onClick={handleMessageClick} 
                  className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Message
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
        </div>
        
        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-slide-in-left">
              Exceptional Tile <br/>
              <span className="text-blue-200">Craftsmanship</span>
            </h2>
            <div className="w-24 h-1 bg-blue-300 mb-8 animate-expand"></div>
            <p className="text-xl text-gray-100 mb-10 max-w-xl animate-slide-in-right">
              Transforming bathrooms, kitchens, and living spaces with premium tile installations and exquisite attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-in-up">
              <button 
                onClick={handleCallClick} 
                className="flex items-center justify-center bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <PhoneCall size={20} className="mr-3" />
                Free Consultation
              </button>
              <button 
                onClick={handleMessageClick} 
                className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle size={20} className="mr-3" />
                Message Us
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent h-32 pointer-events-none"></div>
      </section>
      
      {/* Brand Bar */}
      <section className="bg-blue-50 py-8 border-b border-blue-100 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                <Check size={28} className="text-blue-700" />
              </div>
              <div>
                <p className="font-bold text-2xl text-blue-900">Licensed</p>
                <p className="text-sm text-blue-700">& Insured</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                <Star size={28} className="text-blue-700" />
              </div>
              <div>
                <p className="font-bold text-2xl text-blue-900">5-Star</p>
                <p className="text-sm text-blue-700">Service</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                <Award size={28} className="text-blue-700" />
              </div>
              <div>
                <p className="font-bold text-2xl text-blue-900">15+</p>
                <p className="text-sm text-blue-700">Years Experience</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                <PhoneCall size={28} className="text-blue-700" />
              </div>
              <div>
                <button onClick={handleCallClick} className="font-bold text-lg text-blue-900 hover:text-blue-600 transition-colors">
                  (786) 762-6304
                </button>
                <p className="text-sm text-blue-700">Call Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-sm mb-4">OUR EXPERTISE</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Premium Tile Services</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized tile installation and remodeling services delivered with exceptional craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="group bg-white overflow-hidden shadow-lg rounded-sm transition-all duration-300 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img 
                  src={placeholderImageUrls.bathroom1} 
                  alt="Bathroom Tile Remodeling" 
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Bathroom Remodeling</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Transform your bathroom with our premium tile installations. From shower enclosures to floor tiling, we create stunning and functional spaces that elevate your home.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Shower & Tub Surrounds</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Floor & Wall Tile</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom Niches & Benches</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-flex items-center text-blue-600 font-medium text-sm">
                  LEARN MORE <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="group bg-white overflow-hidden shadow-lg rounded-sm transition-all duration-300 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img 
                  src={placeholderImageUrls.kitchen1} 
                  alt="Kitchen Tile Installation" 
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Kitchen Tile</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Elevate your kitchen with designer tile backsplashes and premium flooring options. Our expert craftsmen deliver impeccable installations tailored to your style.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom Backsplashes</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Countertop Applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Floor Installations</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-flex items-center text-blue-600 font-medium text-sm">
                  LEARN MORE <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="group bg-white overflow-hidden shadow-lg rounded-sm transition-all duration-300 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img 
                  src={placeholderImageUrls.floor2} 
                  alt="Floor Tile Installation" 
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Specialty Installations</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">From intricate mosaic patterns to large-format tiles, our specialized installation services bring your design vision to life with meticulous attention to detail.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mosaic & Pattern Work</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Large Format Tiles</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Decorative Accent Work</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-flex items-center text-blue-600 font-medium text-sm">
                  LEARN MORE <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
                          <a 
              href="#contact" 
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-sm font-medium text-lg transition-colors duration-300"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 bg-blue-200 text-blue-700 text-sm font-semibold rounded-sm mb-4">OUR WORK</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Portfolio Showcase</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Browse our collection of premium tile installations and transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-sm shadow-lg">
              <img 
                src={placeholderImageUrls.hero} 
                alt="Modern Bathroom Remodel" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Modern Bathroom</h3>
                  <p className="text-white text-sm mb-4">Full renovation with custom shower and floor tile</p>
                  <button onClick={handleCallClick} className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors">
                    Get a Similar Design
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-sm shadow-lg">
              <img 
                src={placeholderImageUrls.kitchen2} 
                alt="Luxury Kitchen Backsplash" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Designer Kitchen</h3>
                  <p className="text-white text-sm mb-4">Custom backsplash with premium porcelain tile</p>
                  <button onClick={handleCallClick} className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors">
                    Get a Similar Design
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-sm shadow-lg">
              <img 
                src={placeholderImageUrls.floor1} 
                alt="Custom Floor Pattern" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Luxury Flooring</h3>
                  <p className="text-white text-sm mb-4">Large format porcelain tiles with custom pattern</p>
                  <button onClick={handleCallClick} className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors">
                    Get a Similar Design
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-sm shadow-lg">
              <img 
                src={placeholderImageUrls.bathroom2} 
                alt="Spa-like Shower" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Spa Retreat</h3>
                  <p className="text-white text-sm mb-4">Custom shower with bench and niche installations</p>
                  <button onClick={handleCallClick} className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors">
                    Get a Similar Design
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-sm shadow-lg">
              <img 
                src={placeholderImageUrls.detail1} 
                alt="Detailed Mosaic Work" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Custom Mosaic</h3>
                  <p className="text-white text-sm mb-4">Intricate mosaic pattern with precision installation</p>
                  <button onClick={handleCallClick} className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors">
                    Get a Similar Design
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-sm shadow-lg">
              <img 
                src={placeholderImageUrls.detail2} 
                alt="Contemporary Feature Wall" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Feature Wall</h3>
                  <p className="text-white text-sm mb-4">Designer accent wall with dimensional tile</p>
                  <button onClick={handleCallClick} className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors">
                    Get a Similar Design
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleCallClick}
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-sm mb-4">TESTIMONIALS</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "WNL Flooring transformed our bathroom completely! The attention to detail and quality of work exceeded our expectations. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Maria Rodriguez</h4>
                  <p className="text-sm text-gray-500">Bathroom Renovation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Professional, punctual, and absolutely stunning results. Our kitchen backsplash is now the centerpiece of our home!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">John & Sarah Wilson</h4>
                  <p className="text-sm text-gray-500">Kitchen Backsplash</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "From start to finish, the team was amazing. Clean work, fair pricing, and beautiful results. We'll definitely use them again!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Carlos Mendez</h4>
                  <p className="text-sm text-gray-500">Floor Installation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full">
              <Star size={20} className="text-yellow-300 fill-current mr-2" />
              <span className="font-semibold">4.9/5 Stars</span>
              <span className="mx-2">•</span>
              <span>200+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* CTA Section */}
      <section className="py-20 overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Contact us today for a free consultation and estimate on your tile project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={handleCallClick} 
                className="flex items-center justify-center bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-sm font-medium text-lg transition-colors duration-300"
              >
                <PhoneCall size={20} className="mr-3" />
                Call (786) 762-6304
              </button>
              <button 
                onClick={handleMessageClick} 
                className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-sm font-medium text-lg transition-colors duration-300"
              >
                <MessageCircle size={20} className="mr-3" />
                Message Us
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-sm mb-4">CONTACT US</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto">
              Have questions or ready to start your project? Reach out to our team today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-sm shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm">Full Name*</label>
                      <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm">Phone Number*</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm">Email Address*</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-gray-700 font-medium mb-2 text-sm">Project Type</label>
                    <select id="project" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white">
                      <option value="">Select Project Type</option>
                      <option value="bathroom">Bathroom Remodel</option>
                      <option value="kitchen">Kitchen Tile</option>
                      <option value="floor">Floor Installation</option>
                      <option value="shower">Shower Remodel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm">Project Details</label>
                    <textarea id="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
                  </div>
                  <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-sm font-medium text-lg transition-colors duration-300">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-sm shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <PhoneCall size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
                      <a href="tel:+17867626304" className="text-gray-600 hover:text-blue-600 text-lg">+1 (786) 762-6304</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Mail size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                      <a href="mailto:wnlfooring@gmail.com" className="text-gray-600 hover:text-blue-600 break-all">wnlfooring@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Location</h4>
                      <p className="text-gray-600">Serving Davie, Florida and surrounding areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Clock size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-500 p-8 rounded-sm shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">Why Choose WNL Flooring</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>Licensed and insured professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>Premium quality materials and craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>Meticulous attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-3 mt-1 flex-shrink-0" />
                    <span>Excellent customer service from start to finish</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating CTA Buttons - Mobile Only */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center space-x-4 md:hidden z-40">
        <button 
          onClick={handleCallClick} 
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full font-medium shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <PhoneCall size={20} className="mr-2" />
          Call Now
        </button>
        <button 
          onClick={handleMessageClick} 
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-medium shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle size={20} className="mr-2" />
          Text
        </button>
      </div>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img src={placeholderImageUrls.logo} alt="WNL Flooring Logo" className="h-12 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">WNL Flooring</h3>
                  <p className="text-sm text-blue-200">Premium Tile Remodeling</p>
                </div>
              </div>
              <p className="text-blue-200 mb-6 max-w-md">
                Specializing in high-quality tile installations for bathrooms, kitchens, and living spaces. 
                Our expert craftsmen deliver exceptional results with meticulous attention to detail.
              </p>
              <div className="flex items-center space-x-4">
                <a href="tel:+17867626304" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <PhoneCall size={18} />
                </a>
                <a href="mailto:wnlfooring@gmail.com" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('services')} className="text-blue-200 hover:text-white transition-colors text-left">Bathroom Remodeling</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-blue-200 hover:text-white transition-colors text-left">Kitchen Tile Installation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-blue-200 hover:text-white transition-colors text-left">Floor Tile Installation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-blue-200 hover:text-white transition-colors text-left">Shower Renovations</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-blue-200 hover:text-white transition-colors text-left">Custom Tile Designs</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><button onClick={scrollToTop} className="text-blue-200 hover:text-white transition-colors text-left">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-blue-200 hover:text-white transition-colors text-left">Services</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-blue-200 hover:text-white transition-colors text-left">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-blue-200 hover:text-white transition-colors text-left">Contact</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 text-center"> 
  <p className="text-blue-300">
    &copy; {new Date().getFullYear()} WNL Flooring. All rights reserved.
  </p>
  <p className="text-blue-400">Dev By Joe</p>
</div>

        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Volver arriba"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
    </>
  );
};

export default App;