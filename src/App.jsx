import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Mail, MapPin, Clock, Check, ArrowRight, Menu, X, Star, Users, Award, ChevronUp, Shield, FileText, Info } from 'lucide-react';

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

// ─── Privacy Policy Modal ────────────────────────────────────────────────────
const PrivacyPolicyModal = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="privacy-title"
  >
    <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 id="privacy-title" className="text-2xl font-bold text-blue-900 flex items-center">
          <Shield size={24} className="mr-3 text-blue-600" />
          Privacy Policy
        </h2>
        <button
          onClick={onClose}
          aria-label="Close Privacy Policy"
          className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <div className="overflow-y-auto p-6 text-gray-700 text-sm space-y-4">
        <p className="text-gray-500 text-xs">Last updated: July 5, 2026</p>

        <p>
          WNL Flooring ("we," "us," or "our") operates the website <strong>wnlflooring.com</strong>.
          This page informs you of our policies regarding the collection, use, and disclosure of
          personal data when you use our website, and the choices you have associated with that data.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">1. Information We Collect</h3>
        <p>
          We may collect the following personal information when you voluntarily submit our contact form or
          contact us directly:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Project details you provide</li>
        </ul>
        <p>
          We also automatically collect certain technical information through Google Analytics and Google
          Tag Manager, including IP address, browser type, pages visited, time spent on pages, and
          referring URL. This data is collected in aggregate and is not personally identifiable.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">2. How We Use Your Information</h3>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>To respond to your inquiry or estimate request</li>
          <li>To provide our tile installation and remodeling services</li>
          <li>To improve our website and user experience</li>
          <li>To send follow-up communications related to your project (with your consent)</li>
        </ul>
        <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">3. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar tracking technologies to track activity on our website through
          Google Analytics and Google Tag Manager. These tools help us understand how visitors interact
          with our site. You can instruct your browser to refuse all cookies or to indicate when a
          cookie is being sent.
        </p>
        <p>
          Google's use of advertising cookies enables them and their partners to serve ads to you
          based on your visit to our site. You can opt out of personalized advertising by visiting
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">Google Ad Settings</a>.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">4. Third-Party Services</h3>
        <p>We use the following third-party services that may collect information:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>Google Analytics & Google Tag Manager</strong> — website usage analytics</li>
          <li><strong>Google Ads</strong> — advertising and remarketing</li>
          <li><strong>Formspree</strong> — secure contact form submission processing</li>
        </ul>
        <p>Each of these services has its own Privacy Policy governing the use of your information.</p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">5. Data Retention</h3>
        <p>
          We retain personal information submitted through our contact form only as long as necessary
          to respond to your inquiry and provide our services. We do not store payment information.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">6. Your Rights</h3>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction or deletion of your personal data</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
        <p>To exercise these rights, please contact us at <strong>wnlfooring@gmail.com</strong>.</p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">7. Children's Privacy</h3>
        <p>
          Our services are not directed to individuals under 13 years of age. We do not knowingly
          collect personal information from children.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">8. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of changes by
          updating the "Last updated" date at the top of this page. We encourage you to review
          this Privacy Policy periodically.
        </p>

        <h3 className="text-lg font-semibold text-blue-900 mt-4">9. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Email: <a href="mailto:wnlfooring@gmail.com" className="text-blue-600 hover:underline">wnlfooring@gmail.com</a></li>
          <li>Phone: <a href="tel:+17867626304" className="text-blue-600 hover:underline">(786) 762-6304</a></li>
          <li>Location: Davie, Florida, United States</li>
        </ul>
      </div>
      <div className="p-4 border-t border-gray-200 flex justify-end">
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

