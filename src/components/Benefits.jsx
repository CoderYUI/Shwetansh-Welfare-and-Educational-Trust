import { motion } from 'framer-motion';

const benefitsList = [
  {
    icon: "📃",
    title: "Experience Letter",
    description: "Receive official documentation of your volunteering experience"
  },
  {
    icon: "📜",
    title: "Authorized Certificate",
    description: "Get certified recognition for your contributions"
  },
  {
    icon: "🚀",
    title: "Real Projects & Events",
    description: "Work on meaningful projects with real social impact"
  },
  {
    icon: "🌍",
    title: "National-Level Exposure",
    description: "Gain experience working with nationwide initiatives"
  },
  {
    icon: "💼",
    title: "Boost Your Resume",
    description: "Add valuable social sector experience to your profile"
  },
  {
    icon: "🎯",
    title: "Leadership Growth",
    description: "Develop essential leadership and management skills"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Why Join Us?</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Joining</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of something meaningful while building your future
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl border-t-4 border-brand-500 transition-all"
            >
              <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Senior Manager Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Senior Manager Position</h3>
            <p className="text-brand-600 font-medium">Leadership Opportunity</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="text-brand-500 font-bold">1.</div>
              <p>Work with us as the Senior Manager of S.W.E.T.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-brand-500 font-bold">2.</div>
              <p>Lead the project including all the departments.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-brand-500 font-bold">3.</div>
              <p>First point of contact with us.</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-brand-50 rounded-lg">
            <p className="font-semibold">NOTE:</p>
            <p>If your working is remarkable you can be promoted to the post of regional manager of your region.</p>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="py-6 px-8 bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl text-white inline-block">
              <p className="text-lg font-semibold mb-2">
                Plus: Stipend up to ₹70,000<sup>*</sup>
              </p>
              <p className="text-xs text-white/70">*Terms and conditions apply</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
