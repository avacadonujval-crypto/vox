import Navbar from '../components/Navbar';
import { Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      
      <div style={{
        paddingTop: 'var(--hero-padding-top)',
        paddingBottom: 'var(--hero-padding-bottom)',
        minHeight: '100vh'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: 700,
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: 'var(--hero-title-size)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              marginBottom: 24
            }}>
              Get in Touch
            </h1>
            <p style={{
              fontSize: 'var(--section-subtitle-size)',
              color: '#525252',
              lineHeight: 1.6,
              marginBottom: 64
            }}>
              Have questions about VOX? We'd love to hear from you. 
              Reach out via email or connect with us on LinkedIn.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'var(--feature-grid)',
            gap: 32,
            maxWidth: 800,
            margin: '0 auto'
          }}>
            {/* Email Card */}
            <a
              href="mailto:avacadonujval@gmail.com"
              style={{
                display: 'block',
                padding: 48,
                background: '#fff',
                borderRadius: 20,
                border: '1px solid #e5e5e5',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                background: '#000',
                borderRadius: 16,
                marginBottom: 24
              }}>
                <Mail size={28} color="#fff" />
              </div>
              <h3 style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: 12
              }}>
                Email
              </h3>
              <p style={{
                fontSize: 15,
                color: '#525252',
                marginBottom: 16
              }}>
                Drop us a line anytime
              </p>
              <p style={{
                fontSize: 16,
                fontWeight: 500
              }}>
                avacadonujval@gmail.com
              </p>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/ujval-shrivatsa-b714b339b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                padding: 48,
                background: '#fff',
                borderRadius: 20,
                border: '1px solid #e5e5e5',
                textAlign: 'center',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                color: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#000';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5e5e5';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                background: '#000',
                borderRadius: 16,
                marginBottom: 24
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 style={{
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                marginBottom: 12
              }}>
                LinkedIn
              </h3>
              <p style={{
                fontSize: 15,
                color: '#525252',
                marginBottom: 16
              }}>
                Connect professionally
              </p>
              <p style={{
                fontSize: 16,
                fontWeight: 500
              }}>
                Ujval Shrivatsa
              </p>
            </a>
          </div>

          <div style={{
            marginTop: 120,
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'var(--section-title-size)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: 16
            }}>
              Ready to get started?
            </h2>
            <p style={{
              fontSize: 17,
              color: '#525252',
              marginBottom: 32
            }}>
              Join businesses already using VOX to scale their operations
            </p>
            <a href="/pricing" className="btn-primary" style={{
              display: 'inline-block'
            }}>
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
