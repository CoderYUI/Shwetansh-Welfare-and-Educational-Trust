import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const faqs = [
    {
      question: "What kind of projects does SWET work on?",
      answer: "We work on education initiatives, welfare programs, skill development, and social issues like unemployment and inequality."
    },
    {
      question: "How much time commitment is required?",
      answer: "The time commitment varies by role and project. We have flexible options to accommodate different schedules."
    },
    {
      question: "Is there any fee to join as a volunteer?",
      answer: "No, there is no fee to join as a volunteer. We value your time and skills."
    },
    {
      question: "Can I join from anywhere in India?",
      answer: "Yes, many of our positions are remote-friendly, allowing participation from anywhere in India."
    }
  ];

  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Get In Touch</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? Want to join? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Details</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <a href="https://wa.me/918989973328" className="text-brand-600 hover:underline">+91 8989973328</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                  <span className="text-2xl">📸</span>
                </div>
                <div>
                  <h4 className="font-semibold">Instagram</h4>
                  <a href="https://instagram.com/shwetansh_welfare_educational" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">@shwetansh_welfare_educational</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:shwetanshwelfareeducational@gmail.com" className="text-brand-600 hover:underline break-all">shwetanshwelfareeducational@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Q&A / Doubts</h3>
            <p className="mb-6 text-gray-700">
              Feel free to inquire about how we work, the specifics of projects, or any other aspect.
            </p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => toggleQuestion(index)}
                    className="flex justify-between items-center w-full text-left font-medium"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-2 text-brand-500">
                      {activeQuestion === index ? '−' : '+'}
                    </span>
                  </button>
                  
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
