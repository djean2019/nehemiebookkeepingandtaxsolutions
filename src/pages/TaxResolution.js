import React from 'react';
import { ArrowLeft, Shield, CheckCircle, Clock, DollarSign, AlertTriangle, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TaxResolution = () => {
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
              <h1 className="text-2xl font-bold text-primary-700">Tax Resolution Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Shield className="w-12 h-12 mr-4" />
            <h2 className="text-4xl font-bold">Expert Tax Resolution</h2>
          </div>
          <p className="text-xl max-w-3xl">
            Facing tax problems? Our expert tax resolution services help you resolve IRS issues, 
            negotiate settlements, and get your tax matters back on track with professional representation.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Resolution Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">IRS Representation</h4>
                      <p className="text-gray-600">Professional representation before the IRS and state tax authorities.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Offer in Compromise</h4>
                      <p className="text-gray-600">Negotiate with the IRS to settle your tax debt for less than you owe.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Payment Plans</h4>
                      <p className="text-gray-600">Establish affordable payment plans with the IRS and state agencies.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tax Lien Help</h4>
                      <p className="text-gray-600">Remove or release tax liens and levies to protect your assets.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Issues We Handle */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tax Issues We Resolve</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Back Taxes</h4>
                    <p className="text-gray-600">Resolve multiple years of unfiled tax returns.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">IRS Audits</h4>
                    <p className="text-gray-600">Professional representation during IRS audits.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Tax Levies</h4>
                    <p className="text-gray-600">Stop wage garnishments and bank levies.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-2">Penalties</h4>
                    <p className="text-gray-600">Reduce or eliminate IRS penalties and interest.</p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Resolution Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Case Evaluation</h4>
                      <p className="text-gray-600">Free consultation to assess your tax situation and options.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategy Development</h4>
                      <p className="text-gray-600">Customized resolution strategy based on your specific circumstances.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Negotiation</h4>
                      <p className="text-gray-600">Professional negotiation with tax authorities on your behalf.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Resolution</h4>
                      <p className="text-gray-600">Finalize the agreement and ensure compliance going forward.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Resolution Success</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Scale className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">95% success rate</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">$10M+ in reductions</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Average resolution: 90 days</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Licensed tax professionals</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-red-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Tax Problems? We Can Help</h3>
                <p className="mb-6">Don't face the IRS alone. Get expert representation and protect your rights.</p>
                <button 
                  onClick={() => navigate('/consultation')}
                  className="w-full bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </button>
              </div>

              {/* Warning */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Act Quickly</h4>
                    <p className="text-gray-600 text-sm">The IRS has powerful collection tools. The sooner you act, the more options you have.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxResolution;
