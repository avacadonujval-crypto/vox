import Navbar from '../components/Navbar';
import { Phone, BarChart3, Clock, Users, Check, Mic, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        paddingTop: 'var(--hero-padding-top)',
        paddingBottom: 'var(--hero-padding-bottom)',
        background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)'
      }}>
        <div className="container" style={{
          textAlign: 'center',
          maxWidth: 900
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: '#000',
            color: '#fff',
            borderRadius: 980,
            fontSize: 13,
            fontWeight: 500,
            marginBottom: 32,
            letterSpacing: '0.02em'
          }}>
            AI-Powered Voice Agent by VOX
          </div>
          
          <h1 style={{
            fontSize: 'var(--hero-title-size)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            marginBottom: 24
          }}>
            Never Miss a Sales Call Again
          </h1>
          
          <p style={{
            fontSize: 'var(--section-subtitle-size)',
            color: '#525252',
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: 680,
            margin: '0 auto 48px'
          }}>
            Our AI voice agent handles inbound and outbound calls 24/7, qualifies leads, 
            books appointments, and grows your business—with VOX, you get phone, SMS, and WhatsApp included.
          </p>
          
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/signup" className="btn-primary" style={{
              padding: '16px 40px',
              fontSize: 16
            }}>
              Start Free Trial
            </Link>
            <Link to="/pricing" className="btn-secondary" style={{
              padding: '16px 40px',
              fontSize: 16
            }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Why AI Agents Section */}
      <section className="section" style={{
        background: '#fafafa'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 className="section-title">Why Companies Choose AI Agents Over Sales Teams</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              AI agents don't sleep, don't quit, and don't miss a single lead. Here's why smart businesses are making the switch.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'var(--comparison-grid)',
            gap: 24,
            maxWidth: 1100,
            margin: '0 auto'
          }}>
            <ComparisonCard
              ai="24/7 availability—never misses a call"
              human="Limited to 8-hour shifts, misses leads"
              icon={<Clock size={24} />}
            />
            <ComparisonCard
              ai="Handles unlimited simultaneous calls"
              human="One sales rep, one call at a time"
              icon={<Phone size={24} />}
            />
            <ComparisonCard
              ai="Consistent messaging, every time"
              human="Varies by mood, energy, training"
              icon={<MessageSquare size={24} />}
            />
            <ComparisonCard
              ai="Instantly qualifies and scores leads"
              human="Takes time to follow up manually"
              icon={<Users size={24} />}
            />
            <ComparisonCard
              ai="₹15,000/month—scales infinitely"
              human="₹40,000+/month per rep + benefits"
              icon={<BarChart3 size={24} />}
            />
            <ComparisonCard
              ai="Books appointments automatically"
              human="Manual scheduling, prone to errors"
              icon={<Calendar size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 className="section-title">Everything You Need to Scale</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Powerful features designed to help you capture, qualify, and convert more leads automatically.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'var(--feature-grid)',
            gap: 32
          }}>
            <FeatureCard
              icon={<Phone size={32} />}
              title="24/7 Voice Agent"
              description="Handle inbound and outbound calls around the clock. Never miss a lead, even outside business hours."
            />
            <FeatureCard
              icon={<MessageSquare size={32} />}
              title="Intelligent Conversations"
              description="AI-powered conversations that feel natural. Qualifies leads, answers questions, and builds rapport."
            />
            <FeatureCard
              icon={<Calendar size={32} />}
              title="Smart Scheduling"
              description="Automatically book appointments and site visits. Integrates with your calendar in real-time."
            />
            <FeatureCard
              icon={<BarChart3 size={32} />}
              title="Lead Management"
              description="Track every interaction with sentiment analysis, call summaries, and actionable insights."
            />
            <FeatureCard
              icon={<Clock size={32} />}
              title="Instant Response"
              description="Respond to leads in seconds, not hours. First response time is critical—we make it instant."
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Multi-Language Support"
              description="Communicate with customers in their preferred language. Break down communication barriers."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="section" style={{
        background: '#fafafa'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Get started in minutes. No complex setup or technical knowledge required.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'var(--feature-grid)',
            gap: 48,
            maxWidth: 1000,
            margin: '0 auto'
          }}>
            <StepCard
              step="01"
              title="Sign Up & Configure"
              description="Create your account and customize your AI agent's personality, knowledge base, and call handling rules."
            />
            <StepCard
              step="02"
              title="Connect Your Number"
              description="Forward your existing phone number or get a new one. Setup takes less than 5 minutes."
            />
            <StepCard
              step="03"
              title="Start Converting"
              description="Watch as your AI agent handles calls, qualifies leads, and books appointments automatically."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'var(--benefit-columns)',
            gap: 'var(--benefit-gap)',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="section-title">Why Businesses Choose VOX</h2>
              <p style={{
                fontSize: 17,
                color: '#525252',
                lineHeight: 1.7,
                marginBottom: 40
              }}>
                Our AI voice agent isn't just an answering service—it's a trained sales professional 
                that works 24/7 without missing a beat.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <BenefitItem text="Increase lead capture by up to 300%" />
                <BenefitItem text="Reduce missed calls to zero" />
                <BenefitItem text="Qualify leads automatically" />
                <BenefitItem text="Book more appointments" />
                <BenefitItem text="Scale without hiring" />
              </div>
            </div>
            
            <div style={{
              background: '#000',
              borderRadius: 24,
              padding: 'var(--container-padding)',
              color: '#fff'
            }}>
              <Mic size={48} style={{ marginBottom: 24 }} />
              <h3 style={{
                fontSize: 28,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: 16
              }}>
                "Your AI agent just booked 15 appointments while you were sleeping."
              </h3>
              <p style={{
                fontSize: 15,
                color: '#a3a3a3'
              }}>
                Real results from real customers. This isn't science fiction—it's happening right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section" style={{
        background: '#fafafa'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 className="section-title">Built for Your Industry</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24
          }}>
            <IndustryCard title="Real Estate" description="Property inquiries, site visits, follow-ups" />
            <IndustryCard title="Healthcare" description="Appointment booking, patient queries" />
            <IndustryCard title="Automotive" description="Test drive scheduling, service bookings" />
            <IndustryCard title="Education" description="Admission inquiries, counseling calls" />
            <IndustryCard title="E-commerce" description="Order support, returns handling" />
            <IndustryCard title="Financial Services" description="Lead qualification, consultations" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        background: '#000',
        color: '#fff'
      }}>
        <div className="container" style={{
          textAlign: 'center'
        }}>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Ready to Transform Your Business?
          </h2>
          <p className="section-subtitle" style={{
            color: '#a3a3a3',
            margin: '0 auto 48px'
          }}>
            Join hundreds of businesses already using VOX to scale their operations.
          </p>
          <Link to="/signup" className="btn-primary" style={{
            background: '#fff',
            color: '#000',
            padding: '18px 48px',
            fontSize: 16
          }}>
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '60px 0 40px',
        borderTop: '1px solid #e5e5e5'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 24
          }}>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>
              VOX
              </div>
              <p style={{ fontSize: 14, color: '#737373' }}>
                AI-powered voice agent for modern businesses.
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              gap: 32
            }}>
              <a href="#" style={{ fontSize: 14, color: '#525252' }}>Privacy</a>
              <a href="#" style={{ fontSize: 14, color: '#525252' }}>Terms</a>
              <a href="#" style={{ fontSize: 14, color: '#525252' }}>Support</a>
              <a href="#" style={{ fontSize: 14, color: '#525252' }}>Contact</a>
            </div>
            
            <div style={{ fontSize: 14, color: '#737373' }}>
              © 2026 VOX. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div style={{
    padding: 32,
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #e5e5e5',
    transition: 'all 0.2s ease'
  }}>
    <div style={{ marginBottom: 16, color: '#000' }}>{icon}</div>
    <h3 style={{
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      marginBottom: 12
    }}>{title}</h3>
    <p style={{
      fontSize: 15,
      color: '#525252',
      lineHeight: 1.6
    }}>{description}</p>
  </div>
);

