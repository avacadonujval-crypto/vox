import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #e5e5e5'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72
        }}>
          <Link to="/" style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.03em'
          }}>
            VOX
          </Link>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32
          }} className="desktop-menu">
            <Link to="/" style={{
              fontSize: 15,
              fontWeight: 400,
              color: '#525252'
            }}>Home</Link>
            <Link to="/pricing" style={{
              fontSize: 15,
              fontWeight: 400,
              color: '#525252'
            }}>Pricing</Link>
            <Link to="/contact" style={{
              fontSize: 15,
              fontWeight: 400,
              color: '#525252'
            }}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          display: 'none',
          padding: '20px 24px',
          borderTop: '1px solid #e5e5e5',
          background: 'white'
        }} className="mobile-menu">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
