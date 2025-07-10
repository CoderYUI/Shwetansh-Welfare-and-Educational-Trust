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
    link: '', // No redirect
  },
  {
    title: 'Webinars',
    description:
      'Live expert-led sessions to educate, upskill, and empower students and professionals.',
    icon: '💻',
    link: '', // No redirect
  },
  {
    title: 'Seminars',
    description:
      'Interactive seminars held online and offline to encourage learning and discussion.',
    icon: '🎤',
    link: '/seminars', // ✅ Route to Seminar page
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
          {services.map((service, index) => {
            const CardContent = (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border-t-4 border-brand-500 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );

            return service.link ? (
              <Link to={service.link} key={index}>
                {CardContent}
              </Link>
            ) : (
              CardContent
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
