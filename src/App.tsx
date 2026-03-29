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

function App() {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero onCtaClick={scrollToForm} />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ResultsSection />
      <OfferSection onCtaClick={scrollToForm} />
      <LeadForm />
      <FinalCTA onCtaClick={scrollToForm} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
