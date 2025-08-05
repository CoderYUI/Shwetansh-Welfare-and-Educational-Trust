import { useEffect } from 'react';
import { motion } from 'framer-motion'; // Adding motion for animations
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Olympiads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="bg-brand-600 text-white pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 h-[400px]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Shwetansh National Olympiad</h1>
              <p className="text-xl opacity-90 italic mb-6">
                "Shifting Focus from Marks to Skills"
              </p>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                A pan-India movement to foster logical reasoning, critical thinking, and real-world problem-solving among students. Join us in building a future-ready generation!
              </p>
            </div>
          </div>
        </section>

        {/* Why Participate Section - Improved */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">For Educational Institutions</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Should Your School Participate?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join a nationwide movement to transform education from rote learning to skill-based development
              </p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1">
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500 mb-6">
                  <h3 className="text-xl font-bold text-brand-600 mb-3">🏆 National Recognition & Prestige</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>City topper's school featured on official platforms and national events</li>
                    <li>Certificate of Educational Contribution for partner schools</li>
                    <li>Recognition as an institution that prioritizes skill development</li>
                  </ul>
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500 mb-6">
                  <h3 className="text-xl font-bold text-brand-600 mb-3">🧠 Focus on Skills Over Marks</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Logical reasoning, critical thinking, and problem-solving emphasis</li>
                    <li>Identify hidden talent beyond conventional examination metrics</li>
                    <li>Prepare students for real-world challenges and opportunities</li>
                  </ul>
                </motion.div>
                
                <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-500">
                  <h3 className="text-xl font-bold text-brand-600 mb-3">🎓 Value for Every Student</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Free expert-designed e-booklet for all participants</li>
                    <li>Certificates of participation for every student</li>
                    <li>Scholarships up to ₹30,000 for top performers</li>
                    <li>National-level exposure and confidence building</li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-brand-50 rounded-xl transform rotate-3"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1655337690727-5224680c8c07?q=80&w=800&auto=format&fit=crop"
                      alt="Olympiad Students"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Exclusive Partner Benefits</h3>
                      <p className="text-white/90">Access to expert talks, workshops, and career guidance sessions from alumni of top institutions including IITs, NITs, IIMs, and BITS</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Olympiad Section - Improved */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Our Vision</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Olympiad</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fostering future-ready minds through skill-based assessment and national collaboration
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-brand-500"
              >
                <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Objective</h3>
                <p className="text-gray-700 mb-4">To develop and test essential 21st-century skills:</p>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>Logical reasoning abilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>Critical thinking approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>Analytical capability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>Problem-solving mindset</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-brand-500"
              >
                <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">👥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Target Audience</h3>
                <div className="mb-4">
                  <div className="font-medium text-brand-600">Primary:</div>
                  <p className="text-gray-700 mb-2">School students from Classes 1 to 12 across India</p>
                </div>
                <div>
                  <div className="font-medium text-brand-600">Secondary:</div>
                  <p className="text-gray-700">College students from reputed institutions as project volunteers and coordinators</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-t-4 border-brand-500"
              >
                <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">🔄</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Bigger Picture</h3>
                <p className="text-gray-700 mb-3">This Olympiad isn't just a competition—it's a movement to:</p>
                <ul className="text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>Shift from "marks matter" to "skills matter"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>Recognize hidden talent often overlooked</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span>Build a practical education system</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto border-l-4 border-brand-500"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">💡</div>
                <h3 className="text-2xl font-bold text-gray-900">Our Purpose & Motivation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our current education system is heavily theoretical. We aim to bridge this gap by:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-center">
                  <p className="text-brand-600 font-medium">Promoting practical and skill-based learning</p>
                </div>
                <div className="bg-brand-50 p-3 rounded-lg text-center">
                  <p className="text-brand-600 font-medium">Encouraging real-life project involvement</p>
                </div>
                <div className="bg-brand-50 p-3 rounded-lg text-center">
                  <p className="text-brand-600 font-medium">Providing early competitive exposure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits of Association Section - Improved */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Partnership Value</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Association</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Transforming knowledge into real-world skills for both educational institutions and students
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-100 to-brand-50 rounded-xl transform -rotate-1"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-md z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-brand-500 p-3 rounded-full text-white text-xl">
                      🎓
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">For Colleges</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Internship Opportunities at Shwetansh Welfare Trust</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Work on real-life, national-level projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Develop practical skills beyond textbook learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Build strong professional connections and networks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Enhance resume with certificates and experience</span>
                    </li>
                  </ul>
                  
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-brand-600 font-medium">This initiative helps transform theoretical knowledge into applied skillsets, preparing graduates to be capable, confident, and socially responsible.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-50 to-brand-100 rounded-xl transform rotate-1"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-md z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-brand-500 p-3 rounded-full text-white text-xl">
                      🏫
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">For Schools</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Early exposure to logical and analytical thinking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Opportunities for students to interact nationwide</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Experience in national-level competitive environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Preparation for future exams like JEE, NEET, and others</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Shift in focus from rote learning to skill development</span>
                    </li>
                  </ul>
                  
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <p className="text-brand-600 font-medium">Our Olympiad identifies students who truly understand concepts rather than just memorizing them—a student scoring 90% in school may not perform well here if they lack problem-solving skills.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-600">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto text-center shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-700">Ready to Join the Movement?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
                Partner with Shwetansh Welfare and Educational Trust to empower your students and institution.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Olympiads;



