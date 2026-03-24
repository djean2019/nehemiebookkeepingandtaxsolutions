import React from 'react';
import { X, Calculator, FileText, Users, Shield, TrendingUp, Phone, AlertCircle, DollarSign } from 'lucide-react';

const NavigationMenu = ({ isOpen, onClose, navigate }) => {
  const menuItems = [
    {
      title: "Tax Preparation",
      description: "Professional tax preparation services",
      icon: FileText,
      route: "/tax-preparation"
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning solutions",
      icon: Calculator,
      route: "/tax-planning"
    },
    {
      title: "Business Services",
      description: "Comprehensive business tax solutions",
      icon: Users,
      route: "/business-services"
    },
    {
      title: "Tax Resolution",
      description: "IRS and tax problem resolution",
      icon: Shield,
      route: "/tax-resolution"
    },
    {
      title: "Financial Planning",
      description: "Holistic financial planning",
      icon: TrendingUp,
      route: "/financial-planning"
    },
    {
      title: "Consultation",
      description: "Expert tax advice and consultation",
      icon: Phone,
      route: "/consultation"
    },
    {
      title: "Credit Repair",
      description: "Help fix bad credit and improve financial health",
      icon: AlertCircle,
      route: "/credit-repair"
    },
    {
      title: "Tax Estimate",
      description: "View my tax return estimate instantly",
      icon: DollarSign,
      route: "/tax-estimate"
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-primary-700">Services</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          <div className="p-4 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.route);
                    onClose();
                  }}
                  className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Home Button */}
          <div className="p-4 border-t">
            <button
              onClick={() => {
                navigate('/');
                onClose();
              }}
              className="w-full p-4 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors font-semibold"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
