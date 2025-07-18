import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Smooth scroll handler
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with diagonal stripes pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 opacity-90">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 20px, transparent 20px, transparent 40px)` 
        }}></div>
      </div>
      
      {/* Circular shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[10%] top-[20%] w-64 h-64 rounded-full bg-white opacity-30"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-[5%] bottom-[10%] w-80 h-80 rounded-full bg-white opacity-20"
      />

      <div className="container mx-auto px-4 h-screen flex flex-col justify-center relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Shwetansh Welfare and <br />Educational Trust
            </h1>
            <p className="text-xl md:text-2xl text-white opacity-90 italic mb-10">
              "Empowering Youth, Transforming Futures"
            </p>
            <p className="text-lg text-white opacity-80 max-w-3xl mx-auto mb-10">
              Join our government-registered organization committed to creating positive change through education, 
              welfare, and innovative community-based projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/join-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-brand-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join Us
              </motion.button>
            </Link>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              onClick={handleScrollToAbout}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-600 transition-all"
            >
              Explore Our Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-0 right-0 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-3xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
