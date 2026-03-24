import React from 'react';
import { ArrowLeft, TrendingUp, CheckCircle, Clock, DollarSign, Shield, PiggyBank } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinancialPlanning = () => {
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
              <h1 className="text-2xl font-bold text-primary-700">Financial Planning Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-12 h-12 mr-4" />
            <h2 className="text-4xl font-bold">Integrated Financial Planning</h2>
          </div>
          <p className="text-xl max-w-3xl">
            Holistic financial planning that integrates tax strategy with wealth management. 
            Build a secure financial future with comprehensive planning that optimizes every aspect of your financial life.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Planning Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Investment Planning</h4>
                      <p className="text-gray-600">Tax-efficient investment strategies aligned with your financial goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Retirement Planning</h4>
                      <p className="text-gray-600">Comprehensive retirement planning with tax-optimized savings strategies.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Estate Planning</h4>
                      <p className="text-gray-600">Protect your legacy with tax-efficient estate and inheritance planning.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Wealth Management</h4>
                      <p className="text-gray-600">Integrated wealth management with tax optimization at every level.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Planning Areas */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Planning Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <PiggyBank className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Cash Flow Management</h4>
                    <p className="text-gray-600">Optimize your income and expenses for maximum savings potential.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <Shield className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Risk Management</h4>
                    <p className="text-gray-600">Protect your assets with comprehensive insurance and risk strategies.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <TrendingUp className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Tax Optimization</h4>
                    <p className="text-gray-600">Integrate tax planning into every financial decision.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <DollarSign className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Education Planning</h4>
                    <p className="text-gray-600">Tax-advantaged education savings plans for your family's future.</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Integrated Planning?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tax-Efficient Growth</h4>
                      <p className="text-gray-600">Every investment decision considers tax implications for maximum after-tax returns.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Holistic Approach</h4>
                      <p className="text-gray-600">All aspects of your financial life work together toward common goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Long-term Success</h4>
                      <p className="text-gray-600">Build sustainable wealth that lasts across generations.</p>
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
                    <span className="text-gray-700">Average tax savings: 20-30%</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Portfolio growth: 8-12% annually</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">15+ years planning experience</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Fiduciary responsibility</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Build Your Future</h3>
                <p className="mb-6">Start your journey to financial security with integrated tax and financial planning.</p>
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

export default FinancialPlanning;
