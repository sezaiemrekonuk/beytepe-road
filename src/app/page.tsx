import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ThemeDebug from '../components/ThemeDebug';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* Dark mode test element
      <div className="fixed top-20 right-4 p-3 border border-gray-300 dark:border-gray-600 rounded-lg z-50 dark-mode-test">
        Dark Mode Test
      </div>
      
      <ThemeDebug /> */}
    </main>
  );
}
