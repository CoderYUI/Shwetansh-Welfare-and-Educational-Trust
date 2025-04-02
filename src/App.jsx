import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Departments from './components/Departments'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none h-32 -mt-32"></div>
          <About />
          <Benefits />
          <Departments />
          <Process />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
