// src/App.jsx
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import OurServices from './components/ourservices';
import Departments from './components/Departments';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import Seminars from './components/Seminars'; // ✅ Import Seminars

// Homepage layout
function Home() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none h-32" />
          <About />
          <Benefits />
          <OurServices />
          <Departments />
          <Process />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seminars" element={<Seminars />} />
    </Routes>
  );
}

export default App;
