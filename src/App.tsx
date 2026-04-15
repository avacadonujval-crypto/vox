import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import CustomerPortal from './pages/CustomerPortal';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portal/:customerId" element={<CustomerPortal />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
