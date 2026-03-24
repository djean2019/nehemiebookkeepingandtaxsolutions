import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Calculator, FileText, Users, Shield, TrendingUp, Phone, Mail, MapPin, CheckCircle, AlertCircle, Menu, DollarSign } from 'lucide-react';
import ConsultationForm from './components/ConsultationForm';
import EmailDialog from './components/EmailDialog';
import NavigationMenu from './components/NavigationMenu';
import TaxPreparation from './pages/TaxPreparation';
import TaxPlanning from './pages/TaxPlanning';
import BusinessServices from './pages/BusinessServices';
import TaxResolution from './pages/TaxResolution';
import FinancialPlanning from './pages/FinancialPlanning';
import Consultation from './pages/Consultation';
import CreditRepair from './pages/CreditRepair';
import TaxEstimate from './pages/TaxEstimate';

function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const modules = [
    {
      id: 1,
      title: "Tax Preparation",
      description: "Professional tax preparation services for individuals and businesses",
      icon: FileText,
      features: ["Federal & State Returns", "E-filing", "Maximized Deductions", "Audit Support"],
      route: "/tax-preparation"
    },
    {
      id: 2,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize your tax liability year-round",
      icon: Calculator,
      features: ["Year-round Planning", "Retirement Strategies", "Investment Guidance", "Business Optimization"],
      route: "/tax-planning"
    },
    {
      id: 3,
      title: "Business Services",
      description: "Comprehensive tax solutions for businesses of all sizes",
      icon: Users,
      features: ["Corporate Returns", "Payroll Taxes", "Sales Tax", "Business Consulting"],
      route: "/business-services"
    },
    {
      id: 4,
      title: "Tax Resolution",
      description: "Help with tax problems and IRS negotiations",
      icon: Shield,
      features: ["IRS Representation", "Offer in Compromise", "Payment Plans", "Tax Lien Help"],
      route: "/tax-resolution"
    },
    {
      id: 5,
      title: "Financial Planning",
      description: "Holistic financial planning integrated with tax strategy",
      icon: TrendingUp,
      features: ["Investment Planning", "Retirement Planning", "Estate Planning", "Wealth Management"],
      route: "/financial-planning"
    },
    {
      id: 6,
      title: "Consultation",
      description: "Expert tax advice and consultation services",
      icon: Phone,
      features: ["One-on-One Sessions", "Tax Questions", "Second Opinions", "Special Situations"],
      route: "/consultation"
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tax-preparation" element={<TaxPreparation />} />
        <Route path="/tax-planning" element={<TaxPlanning />} />
        <Route path="/business-services" element={<BusinessServices />} />
        <Route path="/tax-resolution" element={<TaxResolution />} />
        <Route path="/financial-planning" element={<FinancialPlanning />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/credit-repair" element={<CreditRepair />} />
        <Route path="/tax-estimate" element={<TaxEstimate />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Tax Preparation",
      description: "Professional tax preparation services for individuals and businesses",
      icon: FileText,
      features: ["Federal & State Returns", "E-filing", "Maximized Deductions", "Audit Support"],
      route: "/tax-preparation"
    },
    {
      id: 2,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize your tax liability year-round",
      icon: Calculator,
      features: ["Year-round Planning", "Retirement Strategies", "Investment Guidance", "Business Optimization"],
      route: "/tax-planning"
    },
    {
      id: 3,
      title: "Business Services",
      description: "Comprehensive tax solutions for businesses of all sizes",
      icon: Users,
      features: ["Corporate Returns", "Payroll Taxes", "Sales Tax", "Business Consulting"],
      route: "/business-services"
    },
    {
      id: 4,
      title: "Tax Resolution",
      description: "Help with tax problems and IRS negotiations",
      icon: Shield,
      features: ["IRS Representation", "Offer in Compromise", "Payment Plans", "Tax Lien Help"],
      route: "/tax-resolution"
    },
    {
      id: 5,
      title: "Financial Planning",
      description: "Holistic financial planning integrated with tax strategy",
      icon: TrendingUp,
      features: ["Investment Planning", "Retirement Planning", "Estate Planning", "Wealth Management"],
      route: "/financial-planning"
    },
    {
      id: 6,
      title: "Consultation",
      description: "Expert tax advice and consultation services",
      icon: Phone,
      features: ["One-on-One Sessions", "Tax Questions", "Second Opinions", "Special Situations"],
      route: "/consultation"
    },
    {
      id: 7,
      title: "Credit Repair",
      description: "Help fix bad credit and improve your financial health",
      icon: AlertCircle,
      features: ["Credit Report Analysis", "Dispute Resolution", "Credit Building", "Debt Management"],
      route: "/credit-repair"
    },
    {
      id: 8,
      title: "Tax Estimate",
      description: "View my tax return estimate instantly",
      icon: DollarSign,
      features: ["Instant Calculator", "Tax Planning", "Refund Estimate", "Tax Rate Analysis"],
      route: "/tax-estimate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary-700">Nehemie Bookkeeping and Tax Solutions</h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </nav>
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Tax Solutions for Your Financial Future
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional tax preparation, planning, and resolution services tailored to your unique needs. 
            Let us help you navigate the complexities of tax season with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsConsultationOpen(true)}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax solutions designed to meet your personal and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out p-8 cursor-pointer">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-6">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => navigate(module.route)}
                    className="mt-6 w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Nehemie Bookkeeping and Tax Solutions?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Knowledge</h3>
                    <p className="text-gray-600">Certified tax professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Service</h3>
                    <p className="text-gray-600">Tailored solutions to meet your specific tax needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Maximum Refunds</h3>
                    <p className="text-gray-600">We find every deduction you're entitled to</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Year-Round Support</h3>
                    <p className="text-gray-600">Available whenever you need tax assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">$2M+</div>
                  <div className="text-gray-600">In Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to take control of your taxes? Contact us today for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out p-8 text-center">
              <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a 
                href="tel:+15128448136" 
                className="text-primary-600 hover:text-primary-700 font-medium cursor-pointer transition-colors"
              >
                (512) 844-8136
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out p-8 text-center">
              <Mail className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <button 
                onClick={() => setIsEmailOpen(true)}
                className="text-primary-600 hover:text-primary-700 font-medium cursor-pointer transition-colors"
              >
                darphejean@gmail.com
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out p-8 text-center">
              <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">17505 Autumn Falls Dr.<br />Manor, Texas 78653</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Nehemie Bookkeeping and Tax Solutions</h3>
            <p className="text-gray-400 mb-6">Your trusted partner for all tax-related services</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Nehemie Bookkeeping and Tax Solutions. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Form Modal */}
      <ConsultationForm 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

      {/* Email Dialog Modal */}
      <EmailDialog 
        isOpen={isEmailOpen} 
        onClose={() => setIsEmailOpen(false)} 
      />

      {/* Navigation Menu */}
      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        navigate={navigate}
      />
    </div>
  );
}

export default App;
