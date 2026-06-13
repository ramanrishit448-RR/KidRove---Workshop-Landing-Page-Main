import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FunStats from './components/FunStats';
import Details from './components/Details';
import Outcomes from './components/Outcomes';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleEnrollClick = () => {
    scrollToSection('register');
  };

  const handleExploreClick = () => {
    scrollToSection('details');
  };

  return (
    <div className="min-h-screen flex flex-col bg-kidrove-bg overflow-x-hidden selection:bg-purple-100 selection:text-kidrove-purple dark:selection:bg-purple-900/50 dark:selection:text-purple-200 transition-colors duration-300">
      {/* Navigation bar */}
      <Navbar onEnrollClick={handleEnrollClick} />

      {/* Main content sections */}
      <main className="flex-grow">
        <Hero 
          onEnrollClick={handleEnrollClick} 
          onExploreClick={handleExploreClick} 
        />

        <FunStats />
        
        <Details />
        
        <Outcomes />

        <Testimonials />
        
        <FAQ />
        
        <RegisterForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
