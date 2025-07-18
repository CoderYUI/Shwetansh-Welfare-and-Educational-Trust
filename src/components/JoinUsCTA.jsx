import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JoinUsCTA = () => {
  return (
    <section className="py-16 bg-brand-600 text-white" id="join-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community of changemakers and be part of a movement that's transforming lives through education and welfare initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Join Us Today
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-10 bg-white/10 rounded-lg p-6 inline-block">
              <p className="font-medium">Registration Fee: ₹210 only</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsCTA;
