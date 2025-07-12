import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const services = [
  {
    title: 'Olympiads',
    description:
      'National-level competitions designed to challenge and inspire young minds in various subjects.',
    icon: '📘',
    link: '/olympiads',
  },
  {
    title: 'Webinars',
    description:
      'Live expert-led sessions to educate, upskill, and empower students and professionals.',
    icon: '💻',
    link: '/webinars',
  },
  {
    title: 'Seminars',
    description:
      'Interactive seminars held online and offline to encourage learning and discussion.',
    icon: '🎤',
    link: '/seminars',
  },
];

const OurServices = () => {
  return (
    <div className="bg-gray-50 py-16" id="services">
      <div className="container mx-auto px-4">
        <p className="text-center mb-2">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm">
            What We Offer
          </span>
        </p>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-center mb-12">
          Explore the key services offered by Shwetansh Welfare and Educational Trust to empower youth.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="block group">
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border-t-4 border-brand-500 transition-all relative"
              >
                {/* Mobile visual indicator that this is clickable */}
                <div className="absolute top-4 right-4 md:hidden flex items-center text-brand-500 font-medium text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Learn More button/link for better affordance */}
                <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700 transition-colors">
                  <span>Learn More</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
