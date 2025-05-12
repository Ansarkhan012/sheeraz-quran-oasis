
import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: {
    monthly: number;
    quarterly: number;
  };
  features: string[];
  popular?: boolean;
  monthlyBilling: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  popular = false,
  monthlyBilling,
}) => {
  const currentPrice = monthlyBilling ? price.monthly : price.quarterly;
  const billingText = monthlyBilling ? '/month' : '/quarter';
  
  return (
    <div 
      className={`rounded-lg overflow-hidden transition-all ${
        popular ? 'shadow-xl border-2 border-primary scale-105' : 'shadow-md border border-muted'
      }`}
    >
      {popular && (
        <div className="bg-primary py-2 text-center text-primary-foreground font-medium">
          Most Popular
        </div>
      )}
      
      <div className="bg-white p-6 md:p-8">
        <h3 className="font-heading text-xl font-bold text-center mb-2">{title}</h3>
        
        <div className="text-center mb-6">
          <p className="text-4xl font-heading font-bold text-primary">
            ${currentPrice}
            <span className="text-base text-muted-foreground font-normal">{billingText}</span>
          </p>
          {!monthlyBilling && (
            <p className="text-sm text-muted-foreground mt-2">Save {Math.round((price.monthly * 3 - price.quarterly) / (price.monthly * 3) * 100)}% with quarterly billing</p>
          )}
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 rounded-md font-medium transition-colors ${
            popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-primary/10 text-primary hover:bg-primary/20'
          }`}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
