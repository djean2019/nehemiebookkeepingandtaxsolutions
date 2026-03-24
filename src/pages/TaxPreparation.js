import React from 'react';
import { ArrowLeft, FileText, CheckCircle, Clock, DollarSign, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TaxPreparation = () => {
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
              <h1 className="text-2xl font-bold text-primary-700">Tax Preparation Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <FileText className="w-12 h-12 mr-4" />
            <h2 className="text-4xl font-bold">Professional Tax Preparation</h2>
          </div>
          <p className="text-xl max-w-3xl">
            Expert tax preparation services for individuals and businesses. Our certified professionals ensure 
            accurate, timely filing while maximizing your deductions and minimizing your tax liability.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Federal & State Returns</h4>
                      <p className="text-gray-600">Complete preparation and filing of all federal and state tax returns with accuracy guaranteed.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Electronic Filing (E-filing)</h4>
                      <p className="text-gray-600">Fast, secure electronic filing with direct deposit options for quicker refunds.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Maximized Deductions</h4>
                      <p className="text-gray-600">Comprehensive deduction search to ensure you get every deduction you're entitled to.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Audit Support</h4>
                      <p className="text-gray-600">Professional representation and support if you're selected for an audit.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Document Collection</h4>
                      <p className="text-gray-600">We'll provide a comprehensive checklist of all documents needed for your tax preparation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Preparation</h4>
                      <p className="text-gray-600">Our experts prepare your return with attention to detail and accuracy.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Review & Approval</h4>
                      <p className="text-gray-600">We review the completed return with you and obtain your approval before filing.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Filing & Follow-up</h4>
                      <p className="text-gray-600">We file your return electronically and monitor its status until completion.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Individual Returns</h4>
                    <p className="text-3xl font-bold text-primary-600 mb-2">Starting at $150</p>
                    <p className="text-gray-600">W-2, 1099, itemized deductions, and basic investment income.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Returns</h4>
                    <p className="text-3xl font-bold text-primary-600 mb-2">Starting at $350</p>
                    <p className="text-gray-600">Schedule C, S-Corp, Partnership, and corporate returns.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Average turnaround: 3-5 business days</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Average client savings: $1,200+</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Accuracy guarantee: 100%</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">10,000+ returns prepared</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">Schedule your tax preparation consultation today and let us handle the complexity while you maximize your refund.</p>
                <button 
                  onClick={() => navigate('/consultation')}
                  className="w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxPreparation;
