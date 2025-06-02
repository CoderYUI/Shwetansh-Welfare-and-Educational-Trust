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
              <motion.div 
                initial={{ rotate: -3, scale: 0.97 }}
                animate={{ rotate: -3, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -inset-4 bg-brand-200 rounded-xl"
              />
              
              <motion.div 
                initial={{ rotate: 2, scale: 0.97 }}
                animate={{ rotate: 2, scale: 0.97 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute -inset-2 bg-brand-100/50 rounded-xl"
              />
              
              <div className="relative z-10 rounded-lg shadow-lg w-full h-full overflow-hidden">
                <div className="relative w-full h-full">
                  <motion.div
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Youth Empowerment" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0.4 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-brand-700 via-brand-700/50 to-transparent"
                  />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-2xl text-white font-bold mb-2"
                    >
                      Empowering Communities
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="text-white/90 text-center max-w-md"
                    >
                      Creating opportunities through education & welfare
                    </motion.p>
                    
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="w-16 h-1 bg-white mt-3 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-0 -right-4 bg-brand-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-xl z-20 shadow-lg"
            >
              <span className="transform -rotate-12">🌱</span>
            </motion.div>
          </motion.div>
        </div>

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