// ─── Terms of Service Modal ──────────────────────────────────────────────────
const TermsOfServiceModal = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-labelledby="terms-title"
  >
    <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 id="terms-title" className="text-2xl font-bold text-blue-900 flex items-center">
          <Info size={24} className="mr-3 text-blue-600" />
          Terms of Service
        </h2>
        <button
          onClick={onClose}
          aria-label="Close Terms of Service"
          className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <div className="overflow-y-auto p-6 text-gray-700 text-sm space-y-4">
        <p className="text-gray-500 text-xs">Last updated: July 5, 2026</p>
        <p>By accessing or using the WNL Flooring website, you agree to be bound by these Terms of Service.</p>
        <h3 className="text-lg font-semibold text-blue-900 mt-4">1. Services Provided</h3>
        <p>WNL Flooring offers professional tile installation and remodeling services. All estimates provided through the website are preliminary and subject to an on-site inspection and formal written contract.</p>
        <h3 className="text-lg font-semibold text-blue-900 mt-4">2. User Responsibilities</h3>
        <p>When requesting a quote, you agree to provide accurate and current information. Misuse of the contact form, including spamming or submitting false information, is strictly prohibited.</p>
        <h3 className="text-lg font-semibold text-blue-900 mt-4">3. Intellectual Property</h3>
        <p>All content on this website, including images, text, and logos, is the property of WNL Flooring and may not be used or reproduced without express written consent.</p>
        <h3 className="text-lg font-semibold text-blue-900 mt-4">4. Limitation of Liability</h3>
        <p>WNL Flooring is not liable for any direct, indirect, incidental, or consequential damages arising from the use of this website or reliance on its content.</p>
        <h3 className="text-lg font-semibold text-blue-900 mt-4">5. Governing Law</h3>
        <p>These terms shall be governed by and construed in accordance with the laws of the State of Florida.</p>
      </div>
      <div className="p-4 border-t border-gray-200 flex justify-end">
        <button
          onClick={onClose}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors"
        >
          Accept & Close
        </button>
      </div>
    </div>
  </div>
);