const StepCard = ({ step, title, description }: { step: string, title: string, description: string }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{
      display: 'inline-block',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: '#000',
      color: '#fff',
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '56px',
      marginBottom: 24
    }}>{step}</div>
    <h3 style={{
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      marginBottom: 12
    }}>{title}</h3>
    <p style={{
      fontSize: 15,
      color: '#525252',
      lineHeight: 1.6
    }}>{description}</p>
  </div>
);

const BenefitItem = ({ text }: { text: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }}>
      <Check size={14} color="#fff" />
    </div>
    <span style={{ fontSize: 15, fontWeight: 500 }}>{text}</span>
  </div>
);

const IndustryCard = ({ title, description }: { title: string, description: string }) => (
  <div style={{
    padding: 28,
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e5e5e5'
  }}>
    <h4 style={{
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      marginBottom: 8
    }}>{title}</h4>
    <p style={{
      fontSize: 14,
      color: '#737373'
    }}>{description}</p>
  </div>
);

const ComparisonCard = ({ ai, human, icon }: { ai: string, human: string, icon: React.ReactNode }) => (
  <div style={{
    padding: 32,
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #e5e5e5'
  }}>
    <div style={{ marginBottom: 20, color: '#000' }}>{icon}</div>
    
    <div style={{ marginBottom: 20 }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12
      }}>
        <div style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Check size={12} color="#fff" />
        </div>
        <span style={{ fontSize: 15, fontWeight: 600 }}>AI Agent</span>
      </div>
      <p style={{
        fontSize: 14,
        color: '#525252',
        paddingLeft: 32,
        lineHeight: 1.5
      }}>{ai}</p>
    </div>

    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12
      }}>
        <div style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#737373'
          }} />
        </div>
        <span style={{ fontSize: 15, fontWeight: 500, color: '#737373' }}>Sales Rep</span>
      </div>
      <p style={{
        fontSize: 14,
        color: '#737373',
        paddingLeft: 32,
        lineHeight: 1.5
      }}>{human}</p>
    </div>
  </div>
);

export default LandingPage;
