import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FunStats from './components/FunStats';
import Details from './components/Details';
import Outcomes from './components/Outcomes';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import RequestAccessModal from './components/RequestAccessModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] text-[#000000] flex flex-col relative overflow-x-hidden selection:bg-[#d1ffca] selection:text-[#000000]">
      {/* Floating 48px Nav Pill Header */}
      <Navbar 
        onRequestAccess={handleOpenModal} 
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onEnrollClick={handleOpenModal}
          onExploreClick={() => handleNavigate('details')}
        />
        <FunStats />
        <Details />
        <Outcomes />
        <Testimonials />
        <FAQ />
        <RegisterForm />
      </main>

      {/* Inverted Dark Footer */}
      <Footer />

      {/* Registration Modal Overlay */}
      <RequestAccessModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
