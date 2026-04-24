import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import ResultsSection from './components/ResultsSection';
import OfferSection from './components/OfferSection';
import LeadForm from './components/LeadForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ThankYouPage from './pages/ThankYouPage';

// Initialisation une seule fois
const pixelId = '1459572759178200';
ReactPixel.init(pixelId);


function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactPixel.pageView();
  }, [location.pathname]);

  return null;
}

function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onCtaClick={scrollToForm} />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ResultsSection />
      <OfferSection onCtaClick={scrollToForm} />
      <FinalCTA onCtaClick={scrollToForm} />
      <Footer />
      <LeadForm />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <PixelTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;