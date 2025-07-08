import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

<Link to="/Seminars">
 <div className="Seminars">Seminars</div>
</Link>


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const services = [
  {
    title: 'Olympiads',
    description: 'National-level competitions designed to challenge and inspire young minds in various subjects.',
    icon: '📘',
  },
  {
    title: 'Webinars',
    description: 'Live expert-led sessions to educate, upskill, and empower students and professionals.',
    icon: '💻',
  },
  {
    title: 'Seminars',
    description: 'Interactive seminars held online and offline to encourage learning and discussion.',
    icon: '🎤',
  },
];
const OurServices = () => {
  return (
    <section className="bg-gray-50 py-16" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Explore the key services offered by Shwetansh Welfare and Educational Trust to empower youth.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border-t-4 border-brand-500 transition-all"
            >
              <div className="text-4xl bg-brand-50 text-brand-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
