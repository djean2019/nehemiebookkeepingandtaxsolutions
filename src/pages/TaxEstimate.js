import React, { useState } from 'react';
import { ArrowLeft, Calculator, DollarSign, TrendingUp, Users, Home, Briefcase, PiggyBank, Receipt, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TaxEstimate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    filingStatus: 'single',
    income: '',
    deductions: 'standard',
    dependents: '0',
    retirementContributions: '',
    studentLoanInterest: '',
    mortgageInterest: '',
    propertyTax: '',
    savingsInterest: '',
    federalWithheld: '',
    otherDeductions: ''
  });
  const [estimate, setEstimate] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateEstimate = async (e) => {
    e.preventDefault();
    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      const income = parseFloat(formData.income) || 0;
      const retirement = parseFloat(formData.retirementContributions) || 0;
      const studentLoan = parseFloat(formData.studentLoanInterest) || 0;
      const mortgage = parseFloat(formData.mortgageInterest) || 0;
      const propertyTax = parseFloat(formData.propertyTax) || 0;
      const savingsInterest = parseFloat(formData.savingsInterest) || 0;
      const federalWithheld = parseFloat(formData.federalWithheld) || 0;
      const other = parseFloat(formData.otherDeductions) || 0;
      const dependents = parseInt(formData.dependents) || 0;

      // Standard deduction amounts (2024 estimates)
      const standardDeductions = {
        single: 14600,
        married: 29200,
        head: 21900
      };

      // Calculate taxable income
      let taxableIncome = income;
      
      if (formData.deductions === 'standard') {
        taxableIncome -= standardDeductions[formData.filingStatus];
      } else {
        taxableIncome -= (retirement + studentLoan + mortgage + propertyTax + other);
      }

      // Add dependent exemptions
      taxableIncome -= (dependents * 2000);

      // Add taxable interest income (savings interest is taxable)
      taxableIncome += savingsInterest;

      // Ensure taxable income doesn't go negative
      taxableIncome = Math.max(0, taxableIncome);

      // Simple tax calculation (2024 brackets - simplified)
      let tax = 0;
      if (formData.filingStatus === 'single') {
        if (taxableIncome <= 11600) tax = taxableIncome * 0.10;
        else if (taxableIncome <= 47150) tax = 1160 + (taxableIncome - 11600) * 0.12;
        else if (taxableIncome <= 100525) tax = 5426 + (taxableIncome - 47150) * 0.22;
        else if (taxableIncome <= 191950) tax = 17168.50 + (taxableIncome - 100525) * 0.24;
        else if (taxableIncome <= 243725) tax = 39110.50 + (taxableIncome - 191950) * 0.32;
        else if (taxableIncome <= 609350) tax = 55678.50 + (taxableIncome - 243725) * 0.35;
        else tax = 183647.25 + (taxableIncome - 609350) * 0.37;
      } else if (formData.filingStatus === 'married') {
        if (taxableIncome <= 22000) tax = taxableIncome * 0.10;
        else if (taxableIncome <= 89450) tax = 2200 + (taxableIncome - 22000) * 0.12;
        else if (taxableIncome <= 190750) tax = 10294 + (taxableIncome - 89450) * 0.22;
        else if (taxableIncome <= 364200) tax = 32580 + (taxableIncome - 190750) * 0.24;
        else tax = 74208 + (taxableIncome - 364200) * 0.32;
      } else { // head of household
        if (taxableIncome <= 15700) tax = taxableIncome * 0.10;
        else if (taxableIncome <= 59850) tax = 1570 + (taxableIncome - 15700) * 0.12;
        else if (taxableIncome <= 95350) tax = 6868 + (taxableIncome - 59850) * 0.22;
        else if (taxableIncome <= 182050) tax = 14678 + (taxableIncome - 95350) * 0.24;
        else tax = 35498 + (taxableIncome - 182050) * 0.32;
      }

      // Calculate effective tax rate
      const effectiveRate = income > 0 ? (tax / income * 100) : 0;

      setEstimate({
        totalTax: Math.round(tax * 100) / 100,
        effectiveRate: Math.round(effectiveRate * 100) / 100,
        taxableIncome: Math.round(taxableIncome * 100) / 100,
        estimatedRefund: Math.round((federalWithheld - tax) * 100) / 100
      });

      setIsCalculating(false);
    }, 1500);
  };

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
              <h1 className="text-2xl font-bold text-primary-700">Tax Return Estimate</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">View My Tax Return Estimate</h2>
          <p className="text-xl max-w-3xl">
            Get an instant estimate of your tax return based on current tax laws. 
            Our calculator helps you plan ahead and understand your tax situation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calculator Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tax Calculator</h3>
                <form onSubmit={calculateEstimate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Filing Status
                      </label>
                      <select
                        name="filingStatus"
                        value={formData.filingStatus}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="single">Single</option>
                        <option value="married">Married Filing Jointly</option>
                        <option value="head">Head of Household</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <DollarSign className="w-4 h-4 inline mr-1" />
                        Annual Income
                      </label>
                      <input
                        type="number"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="50000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Receipt className="w-4 h-4 inline mr-1" />
                        Deduction Type
                      </label>
                      <select
                        name="deductions"
                        value={formData.deductions}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="standard">Standard Deduction</option>
                        <option value="itemized">Itemized Deductions</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Number of Dependents
                      </label>
                      <input
                        type="number"
                        name="dependents"
                        value={formData.dependents}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <DollarSign className="w-4 h-4 inline mr-1" />
                        Federal Income Tax Withheld
                      </label>
                      <input
                        type="number"
                        name="federalWithheld"
                        value={formData.federalWithheld}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="10000"
                      />
                    </div>
                  </div>

                  {formData.deductions === 'itemized' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900">Itemized Deductions</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <PiggyBank className="w-4 h-4 inline mr-1" />
                            Retirement Contributions
                          </label>
                          <input
                            type="number"
                            name="retirementContributions"
                            value={formData.retirementContributions}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="6000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Student Loan Interest
                          </label>
                          <input
                            type="number"
                            name="studentLoanInterest"
                            value={formData.studentLoanInterest}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="2500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Home className="w-4 h-4 inline mr-1" />
                            Mortgage Interest
                          </label>
                          <input
                            type="number"
                            name="mortgageInterest"
                            value={formData.mortgageInterest}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="12000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Receipt className="w-4 h-4 inline mr-1" />
                            Property Tax
                          </label>
                          <input
                            type="number"
                            name="propertyTax"
                            value={formData.propertyTax}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="5000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <TrendingUp className="w-4 h-4 inline mr-1" />
                            Interest on Savings Account
                          </label>
                          <input
                            type="number"
                            name="savingsInterest"
                            value={formData.savingsInterest}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Other Deductions
                        </label>
                        <input
                          type="number"
                          name="otherDeductions"
                          value={formData.otherDeductions}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="10000"
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isCalculating}
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isCalculating ? (
                      'Calculating...'
                    ) : (
                      <>
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate Tax Estimate
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Results */}
              {estimate && (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Tax Estimate</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Estimated Tax</p>
                          <p className="text-2xl font-bold text-green-600">${estimate.totalTax.toLocaleString()}</p>
                        </div>
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Effective Tax Rate</p>
                          <p className="text-2xl font-bold text-blue-600">{estimate.effectiveRate}%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Taxable Income</p>
                          <p className="text-2xl font-bold text-purple-600">${estimate.taxableIncome.toLocaleString()}</p>
                        </div>
                        <Receipt className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    <div className={estimate.estimatedRefund > 0 ? "bg-orange-50 p-6 rounded-lg" : "bg-red-50 p-6 rounded-lg"}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">
                            {estimate.estimatedRefund > 0 ? 'Estimated Refund' : 'Additional Tax Due'}
                          </p>
                          <p className={`text-2xl font-bold ${estimate.estimatedRefund > 0 ? 'text-orange-600' : 'text-red-600'}`}>
                            {estimate.estimatedRefund > 0 ? '+' : ''}${Math.abs(estimate.estimatedRefund).toLocaleString()}
                          </p>
                        </div>
                        {estimate.estimatedRefund > 0 ? (
                          <TrendingUp className="w-8 h-8 text-orange-600" />
                        ) : (
                          <AlertCircle className="w-8 h-8 text-red-600" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                    <p className="text-yellow-700 text-sm">
                      This is an estimate based on current tax laws and the information you provided. 
                      Actual tax liability may vary based on your specific situation, tax law changes, 
                      and other factors. Please consult with a tax professional for accurate tax advice.
                    </p>
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
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">(512) 844-8136</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">darphejean@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">17505 Autumn Falls Dr, Manor, Texas 78653</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-green-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Professional Help?</h3>
                <p className="mb-6">Get accurate tax preparation and maximize your refund with our expert services.</p>
                <button 
                  onClick={() => navigate('/consultation')}
                  className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule Consultation
                </button>
              </div>

              {/* Tax Tips */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Saving Tips</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Maximize retirement contributions to reduce taxable income</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Keep track of all deductible expenses throughout the year</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Consider tax-advantaged investment accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Review withholding allowances annually</span>
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

export default TaxEstimate;
