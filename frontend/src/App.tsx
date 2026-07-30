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
import AmbientParticles from './components/AmbientParticles';

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
    <div className="min-h-screen bg-[#000000] text-white flex flex-col relative overflow-x-hidden selection:bg-[#8052ff] selection:text-white">
      {/* Background Ambient Drifting Triangle Particles */}
      <AmbientParticles />

      {/* Top Navigation */}
      <Navbar 
        onRequestAccess={handleOpenModal} 
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-grow z-10">
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

      {/* Footer */}
      <Footer />

      {/* Request Access Overlay Modal */}
      <RequestAccessModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
