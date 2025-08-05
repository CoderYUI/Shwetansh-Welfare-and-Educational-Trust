import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Olympiad & Skills Training</h1>
              <p className="text-xl opacity-90 italic mb-6">
                "Empowering Students & Volunteers for Real-World Success"
              </p>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Our training programs are designed to prepare students and volunteers for Olympiads and beyond, focusing on logical reasoning, critical thinking, and practical skills.
              </p>
            </div>
          </div>
        </section>

        {/* Why Training Matters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Why Training?</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Training is Unique</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We go beyond rote learning, focusing on skill-based development and real-world application.
              </p>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-500">
                <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">🧠</div>
                <h3 className="text-xl font-bold text-brand-600 mb-3">Skill-Based Approach</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Logical reasoning & critical thinking</li>
                  <li>Problem-solving and analytical skills</li>
                  <li>Real-world application, not just theory</li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-500">
                <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">🎯</div>
                <h3 className="text-xl font-bold text-brand-600 mb-3">Personalized Guidance</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Workshops & interactive sessions</li>
                  <li>Mentorship from Olympiad experts and alumni</li>
                  <li>Feedback and progress tracking</li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-500">
                <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">🚀</div>
                <h3 className="text-xl font-bold text-brand-600 mb-3">Holistic Development</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Confidence building & communication skills</li>
                  <li>Exposure to national-level competition</li>
                  <li>Preparation for future exams & careers</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How We Train Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Our Method</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Train</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A blend of expert-led sessions, hands-on practice, and continuous support.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-brand-600 mb-4">For Students</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Live and recorded training sessions for Olympiad subjects</li>
                  <li>Practice tests and mock Olympiads</li>
                  <li>Free e-booklets and study resources</li>
                  <li>Peer learning and group discussions</li>
                  <li>Guidance for competitive exams (JEE, NEET, etc.)</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-brand-600 mb-4">For Volunteers & Coordinators</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Training in project management and leadership</li>
                  <li>Workshops on communication and outreach</li>
                  <li>Mentorship from experienced educators and alumni</li>
                  <li>Opportunities to lead sessions and mentor students</li>
                  <li>Certification and recognition for outstanding trainers</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Training Outcomes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Impact</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Gain</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our training ensures every participant is ready for Olympiads and real-world challenges.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: "📜",
                  title: "Certification",
                  desc: "Receive certificates for participation and achievement."
                },
                {
                  icon: "💡",
                  title: "Skill Mastery",
                  desc: "Master logical reasoning, critical thinking, and analytical skills."
                },
                {
                  icon: "🤝",
                  title: "Mentorship",
                  desc: "Get mentored by top educators and Olympiad alumni."
                },
                {
                  icon: "🚀",
                  title: "Confidence",
                  desc: "Build confidence to excel in national-level competitions."
                },
                {
                  icon: "🌐",
                  title: "Networking",
                  desc: "Connect with peers and professionals across India."
                },
                {
                  icon: "🎯",
                  title: "Career Readiness",
                  desc: "Prepare for future exams and professional opportunities."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-brand-50 p-6 rounded-xl shadow-md text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-brand-700 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-brand-600">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto text-center shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-700">Ready to Get Trained?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
                Join our training programs to unlock your true potential and succeed in Olympiads and beyond!
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

export default Training;
