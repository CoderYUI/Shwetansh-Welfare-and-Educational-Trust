import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">About Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a government-registered organization committed to driving positive change
            in society through education, welfare, and social initiatives.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { number: "01", text: "Government Registered Trust" },
                { number: "02", text: "Community-Based Projects" },
                { number: "03", text: "Education Focused" },
                { number: "04", text: "Social Impact" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ scale: 1.03 }} 
                  className="p-6 bg-brand-50 rounded-xl border-l-4 border-brand-500"
                >
                  <div className="text-brand-600 font-bold mb-2">{item.number}</div>
                  <div className="text-gray-800 font-medium">{item.text}</div>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-gray-700">
              Empowering society through education and social welfare initiatives. Dedicated to creating a 
              positive social impact, we focus on education, welfare, and addressing 
              critical social issues. Our initiatives are designed to uplift and empower individuals and 
              communities through inclusive participation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative z-10">
              <div className="absolute -inset-4 bg-brand-200 rounded-xl transform -rotate-3"></div>
              <div className="relative z-10 rounded-lg shadow-lg w-full h-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <img 
                      src="/swet_logo.jpg" 
                      alt="SWET Logo" 
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-md"
                    />
                    <div className="text-3xl font-bold mb-3">Shwetansh Welfare and Education Trust</div>
                    <p className="text-lg italic">"Empowering Youth, Transforming Futures."</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Field Of Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Our Mission</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Field Of Work</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Education-related initiatives",
                description: "Enhancing learning opportunities for all ages."
              },
              {
                icon: "⚖️",
                title: "Addressing Social Issues",
                description: "Tackling inequality and injustice."
              },
              {
                icon: "🤝",
                title: "Welfare Programs",
                description: "Supporting the needy and vulnerable."
              },
              {
                icon: "🚀",
                title: "Youth Empowerment",
                description: "Unlocking potential for a brighter future."
              },
              {
                icon: "💼",
                title: "Skill Development",
                description: "Equipping individuals for success."
              },
              {
                icon: "👨‍💼",
                title: "Unemployment",
                description: "Creating opportunities through education and training."
              }
            ].map((field, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border-b-2 border-brand-300"
              >
                <div className="text-4xl mb-4">{field.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{field.title}</h3>
                <p className="text-gray-600">{field.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
