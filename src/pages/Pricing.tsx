
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import PricingCard from '../components/common/PricingCard';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const [monthlyBilling, setMonthlyBilling] = useState(true);
  
  const pricingPlans = [
    {
      title: "Starter",
      price: {
        monthly: 49,
        quarterly: 129
      },
      features: [
        "2 sessions per week (30 minutes each)",
        "Basic courses (Noorani Qaida, Basic Nazra)",
        "Email support",
        "Basic progress tracking",
        "Access to learning resources"
      ],
      popular: false
    },
    {
      title: "Standard",
      price: {
        monthly: 79,
        quarterly: 199
      },
      features: [
        "3 sessions per week (40 minutes each)",
        "All basic + intermediate courses",
        "Priority email & chat support",
        "Detailed progress reports",
        "Personalized learning plan",
        "Access to all learning resources",
        "Monthly progress evaluation"
      ],
      popular: true
    },
    {
      title: "Premium",
      price: {
        monthly: 119,
        quarterly: 299
      },
      features: [
        "5 sessions per week (45 minutes each)",
        "Access to all courses (including Hifz & Tafseer)",
        "24/7 priority support",
        "Weekly progress reports",
        "Personalized learning plan",
        "One-on-one monthly review with senior teacher",
        "Access to exclusive workshops and seminars",
        "Certification upon course completion"
      ],
      popular: false
    }
  ];
  
  return (
    <Layout>
      <PageHeader 
        title="Pricing Plans"
        subtitle="Affordable packages designed to suit different learning needs and goals."
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-secondary rounded-full p-1 inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  monthlyBilling ? 'bg-primary text-primary-foreground' : 'text-foreground'
                }`}
                onClick={() => setMonthlyBilling(true)}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !monthlyBilling ? 'bg-primary text-primary-foreground' : 'text-foreground'
                }`}
                onClick={() => setMonthlyBilling(false)}
              >
                Quarterly (Save 15%)
              </button>
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                popular={plan.popular}
                monthlyBilling={monthlyBilling}
              />
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center text-muted-foreground">
            <p>All plans include a 7-day free trial. Cancel anytime during trial period.</p>
            <p className="mt-2">Need a custom plan for your family or organization? <a href="/contact" className="text-primary font-medium">Contact us</a> for special pricing.</p>
          </div>
        </div>
      </section>
      
      {/* Features Comparison */}
      <section className="section pattern-bg">
        <div className="container-custom">
          <SectionTitle 
            title="Features Comparison"
            subtitle="A detailed comparison of features available in each pricing plan."
            alignment="center"
          />
          
          <div className="overflow-x-auto mt-8">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Starter</th>
                  <th className="py-4 px-6 text-center bg-primary-foreground/10">Standard</th>
                  <th className="py-4 px-6 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Weekly Sessions</td>
                  <td className="py-4 px-6 text-center">2 sessions</td>
                  <td className="py-4 px-6 text-center bg-secondary">3 sessions</td>
                  <td className="py-4 px-6 text-center">5 sessions</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Session Duration</td>
                  <td className="py-4 px-6 text-center">30 minutes</td>
                  <td className="py-4 px-6 text-center bg-secondary">40 minutes</td>
                  <td className="py-4 px-6 text-center">45 minutes</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Noorani Qaida</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-secondary"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Nazra</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-secondary"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Tajweed</td>
                  <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-secondary"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Hifz</td>
                  <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-secondary"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Tafseer</td>
                  <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-secondary"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Progress Reports</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-secondary">Monthly</td>
                  <td className="py-4 px-6 text-center">Weekly</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center bg-secondary">Email & Chat</td>
                  <td className="py-4 px-6 text-center">24/7 Priority</td>
                </tr>
                <tr className="border-b border-muted">
                  <td className="py-4 px-6 font-medium">Certification</td>
                  <td className="py-4 px-6 text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-secondary">Course Completion</td>
                  <td className="py-4 px-6 text-center">Official Certification</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Learning Resources</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-secondary">Complete</td>
                  <td className="py-4 px-6 text-center">Complete + Exclusive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Common questions about our pricing plans and billing."
            alignment="center"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will be applied at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is there a family discount available?</h3>
              <p className="text-muted-foreground">
                Yes, we offer special pricing for families with multiple students. Please contact our support team for more information on family packages.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers. For some regions, we also support local payment methods.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I get a refund if I'm not satisfied?</h3>
              <p className="text-muted-foreground">
                We offer a 7-day free trial for all plans. If you're not satisfied after the trial, you can cancel without being charged. After billing, we offer a 30-day money-back guarantee.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Are there any long-term commitments?</h3>
              <p className="text-muted-foreground">
                No, all our plans are subscription-based with no long-term commitment. You can cancel at any time.
              </p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Do you offer scholarships?</h3>
              <p className="text-muted-foreground">
                Yes, we have a limited number of scholarships available for students who cannot afford our regular fees. Please contact us with your situation for consideration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Start Your 7-Day Free Trial Today
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience quality Quranic education with no risk. Cancel anytime during your trial period.
          </p>
          <button className="btn px-8 py-3 bg-white text-primary hover:bg-white/90">
            Start Free Trial
          </button>
          <p className="mt-4 opacity-80">No credit card required for trial</p>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
