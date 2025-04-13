import { motion } from 'framer-motion';

const departments = [
  { 
    icon: "📱", 
    name: "Social Media", 
    description: "Manage and grow our social presence across platforms" 
  },
  { 
    icon: "🔬", 
    name: "R&D", 
    description: "Research and develop new initiatives and projects" 
  },
  { 
    icon: "💻", 
    name: "Technical", 
    description: "Handle technical projects and provide IT support" 
  },
  { 
    icon: "📢", 
    name: "PR", 
    description: "Manage public relations and communications strategy" 
  },
  { 
    icon: "🎨", 
    name: "Design", 
    description: "Create visual content, branding materials, and graphics" 
  },
  { 
    icon: "🖊", 
    name: "Content", 
    description: "Develop engaging content for all platforms and publications" 
  },
  { 
    icon: "📊", 
    name: "Management", 
    description: "Coordinate projects, lead teams, and ensure efficient operations" 
  },
  { 
    icon: "📈", 
    name: "Marketing", 
    description: "Develop strategies to promote our initiatives and broaden our reach" 
  },
  { 
    icon: "🎓", 
    name: "Volunteering", 
    description: "Coordinate and participate in on-ground volunteer activities" 
  }
];

const Departments = () => {
  return (
    <section className="py-20 bg-white" id="departments">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Join Our Team</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Departments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Are you passionate about youth empowerment, social welfare, education, and skill development? 
            This is your chance to make a real impact!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-50 p-6 rounded-xl hover:shadow-lg transition-all group hover:bg-brand-500"
            >
              <div className="text-4xl mb-4 group-hover:text-white">{dept.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">{dept.name}</h3>
              <p className="text-gray-600 group-hover:text-white">{dept.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our team to gain valuable experience, enhance your skills, and contribute to meaningful social causes.
            Our volunteering opportunities provide real-world experience and exposure to social service activities.
          </p>
          <a href="https://forms.gle/TqivSGspxzNXbMDXA" target="_blank">
          <button className="bg-brand-500 text-white px-8 py-4 rounded-full hover:bg-brand-600 transition-colors font-bold shadow-lg">
            Apply Now
          </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Departments;
