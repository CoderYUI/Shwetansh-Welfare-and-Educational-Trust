import { motion } from 'framer-motion';

const PreviousWork = () => {
  // Previous work projects with cards layout
  const previousProjects = [
    {
      title: "Education and Learning Events",
      description: "Organized interactive educational workshops for underprivileged children in Bhopal, featuring group reading sessions and distribution of notebooks, storybooks, and educational materials.",
      image: "/swet_work_1.jpg",
      category: "Education"
    },
    {
      title: "Welfare Distribution Drives",
      description: "Distributed essential items—winter clothing (sweaters, socks, caps) and footwear—to toddlers and older children from marginalized communities.",
      image: "/swet_work_2.jpg",
      category: "Welfare"
    },
    {
      title: "Community Outreach & Engagement",
      description: "Involvement of local women volunteers and mothers on site helped foster trust and inclusivity. Adult participants were engaged in distributing supplies and supporting children.",
      image: "swet_work_3.jpg",
      category: "Community"
    }
  ];
  
  // Upcoming projects display in grid format - focused on educational initiatives
  const upcomingProjects = [
    {
      title: "National Science Olympiad",
      description: "An upcoming competition to discover and nurture scientific talent among students from grades 6-12 across India.",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      category: "Olympiad"
    },
    {
      title: "Career Development Webinar Series",
      description: "A 6-part webinar series featuring industry experts discussing emerging career paths in technology and digital media.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Webinar"
    },
    {
      title: "Leadership Skills Seminar",
      description: "On-campus seminars at 10 colleges focusing on developing leadership and entrepreneurial mindset among young adults.",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Seminar"
    },
    {
      title: "Mathematics Challenge Olympiad",
      description: "A nationwide mathematics competition designed to promote analytical thinking and problem-solving skills.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Olympiad"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" id="previous-work">
      {/* Animated background elements similar to hero section */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute right-[5%] top-[15%] w-64 h-64 rounded-full bg-brand-200 opacity-20"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute left-[10%] bottom-[20%] w-80 h-80 rounded-full bg-brand-300 opacity-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Our Impact</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Previous Work & Impact Highlights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our initiatives making a difference in communities across India
          </p>
        </div>
        
        {/* Previous Work - Card Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {previousProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group h-full flex flex-col"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow">
                <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Section Divider */}
        <div className="flex items-center justify-center my-12">
          <div className="h-px bg-gray-200 w-full max-w-sm"></div>
          <div className="px-4 text-gray-500 font-medium">Upcoming Projects</div>
          <div className="h-px bg-gray-200 w-full max-w-sm"></div>
        </div>
        
        {/* Upcoming Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our work spans across education, welfare, and community development, touching thousands of lives. 
            These upcoming initiatives represent just a glimpse of our commitment to creating positive change through education.
          </p>
          
          <a href="/join-us" className="inline-flex items-center text-brand-600 font-semibold group">
            <span>Be part of our future initiatives</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousWork;
