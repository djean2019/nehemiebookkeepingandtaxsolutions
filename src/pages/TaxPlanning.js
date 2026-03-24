import React from 'react';
import { ArrowLeft, Calculator, CheckCircle, Clock, DollarSign, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TaxPlanning = () => {
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
              <h1 className="text-2xl font-bold text-primary-700">Tax Planning Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Calculator className="w-12 h-12 mr-4" />
            <h2 className="text-4xl font-bold">Strategic Tax Planning</h2>
          </div>
          <p className="text-xl max-w-3xl">
            Proactive tax planning strategies to minimize your tax liability year-round. Our experts help you 
            make informed decisions that optimize your tax position and maximize your financial potential.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Planning Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Year-round Planning</h4>
                      <p className="text-gray-600">Continuous tax strategy development and adjustment throughout the year.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Retirement Strategies</h4>
                      <p className="text-gray-600">Optimize retirement contributions and distributions for tax efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Investment Guidance</h4>
                      <p className="text-gray-600">Tax-efficient investment strategies and portfolio optimization.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Optimization</h4>
                      <p className="text-gray-600">Strategic business structure and tax planning for maximum efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Tax Planning</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Reduce Tax Liability</h4>
                    <p className="text-gray-600">Legally minimize your tax burden through strategic planning.</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Increase Cash Flow</h4>
                    <p className="text-gray-600">Keep more money in your pocket throughout the year.</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Avoid Surprises</h4>
                    <p className="text-gray-600">No more unexpected tax bills at year-end.</p>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Financial Clarity</h4>
                    <p className="text-gray-600">Better understanding of your overall financial picture.</p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Planning Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Financial Assessment</h4>
                      <p className="text-gray-600">Comprehensive review of your current financial situation and tax position.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategy Development</h4>
                      <p className="text-gray-600">Customized tax planning strategy tailored to your specific goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Implementation</h4>
                      <p className="text-gray-600">Step-by-step guidance on implementing tax-saving strategies.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ongoing Monitoring</h4>
                      <p className="text-gray-600">Regular reviews and adjustments to optimize your tax position.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Planning Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Average tax savings: 15-25%</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Quarterly reviews included</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">IRS compliant strategies</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">5,000+ planning clients</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Start Planning Today</h3>
                <p className="mb-6">Don't wait until tax season. Start planning now to maximize your savings.</p>
                <button 
                  onClick={() => navigate('/consultation')}
                  className="w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Planning Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxPlanning;
