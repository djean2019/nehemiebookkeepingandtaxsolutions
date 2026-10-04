import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreditRepair = () => {
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
              <h1 className="text-2xl font-bold text-primary-700">Credit Repair Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Help Fix Bad Credit</h2>
          <p className="text-xl max-w-3xl">
            Restore your financial health with our professional credit repair services. 
            We work to remove negative items, improve your credit score, and help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services Offered */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Credit Repair Services</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Credit Report Analysis</h4>
                    <p className="text-gray-600 mb-3">Comprehensive review of your credit reports from all three bureaus.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Identify errors and inaccuracies</li>
                      <li>• Review negative items</li>
                      <li>• Create improvement strategy</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Dispute Resolution</h4>
                    <p className="text-gray-600 mb-3">Challenge inaccurate negative items on your credit report.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Late payments</li>
                      <li>• Collections accounts</li>
                      <li>• Charge-offs and repossessions</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Credit Building</h4>
                    <p className="text-gray-600 mb-3">Strategies to build positive credit history and improve your score.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Secured credit cards</li>
                      <li>• Credit builder loans</li>
                      <li>• Authorized user strategies</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Debt Management</h4>
                    <p className="text-gray-600 mb-3">Help manage and reduce debt to improve your credit profile.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Debt settlement negotiation</li>
                      <li>• Payment plan assistance</li>
                      <li>• Budget optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                      <p className="text-gray-600">Review your credit situation and discuss your goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Credit Report Analysis</h4>
                      <p className="text-gray-600">Pull and analyze your credit reports from all bureaus.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dispute & Negotiate</h4>
                      <p className="text-gray-600">Challenge negative items and negotiate with creditors.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Monitor & Build</h4>
                      <p className="text-gray-600">Track progress and implement credit-building strategies.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Good Credit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Lower Interest Rates</h4>
                      <p className="text-gray-600">Save money on loans and credit cards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Better Loan Approval</h4>
                      <p className="text-gray-600">Higher chances of loan approval</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Housing Opportunities</h4>
                      <p className="text-gray-600">Easier apartment and mortgage approval</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Employment Benefits</h4>
                      <p className="text-gray-600">Some employers check credit reports</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Basic Plan</h4>
                    <p className="text-3xl font-bold text-purple-600 mb-2">$299</p>
                    <p className="text-gray-600 mb-4">One-time credit analysis and dispute filing</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Credit report analysis</li>
                      <li>• Up to 5 disputes</li>
                      <li>• 3 months monitoring</li>
                    </ul>
                  </div>
                  <div className="border-2 border-purple-600 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Premium Plan</h4>
                    <p className="text-3xl font-bold text-purple-600 mb-2">$599</p>
                    <p className="text-gray-600 mb-4">Comprehensive credit repair service</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Unlimited disputes</li>
                      <li>• 12 months monitoring</li>
                      <li>• Credit building guidance</li>
                      <li>• Debt management help</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">(512) 844-8136</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">darphejean@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">17505 Autumn Falls Dr, Manor, Texas 78653</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-purple-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Start Your Credit Repair Journey</h3>
                <p className="mb-6">Take the first step toward better credit. Schedule your free consultation today!</p>
                <button 
                  onClick={() => navigate('/consultation')}
                  className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Free Consultation
                </button>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Success Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Score Increase</span>
                    <span className="font-bold text-purple-600">+127 points</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items Removed</span>
                    <span className="font-bold text-purple-600">15,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-bold text-purple-600">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clients Helped</span>
                    <span className="font-bold text-purple-600">5,000+</span>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>FCRA compliant services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Experienced credit specialists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>No hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Money-back guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditRepair;
