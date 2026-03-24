import React from 'react';
import { ArrowLeft, Users, CheckCircle, Clock, DollarSign, Shield, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/')}
                className="flex items-center text-primary-600 hover:text-primary-700 mr-4"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>
              <h1 className="text-2xl font-bold text-primary-700">Business Tax Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Users className="w-12 h-12 mr-4" />
            <h2 className="text-4xl font-bold">Comprehensive Business Tax Solutions</h2>
          </div>
          <p className="text-xl max-w-3xl">
            Complete tax services for businesses of all sizes. From startups to established corporations, 
            we provide expert tax guidance to ensure compliance and optimize your business tax position.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Overview */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Business Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Corporate Returns</h4>
                      <p className="text-gray-600">Expert preparation of C-Corp, S-Corp, and LLC tax returns with maximum deductions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Payroll Taxes</h4>
                      <p className="text-gray-600">Complete payroll tax compliance, reporting, and filing services.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Sales Tax</h4>
                      <p className="text-gray-600">Multi-state sales tax compliance, registration, and filing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Consulting</h4>
                      <p className="text-gray-600">Strategic tax consulting to optimize business structure and operations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Types */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Types We Serve</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Building className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Small Businesses</h4>
                    <p className="text-gray-600">Sole proprietorships, partnerships, and small corporations.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Building className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Startups</h4>
                    <p className="text-gray-600">New business formation, entity selection, and tax planning.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Building className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Services</h4>
                    <p className="text-gray-600">Medical practices, law firms, consulting businesses.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Building className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">E-commerce</h4>
                    <p className="text-gray-600">Online businesses with multi-state tax obligations.</p>
                  </div>
                </div>
              </div>

              {/* Compliance Services */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Reporting</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-primary-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">IRS Compliance</h4>
                      <p className="text-gray-600">Ensure your business meets all federal tax requirements and deadlines.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-primary-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">State & Local Taxes</h4>
                      <p className="text-gray-600">Multi-jurisdictional compliance and optimization strategies.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-primary-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quarterly Filings</h4>
                      <p className="text-gray-600">Timely filing of estimated taxes and quarterly reports.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Tax Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Average business savings: $5,000+</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">20+ years business tax experience</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">100% compliance rate</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">2,000+ business clients</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Grow Your Business</h3>
                <p className="mb-6">Focus on running your business while we handle your tax compliance and optimization.</p>
                <button 
                  onClick={() => navigate('/consultation')}
                  className="w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Business Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessServices;