// ─── Contact Form ─────────────────────────────────────────────────────────────
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^[\d\s\+\-\(\)]{7,20}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Open email client with pre-filled details (mailto fallback)
    const subject = encodeURIComponent(`New Quote Request: ${formData.project || 'General Inquiry'} - ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProject Type: ${formData.project}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:wnlfooring@gmail.com?subject=${subject}&body=${body}`;
    
    setStatus('success');
    setFormData({ name: '', phone: '', email: '', project: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check size={40} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
        <p className="text-gray-600 mb-6 max-w-sm">
          Thank you! We'll review your request and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-blue-600 font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          />
          {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(786) 000-0000"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          />
          {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
        />
        {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="project" className="block text-gray-700 font-medium mb-2 text-sm">Project Type</label>
        <select
          id="project"
          value={formData.project}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white transition-colors"
        >
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
        <textarea
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        />
      </div>
      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">
          Something went wrong. Please try again or call us at (786) 762-6304.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        id="contact-form-submit"
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 py-4 rounded-sm font-medium text-lg transition-colors duration-300 flex items-center justify-center"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
            Sending...
          </>
        ) : (
          'Submit Request'
        )}
      </button>
      <p className="text-xs text-gray-400 text-center">
        By submitting this form, you agree to our{' '}
        <span className="text-blue-600">Privacy Policy</span>.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
};

// ─── Main App ─────────────────────────────────────────────────────────────────
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(true); // Default to true temporarily, checking localStorage below

  const heroImages = ["/images/hero.jpg", "/images/bathroom1.jpg", "/images/kitchen1.jpg"];

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem('cookieConsent');
    setCookieConsent(consent === 'true');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setCookieConsent(true);
  };

  // Cambio automático de imágenes en el hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const toggleMenu = () => {
    const next = !isMenuOpen;
    setIsMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : 'auto';
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) toggleMenu();
  };

  const handleCallClick = () => { window.location.href = "tel:+17867626304"; };
  const handleMessageClick = () => { window.location.href = "sms:+17867626304"; };

  return (
    <>
      {showPrivacyPolicy && <PrivacyPolicyModal onClose={() => setShowPrivacyPolicy(false)} />}
      {showTerms && <TermsOfServiceModal onClose={() => setShowTerms(false)} />}

      <div className="min-h-screen bg-white font-sans">

        {/* ── Header ── */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2 backdrop-blur-sm' : 'bg-transparent py-4'}`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className={`flex items-center ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  <img src={placeholderImageUrls.logo} alt="WNL Flooring Logo" className="h-12 mr-4" loading="eager" />
                  <div>
                    <p className="text-2xl font-bold tracking-tight">WNL Flooring</p>
                    <p className="text-sm opacity-90">Premium Tile Remodeling</p>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
                  className={`p-2 focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                >
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>

              {/* Desktop Navigation */}
              <nav className={`hidden md:flex items-center space-x-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`} aria-label="Main navigation">
                <button onClick={() => scrollToSection('services')} className="font-medium text-sm uppercase tracking-wide hover:opacity-75 transition-opacity">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="font-medium text-sm uppercase tracking-wide hover:opacity-75 transition-opacity">Portfolio</button>
                <button onClick={() => scrollToSection('contact')} className="font-medium text-sm uppercase tracking-wide hover:opacity-75 transition-opacity">Contact</button>
                <div className="flex items-center pl-4 ml-4 border-l border-gray-300">
                  <button
                    onClick={handleCallClick}
                    id="header-call-button"
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
                  <img src={placeholderImageUrls.logo} alt="WNL Flooring Logo" className="h-12 mr-4" loading="lazy" />
                  <p className="text-2xl font-bold">WNL Flooring</p>
                </div>
                <button onClick={toggleMenu} aria-label="Close menu" className="text-white p-2">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow text-white text-center space-y-8 py-8" aria-label="Mobile navigation">
                <button onClick={() => scrollToSection('services')} className="text-2xl font-medium hover:text-blue-300 transition-colors">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-2xl font-medium hover:text-blue-300 transition-colors">Portfolio</button>
                <button onClick={() => scrollToSection('contact')} className="text-2xl font-medium hover:text-blue-300 transition-colors">Contact</button>
                <div className="flex flex-col space-y-4 mt-8 w-64">
                  <button
                    onClick={handleCallClick}
                    id="mobile-call-button"
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    <PhoneCall size={20} className="mr-2" />
                    Call Now
                  </button>
                  <button
                    onClick={handleMessageClick}
                    id="mobile-message-button"
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

        {/* ── Hero Section ── */}
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden" aria-label="Hero">
          {/* Background Image Carousel */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70" />
          </div>

          {/* Image indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10" aria-hidden="true">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-slide-in-left">
                Exceptional Tile <br />
                <span className="text-blue-200">Craftsmanship</span>
              </h1>
              <div className="w-24 h-1 bg-blue-300 mb-8 animate-expand" aria-hidden="true" />
              <p className="text-xl text-gray-100 mb-10 max-w-xl animate-slide-in-right">
                Transforming bathrooms, kitchens, and living spaces with premium tile installations and exquisite attention to detail in Davie, Florida.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-in-up">
                <button
                  onClick={handleCallClick}
                  id="hero-call-button"
                  className="flex items-center justify-center bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <PhoneCall size={20} className="mr-3" />
                  Free Consultation
                </button>
                <button
                  onClick={handleMessageClick}
                  id="hero-message-button"
                  className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle size={20} className="mr-3" />
                  Message Us
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent h-32 pointer-events-none" aria-hidden="true" />
        </section>

        {/* ── Brand Bar ── */}
        <section className="bg-blue-50 py-8 border-b border-blue-100 relative z-10" aria-label="Trust indicators">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                  <Check size={28} className="text-blue-700" aria-hidden="true" />
                </div>
                <p className="font-bold text-2xl text-blue-900">Licensed</p>
                <p className="text-sm text-blue-700">&amp; Insured</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                  <Star size={28} className="text-blue-700" aria-hidden="true" />
                </div>
                <p className="font-bold text-2xl text-blue-900">5-Star</p>
                <p className="text-sm text-blue-700">Service</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                  <Award size={28} className="text-blue-700" aria-hidden="true" />
                </div>
                <p className="font-bold text-2xl text-blue-900">15+</p>
                <p className="text-sm text-blue-700">Years Experience</p>
              </div>
              <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3 group-hover:bg-blue-300 transition-colors">
                  <PhoneCall size={28} className="text-blue-700" aria-hidden="true" />
                </div>
                <button onClick={handleCallClick} className="font-bold text-lg text-blue-900 hover:text-blue-600 transition-colors">
                  (786) 762-6304
                </button>
                <p className="text-sm text-blue-700">Call Now</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Section ── */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-sm mb-4">OUR EXPERTISE</span>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Premium Tile Services</h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8" aria-hidden="true" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized tile installation and remodeling services delivered with exceptional craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Bathroom */}
              <article className="group bg-white overflow-hidden shadow-lg rounded-sm transition-all duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={placeholderImageUrls.bathroom1}
                    alt="Bathroom Tile Remodeling — WNL Flooring Davie FL"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="600" height="288"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">Bathroom Remodeling</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">Transform your bathroom with our premium tile installations. From shower enclosures to floor tiling, we create stunning and functional spaces that elevate your home.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Shower &amp; Tub Surrounds</span></li>
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Floor &amp; Wall Tile</span></li>
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Custom Niches &amp; Benches</span></li>
                  </ul>
                  <a href="#contact" className="inline-flex items-center text-blue-600 font-medium text-sm hover:underline">
                    GET A QUOTE <ArrowRight size={14} className="ml-2" aria-hidden="true" />
                  </a>
                </div>
              </article>

              {/* Kitchen */}
              <article className="group bg-white overflow-hidden shadow-lg rounded-sm transition-all duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={placeholderImageUrls.kitchen1}
                    alt="Kitchen Tile Installation — WNL Flooring Davie FL"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="600" height="288"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">Kitchen Tile</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">Elevate your kitchen with designer tile backsplashes and premium flooring options. Our expert craftsmen deliver impeccable installations tailored to your style.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Custom Backsplashes</span></li>
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Countertop Applications</span></li>
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Floor Installations</span></li>
                  </ul>
                  <a href="#contact" className="inline-flex items-center text-blue-600 font-medium text-sm hover:underline">
                    GET A QUOTE <ArrowRight size={14} className="ml-2" aria-hidden="true" />
                  </a>
                </div>
              </article>

              {/* Specialty */}
              <article className="group bg-white overflow-hidden shadow-lg rounded-sm transition-all duration-300 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={placeholderImageUrls.floor2}
                    alt="Specialty Floor Tile Installation — WNL Flooring"
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="600" height="288"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" aria-hidden="true" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">Specialty Installations</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">From intricate mosaic patterns to large-format tiles, our specialized installation services bring your design vision to life with meticulous attention to detail.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Mosaic &amp; Pattern Work</span></li>
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Large Format Tiles</span></li>
                    <li className="flex items-start"><Check size={18} className="text-blue-600 mr-2 mt-1 flex-shrink-0" aria-hidden="true" /><span className="text-gray-700">Decorative Accent Work</span></li>
                  </ul>
                  <a href="#contact" className="inline-flex items-center text-blue-600 font-medium text-sm hover:underline">
                    GET A QUOTE <ArrowRight size={14} className="ml-2" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>

            <div className="text-center mt-12">
              <a
                href="#contact"
                id="services-cta-button"
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-sm font-medium text-lg transition-colors duration-300"
              >
                Request a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* ── Portfolio Section ── */}
        <section id="portfolio" className="py-20 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 bg-blue-200 text-blue-700 text-sm font-semibold rounded-sm mb-4">OUR WORK</span>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Portfolio Showcase</h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8" aria-hidden="true" />
              <p className="text-xl text-blue-800 max-w-3xl mx-auto">
                Browse our collection of premium tile installations and transformations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: placeholderImageUrls.hero, title: 'Modern Bathroom', desc: 'Full renovation with custom shower and floor tile' },
                { src: placeholderImageUrls.kitchen2, title: 'Designer Kitchen', desc: 'Custom backsplash with premium porcelain tile' },
                { src: placeholderImageUrls.floor1, title: 'Luxury Flooring', desc: 'Large format porcelain tiles with custom pattern' },
                { src: placeholderImageUrls.bathroom2, title: 'Spa Retreat', desc: 'Custom shower with bench and niche installations' },
                { src: placeholderImageUrls.detail1, title: 'Custom Mosaic', desc: 'Intricate mosaic pattern with precision installation' },
                { src: placeholderImageUrls.detail2, title: 'Feature Wall', desc: 'Designer accent wall with dimensional tile' },
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-sm shadow-lg">
                  <img
                    src={item.src}
                    alt={`${item.title} — WNL Flooring tile work in Davie FL`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width="600" height="320"
                  />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white text-sm mb-4">{item.desc}</p>
                      <button
                        onClick={handleCallClick}
                        className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-blue-600 transition-colors"
                      >
                        Get a Similar Design
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={handleCallClick}
                id="portfolio-cta-button"
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-sm font-medium text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>

        {/* ── Testimonials Section ── */}
        <section className="py-20 bg-gray-50" aria-label="Customer testimonials">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-sm mb-4">TESTIMONIALS</span>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8" aria-hidden="true" />
              <p className="text-xl text-blue-800 max-w-3xl mx-auto">
                Don't just take our word for it — see what our satisfied customers have to say
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { quote: 'WNL Flooring transformed our bathroom completely! The attention to detail and quality of work exceeded our expectations. Highly recommend!', name: 'Maria Rodriguez', project: 'Bathroom Renovation' },
                { quote: 'Professional, punctual, and absolutely stunning results. Our kitchen backsplash is now the centerpiece of our home!', name: 'John & Sarah Wilson', project: 'Kitchen Backsplash' },
                { quote: "From start to finish, the team was amazing. Clean work, fair pricing, and beautiful results. We'll definitely use them again!", name: 'Carlos Mendez', project: 'Floor Installation' },
              ].map((t, i) => (
                <article key={i} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => <Star key={j} size={20} className="text-yellow-400 fill-current" aria-hidden="true" />)}
                  </div>
                  <blockquote className="text-gray-600 mb-6 italic">"{t.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users size={24} className="text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.project}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full">
                <Star size={20} className="text-yellow-300 fill-current mr-2" aria-hidden="true" />
                <span className="font-semibold">4.9/5 Stars</span>
                <span className="mx-2">•</span>
                <span>200+ Happy Customers</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="py-20 overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600" aria-label="Call to action">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
              <p className="text-xl text-blue-100 mb-10">
                Contact us today for a free consultation and estimate on your tile project in Davie, Florida.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={handleCallClick}
                  id="cta-call-button"
                  className="flex items-center justify-center bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-sm font-medium text-lg transition-colors duration-300"
                >
                  <PhoneCall size={20} className="mr-3" />
                  Call (786) 762-6304
                </button>
                <button
                  onClick={handleMessageClick}
                  id="cta-message-button"
                  className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-sm font-medium text-lg transition-colors duration-300"
                >
                  <MessageCircle size={20} className="mr-3" />
                  Message Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-sm mb-4">CONTACT US</span>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8" aria-hidden="true" />
              <p className="text-xl text-blue-800 max-w-3xl mx-auto">
                Have questions or ready to start your project? Reach out to our team today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-sm shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                  <ContactForm />
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-8 rounded-sm shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <PhoneCall size={24} className="text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
                        <a href="tel:+17867626304" className="text-gray-600 hover:text-blue-600 text-lg">+1 (786) 762-6304</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail size={24} className="text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                        <a href="mailto:wnlfooring@gmail.com" className="text-gray-600 hover:text-blue-600 break-all">wnlfooring@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin size={24} className="text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Location</h4>
                        <p className="text-gray-600">Serving Davie, Florida and surrounding areas</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock size={24} className="text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Business Hours</h4>
                        <p className="text-gray-600">Monday – Friday: 8:00 AM – 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM – 2:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500 p-8 rounded-sm shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Why Choose WNL Flooring</h3>
                  <ul className="space-y-4">
                    {[
                      'Licensed and insured professionals',
                      'Premium quality materials and craftsmanship',
                      'Transparent pricing with no hidden fees',
                      'Meticulous attention to detail',
                      'Excellent customer service from start to finish',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={20} className="mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Floating CTA Buttons — Mobile Only ── */}
        <div className="fixed bottom-6 left-0 right-0 flex justify-center space-x-4 md:hidden z-40">
          <button
            onClick={handleCallClick}
            id="floating-call-button"
            aria-label="Call WNL Flooring"
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full font-medium shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
          >
            <PhoneCall size={20} className="mr-2" />
            Call Now
          </button>
          <button
            onClick={handleMessageClick}
            id="floating-message-button"
            aria-label="Text WNL Flooring"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-medium shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle size={20} className="mr-2" />
            Text
          </button>
        </div>

        {/* ── Footer ── */}
        <footer className="bg-blue-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <img src={placeholderImageUrls.logo} alt="WNL Flooring Logo" className="h-12 mr-4" loading="lazy" />
                  <div>
                    <p className="text-xl font-bold">WNL Flooring</p>
                    <p className="text-sm text-blue-200">Premium Tile Remodeling</p>
                  </div>
                </div>
                <p className="text-blue-200 mb-6 max-w-md">
                  Specializing in high-quality tile installations for bathrooms, kitchens, and living spaces in Davie, Florida.
                  Our expert craftsmen deliver exceptional results with meticulous attention to detail.
                </p>
                <div className="flex items-center space-x-4">
                  <a href="tel:+17867626304" aria-label="Call WNL Flooring" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition-colors">
                    <PhoneCall size={18} />
                  </a>
                  <a href="mailto:wnlfooring@gmail.com" aria-label="Email WNL Flooring" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition-colors">
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
                  <li>
                    <button
                      onClick={() => setShowPrivacyPolicy(true)}
                      id="footer-privacy-link"
                      className="text-blue-200 hover:text-white transition-colors text-left flex items-center"
                    >
                      <FileText size={14} className="mr-1" aria-hidden="true" />
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowTerms(true)}
                      className="text-blue-200 hover:text-white transition-colors text-left flex items-center"
                    >
                      <Info size={14} className="mr-1" aria-hidden="true" />
                      Terms of Service
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-blue-800 pt-8 text-center">
              <p className="text-blue-300">&copy; {new Date().getFullYear()} WNL Flooring. All rights reserved.</p>
              <p className="text-blue-400 text-sm mt-1">
                <button
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="hover:text-blue-200 underline transition-colors"
                >
                  Privacy Policy
                </button>
                {' | '}
                <button
                  onClick={() => setShowTerms(true)}
                  className="hover:text-blue-200 underline transition-colors"
                >
                  Terms of Service
                </button>
                {' | '}
                Serving Davie, FL &amp; South Florida
              </p>
            </div>
          </div>
        </footer>

        {/* ── Cookie Consent Banner ── */}
        {!cookieConsent && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl border-t border-gray-700 animate-slide-in-up">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
              <div className="text-sm text-gray-300 mb-4 sm:mb-0 max-w-3xl">
                We use cookies to improve your experience and analyze site traffic. By continuing to use our website, you agree to our use of cookies and our <button onClick={() => setShowPrivacyPolicy(true)} className="text-blue-400 hover:underline">Privacy Policy</button>.
              </div>
              <div className="flex space-x-4 shrink-0">
                <button 
                  onClick={handleAcceptCookies}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Back to Top Button ── */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back-to-top-button"
            className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
            aria-label="Back to top"
          >
            <ChevronUp size={24} />
          </button>
        )}
      </div>
    </>
  );
};

export default App;