import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ConsultationForm from '../components/ConsultationForm';

const Consultation = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);

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
              <h1 className="text-2xl font-bold text-primary-700">Consultation Services</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Expert Tax Consultation</h2>
          <p className="text-xl max-w-3xl">
            Get personalized tax advice from our certified professionals. Whether you have specific questions 
            or need comprehensive guidance, we're here to help you make informed tax decisions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Consultation Types */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Consultation Services</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">One-on-One Sessions</h4>
                    <p className="text-gray-600 mb-3">Personalized consultation addressing your specific tax concerns and questions.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 60-minute dedicated session</li>
                      <li>• Customized tax strategy</li>
                      <li>• Follow-up recommendations</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Tax Questions</h4>
                    <p className="text-gray-600 mb-3">Quick answers to your specific tax questions and concerns.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 30-minute focused session</li>
                      <li>• Direct answers to your questions</li>
                      <li>• Expert guidance</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Second Opinions</h4>
                    <p className="text-gray-600 mb-3">Review of your current tax situation and recommendations for optimization.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Comprehensive review</li>
                      <li>• Optimization opportunities</li>
                      <li>• Risk assessment</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary-600 pl-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Special Situations</h4>
                    <p className="text-gray-600 mb-3">Expert guidance for complex tax situations and life events.</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Marriage/divorce</li>
                      <li>• Business changes</li>
                      <li>• Investment decisions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Preparation</h4>
                      <p className="text-gray-600">We'll send you a questionnaire to help us understand your situation before the consultation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Discussion</h4>
                      <p className="text-gray-600">In-depth discussion of your tax situation, goals, and concerns.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Recommendations</h4>
                      <p className="text-gray-600">Actionable recommendations tailored to your specific needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Follow-up</h4>
                      <p className="text-gray-600">Summary of recommendations and next steps for implementation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Consultation Fees</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Consultation</h4>
                    <p className="text-3xl font-bold text-primary-600 mb-2">$150</p>
                    <p className="text-gray-600">30-minute session for specific questions</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Full Consultation</h4>
                    <p className="text-3xl font-bold text-primary-600 mb-2">$250</p>
                    <p className="text-gray-600">60-minute comprehensive session</p>
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
                    <Phone className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">(512) 844-8136</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">darphejean@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">17505 Autumn Falls Dr, Manor, Texas 78653</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">Schedule your consultation today and get expert tax advice tailored to your needs.</p>
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Certified tax professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>15+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Practical, actionable advice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Modal */}
      <ConsultationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </div>
  );
};

export default Consultation;
