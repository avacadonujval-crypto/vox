import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';

const PricingPage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      hours: '25 hours',
      minutes: '250 minutes',
      price: 15000,
      description: 'Perfect for small businesses getting started',
      features: [
        '25 hours of AI calling',
        '250 minutes included',
        'Phone number included',
        'SMS included',
        'WhatsApp included',
        'Basic lead management',
        'Email support'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      hours: '50 hours',
      minutes: '250 minutes',
      price: 30000,
      description: 'For growing businesses that need more power',
      features: [
        '50 hours of AI calling',
        '250 minutes included',
        'Phone number included',
        'SMS included',
        'WhatsApp included',
        'Advanced lead scoring',
        'Calendar integration',
        'Priority support'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      hours: '75 hours',
      minutes: '250 minutes',
      price: 45000,
      description: 'For large organizations with custom needs',
      features: [
        '75 hours of AI calling',
        '250 minutes included',
        'Phone number included',
        'SMS included',
        'WhatsApp included',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support'
      ]
    }
  ];

  const handleSubscribe = async (planId: string) => {
    if (!isAuthenticated) {
      navigate('/signup');
      return;
    }

    setSelectedPlan(planId);
    setProcessing(true);

    // Simulate Stripe payment process
    setTimeout(() => {
      // Update user plan
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = users.map((u: any) => {
        if (u.id === user?.id) {
          return { ...u, plan: planId, paid: true };
        }
        return u;
      });

      localStorage.setItem('users', JSON.stringify(updatedUsers));
      localStorage.setItem('user', JSON.stringify({
        ...user,
        plan: planId,
        paid: true
      }));

      setProcessing(false);
      navigate(`/portal/${user?.id}`);
    }, 2000);
  };

  return (
    <div>
      <Navbar />

      <div style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h1 style={{
              fontSize: 'var(--hero-title-size)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              marginBottom: 16
            }}>
              Simple, transparent pricing
            </h1>
            <p style={{
              fontSize: 'var(--section-subtitle-size)',
              color: '#525252',
              maxWidth: 600,
              margin: '0 auto'
            }}>
              Choose the plan that fits your business. All plans include phone, SMS & WhatsApp.
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
            padding: 20,
            background: '#fafafa',
            borderRadius: 12,
            maxWidth: 700,
            margin: '0 auto 64px',
            border: '1px solid #e5e5e5'
          }}>
            <MessageSquare size={20} style={{ color: '#000' }} />
            <span style={{ fontSize: 15, fontWeight: 500 }}>
              All plans include <strong>Phone Number</strong>, <strong>SMS</strong>, and <strong>WhatsApp</strong> messaging
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'var(--pricing-grid)',
            gap: 32,
            maxWidth: 1200,
            margin: '0 auto',
            alignItems: 'stretch'
          }}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                style={{
                  padding: 'var(--container-padding)',
                  paddingTop: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  background: plan.popular ? '#000' : '#fff',
                  color: plan.popular ? '#fff' : '#000',
                  borderRadius: 24,
                  border: plan.popular ? '2px solid #000' : '1px solid #e5e5e5',
                  position: 'relative',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: plan.popular ? '0 30px 60px rgba(0,0,0,0.12)' : '0 10px 30px rgba(0,0,0,0.04)',
                  height: '100%'
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: 24,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#fff',
                    color: '#000',
                    padding: '6px 16px',
                    borderRadius: 980,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    zIndex: 10
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ marginBottom: 24, height: 110, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: 24,
                    fontWeight: 600,
                    letterSpacing: '-0.02em',
                    margin: 0,
                    marginBottom: 8,
                    height: 32
                  }}>{plan.name}</h3>
                  <p style={{
                    fontSize: 15,
                    color: plan.popular ? '#a3a3a3' : '#737373',
                    lineHeight: 1.5,
                    margin: 0,
                    flex: 1
                  }}>{plan.description}</p>
                </div>

                <div style={{ marginBottom: 24, height: 80, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{
                    fontSize: 56,
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: 1
                  }}>
                    ₹{plan.price.toLocaleString()}
                  </span>
                  <span style={{
                    fontSize: 16,
                    color: plan.popular ? '#a3a3a3' : '#737373'
                  }}>
                    /month
                  </span>
                </div>

                <div style={{
                  marginBottom: 32,
                  padding: '16px',
                  background: plan.popular ? 'rgba(255,255,255,0.08)' : '#fafafa',
                  borderRadius: 12,
                  border: plan.popular ? '1px solid rgba(255,255,255,0.1)' : '1px solid #f0f0f0',
                  minHeight: 84
                }}>
                  <div style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 4
                  }}>
                    {plan.hours} of AI calling
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: plan.popular ? '#a3a3a3' : '#737373'
                  }}>
                    {plan.minutes} included
                  </div>
                </div>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={processing && selectedPlan === plan.id}
                  style={{
                    width: '100%',
                    padding: 16,
                    background: plan.popular ? '#fff' : '#000',
                    color: plan.popular ? '#000' : '#fff',
                    borderRadius: 980,
                    fontSize: 15,
                    fontWeight: 500,
                    marginBottom: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    opacity: processing && selectedPlan === plan.id ? 0.6 : 1
                  }}
                >
                  {processing && selectedPlan === plan.id ? (
                    'Processing...'
                  ) : (
                    <>
                      Get Started
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  marginTop: 8
                }}>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontSize: 14
                    }}>
                      <Check size={16} style={{ flexShrink: 0 }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: 64,
            padding: 40,
            background: '#fafafa',
            borderRadius: 16
          }}>
            <h3 style={{
              fontSize: 20,
              fontWeight: 600,
              marginBottom: 12
            }}>
              Need more minutes or custom requirements?
            </h3>
            <p style={{
              fontSize: 15,
              color: '#525252',
              marginBottom: 24
            }}>
              Contact us for enterprise pricing and custom integrations.
            </p>
            <a
              href="mailto:sales@vox.ai"
              className="btn-secondary"
              style={{
                display: 'inline-block'
              }}
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
