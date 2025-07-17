import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const JoinUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Benefits Data
  const benefitsList = [
    {
      icon: "📃",
      title: "Experience Letter",
      description: "Receive official documentation of your volunteering experience with SWET that validates your contributions and skills gained"
    },
    {
      icon: "📜",
      title: "Authorized Certificate",
      description: "Get certified recognition for your contributions that enhances your academic and professional portfolio"
    },
    {
      icon: "🚀",
      title: "Real Projects & Events",
      description: "Work on meaningful projects with real social impact across education, welfare, and community development"
    },
    {
      icon: "🌍",
      title: "National-Level Exposure",
      description: "Gain experience working with nationwide initiatives that address pressing social issues"
    },
    {
      icon: "💼",
      title: "Boost Your Resume",
      description: "Add valuable social sector experience to your profile that stands out to academic institutions and employers"
    },
    {
      icon: "🎯",
      title: "Leadership Growth",
      description: "Develop essential leadership and management skills through project ownership and team collaboration"
    },
    {
      icon: "🔄",
      title: "Flexible Work Schedule",
      description: "Contribute based on your availability with options for part-time and remote volunteering"
    },
    {
      icon: "🤝",
      title: "Mentorship Opportunities",
      description: "Learn from experienced professionals and develop a strong professional network"
    }
  ];

  // Departments Data
  const departments = [
    { 
      icon: "📱", 
      name: "Social Media", 
      description: "Manage and grow our social presence across platforms, create engaging content, and build our online community" 
    },
    { 
      icon: "🔬", 
      name: "R&D", 
      description: "Research and develop new initiatives, analyze social issues, and design innovative solution frameworks" 
    },
    { 
      icon: "💻", 
      name: "Technical", 
      description: "Handle technical projects, provide IT support, develop applications, and maintain digital infrastructure" 
    },
    { 
      icon: "📢", 
      name: "PR", 
      description: "Manage public relations, develop communications strategy, and build partnerships with organizations" 
    },
    { 
      icon: "🎨", 
      name: "Design", 
      description: "Create visual content, branding materials, and graphics for digital and print communications" 
    },
    { 
      icon: "🖊", 
      name: "Content", 
      description: "Develop engaging content for all platforms, publications, and educational materials" 
    },
    { 
      icon: "📊", 
      name: "Management", 
      description: "Coordinate projects, lead teams, and ensure efficient operations across all initiatives" 
    },
    { 
      icon: "📈", 
      name: "Marketing", 
      description: "Develop strategies to promote initiatives, broaden reach, and maximize community impact" 
    },
    { 
      icon: "🎓", 
      name: "Volunteering", 
      description: "Coordinate and participate in on-ground volunteer activities, outreach programs, and community events" 
    },
    {
      icon: "🎥",
      name: "Video Editing",
      description: "Craft compelling video content, create educational materials, and document our impact through visual storytelling"
    },
    {
      icon: "✒️",
      name: "Graphic Design",
      description: "Design eye-catching visuals, layouts, and brand assets for digital platforms, social media, and print materials"
    },
    {
      icon: "🛎",
      name: "Front Office",
      description: "Ensure smooth daily operations, be the first point of contact for visitors, and coordinate administrative tasks"
    }
  ];

  // Process steps
  const steps = [
    {
      title: "Application",
      description: "Complete our online application form with your details and area of interest",
      icon: "📝"
    },
    {
      title: "Initial Screening",
      description: "Brief assessment of your skills and alignment with our mission",
      icon: "🔍"
    },
    {
      title: "Onboarding",
      description: "Orientation to our mission, values, and working procedures",
      icon: "🚪"
    },
    {
      title: "20-Day Probation",
      description: "Initial period of engagement with defined tasks and feedback",
      icon: "⏱️"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What kind of projects does SWET work on?",
      answer: "We work on education initiatives, welfare programs, skill development, and social issues like unemployment and inequality. Our projects range from community awareness campaigns to educational workshops and welfare distribution programs."
    },
    {
      question: "How much time commitment is required?",
      answer: "The time commitment varies by role and project. We have flexible options to accommodate different schedules, typically ranging from 5-15 hours per week. We understand that volunteers have other commitments and work with you to find a suitable schedule."
    },
    {
      question: "Is there any fee to join as a volunteer?",
      answer: "Yes, there is a registration fee of Rs. 210 to join as a volunteer. This fee supports our administrative costs and resources needed to make a meaningful impact. This fee is non-refundable as mentioned in our refund policy."
    },
    {
      question: "Can I join from anywhere in India?",
      answer: "Yes, many of our positions are remote-friendly, allowing participation from anywhere in India. We leverage digital tools for collaboration, making it possible for volunteers across the country to contribute meaningfully."
    },
    {
      question: "What qualifications do I need to volunteer?",
      answer: "While specific roles may require certain skills, our main requirements are commitment, enthusiasm, and alignment with our mission. We welcome volunteers from diverse backgrounds and provide necessary training for your role."
    },
    {
      question: "How is the stipend determined?",
      answer: "Stipends are target-based, not monthly. The amount depends on your role, performance, and project outcomes. Clear details are shared upfront before starting any project to ensure transparency."
    },
    {
      question: "Will I receive a certificate after volunteering?",
      answer: "Yes, all volunteers receive an official experience certificate after completing their term, regardless of whether they continue with us. The certificate details your role, duration, and key contributions."
    }
  ];

  // Container variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-brand-600 text-white pt-32 md:pt-30 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Mission</h1>
              <p className="text-xl opacity-90 italic mb-6">
                "Be the Change You Want to See in the World"
              </p>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Become part of Shwetansh Welfare and Educational Trust to make a meaningful impact 
                while developing valuable skills and experiences for your future.
              </p>
              
              <div className="mt-8">
                <a 
                  href="https://forms.gle/TqivSGspxzNXbMDXA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-brand-600 px-6 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-gray-100 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Section - Fixed responsive issues */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Our Impact</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join a community of changemakers working to create positive social change across India
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center max-w-5xl mx-auto">
              <div className="p-3 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-brand-600 mb-2">100+</div>
                <p className="text-sm md:text-base text-gray-700">Volunteers Nationwide</p>
              </div>
              <div className="p-3 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-brand-600 mb-2">10+</div>
                <p className="text-sm md:text-base text-gray-700">Active Projects</p>
              </div>
              <div className="p-3 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-brand-600 mb-2">100+</div>
                <p className="text-sm md:text-base text-gray-700">Lives Impacted</p>
              </div>
              <div className="p-3 md:p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl md:text-4xl font-bold text-brand-600 mb-2">10+</div>
                <p className="text-sm md:text-base text-gray-700">Indian States Reached</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section (Why Join Us) */}
        <section className="py-16 bg-gray-50" id="benefits">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Why Join Us?</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Joining</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Be part of something meaningful while building your future
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {benefitsList.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border-t-4 border-brand-500 transition-all"
                >
                  <div className="text-4xl mb-4 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
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
              className="mt-16 bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Senior Manager Position</h3>
                <p className="text-brand-600 font-medium">Leadership Opportunity</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-brand-500 font-bold">1.</div>
                  <p>Work with us as the Senior Manager of S.W.E.T. and develop advanced leadership skills</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-brand-500 font-bold">2.</div>
                  <p>Lead multiple projects including coordination across all departments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-brand-500 font-bold">3.</div>
                  <p>Serve as the first point of contact with organizational leadership</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-brand-500 font-bold">4.</div>
                  <p>Gain invaluable experience in nonprofit management and social impact</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-brand-50 rounded-lg">
                <p className="font-semibold">GROWTH OPPORTUNITY:</p>
                <p>Outstanding performance can lead to promotion to Regional Manager for your geographic area, with expanded responsibilities and impact.</p>
              </div>
            </motion.div>

            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="py-4 px-4 md:py-6 md:px-8 bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl text-white inline-block">
                  <p className="text-base md:text-lg font-semibold mb-2">
                    Plus: Performance-based Stipend up to ₹70,000<sup>*</sup>
                  </p>
                  <p className="text-xs text-white/70">*Based on role, responsibilities and target achievement</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments Section (Join Our Team) - Fixed responsive grid */}
        <section className="py-16 bg-white" id="departments">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Join Our Team</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Departments</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Are you passionate about youth empowerment, social welfare, education, and skill development? 
                This is your chance to make a real impact!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-brand-50 p-6 rounded-xl hover:shadow-lg transition-all group hover:bg-brand-500"
                >
                  <div className="text-4xl mb-4 group-hover:text-white">{dept.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-white">{dept.name}</h3>
                  <p className="text-gray-600 text-sm group-hover:text-white">{dept.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Join our team to gain valuable experience, enhance your skills, and contribute to meaningful social causes.
                Our volunteering opportunities provide real-world experience and exposure to social service activities.
              </p>
              <a href="https://forms.gle/TqivSGspxzNXbMDXA" target="_blank" rel="noopener noreferrer">
                <button className="bg-brand-500 text-white px-8 py-4 rounded-full hover:bg-brand-600 transition-colors font-bold shadow-lg">
                  Apply Now
                </button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Process Section (How We Work) - Fixed responsive process steps */}
        <section className="py-16 bg-gray-50" id="process">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">How We Work</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From application to becoming a valued team member, here's what to expect
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md z-10 relative">
                    <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-3xl mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-brand-200">
                      <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-brand-400"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Work Process Details - Fixed responsive grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-brand-100">Our Work Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-500 text-lg">✓</span>
                    <p>Clear communication is maintained throughout the project lifecycle</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-500 text-lg">✓</span>
                    <p>Focused and goal-oriented workflow with defined milestones</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-500 text-lg">✓</span>
                    <p>Each member receives specific instructions and achievable targets</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-500 text-lg">✓</span>
                    <p>Regular check-ins and feedback sessions to ensure progress</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-500 text-lg">✓</span>
                    <p>Collaborative tools for seamless remote teamwork</p>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-brand-100">Stipend Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-brand-500">1.</span>
                    <div>
                      <h4 className="font-medium">Target-Based Structure</h4>
                      <p className="text-gray-600 text-sm">Stipends are performance-based, not fixed monthly payments</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-brand-500">2.</span>
                    <div>
                      <h4 className="font-medium">Complete Transparency</h4>
                      <p className="text-gray-600 text-sm">All targets and associated stipend amounts are clearly defined upfront</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-brand-500">3.</span>
                    <div>
                      <h4 className="font-medium">Performance-Based Rewards</h4>
                      <p className="text-gray-600 text-sm">Stipends are directly tied to successful completion of assigned targets</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-brand-500">4.</span>
                    <div>
                      <h4 className="font-medium">Timely Processing</h4>
                      <p className="text-gray-600 text-sm">Payments processed promptly upon target verification</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Probationary Period - Fixed responsive grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 bg-white border border-brand-100 p-6 md:p-8 rounded-xl max-w-3xl mx-auto"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Probationary Period</h3>
                <p className="text-brand-500">Every new joiner goes through a 20-day probationary period</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-brand-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h4 className="font-semibold mb-2">20-Day Period</h4>
                  <p className="text-sm text-gray-600">A mutually beneficial period for evaluation and adjustment</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h4 className="font-semibold mb-2">Experience Certificate</h4>
                  <p className="text-sm text-gray-600">Guaranteed certificate regardless of continuation decision</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-brand-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h4 className="font-semibold mb-2">Learn & Contribute</h4>
                  <p className="text-sm text-gray-600">Gain valuable skills while making meaningful contributions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section - Fixed responsive grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Volunteer Stories</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Hear From Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                What our volunteers say about their experience with SWET
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote: "Working with SWET has been an incredible learning experience. I've developed leadership skills I never knew I had while contributing to meaningful social change.",
                  name: "Priya Sharma",
                  role: "Content Department",
                  location: "Delhi"
                },
                {
                  quote: "The supportive environment at SWET has helped me grow both professionally and personally. The projects have real impact, and the experience looks great on my resume!",
                  name: "Rahul Mehra",
                  role: "Technical Department",
                  location: "Bangalore"
                },
                {
                  quote: "SWET provided me with hands-on experience in social work while accommodating my college schedule. The skills I've gained have been invaluable for my career development.",
                  name: "Aisha Patel",
                  role: "Marketing Department",
                  location: "Mumbai"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl shadow-md"
                >
                  <div className="text-brand-500 text-4xl mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50" id="faq">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Frequently Asked Questions</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about joining our team
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section (Get In Touch) - Fixed responsive grid */}
        <section className="py-16 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 font-medium text-sm mb-4">Get In Touch</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions? Want to join? We'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Details</h3>
                <div className="space-y-6">
                  {/* Contact items with better mobile spacing */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 p-2 md:p-3 rounded-full text-white flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold">WhatsApp</h4>
                      <a href="https://wa.me/918989973328" className="text-brand-600 hover:underline break-words">+91 8989973328</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-tr from-purple-600 via-pink-500 to-[#2196f3] p-2 md:p-3 rounded-full text-white flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold">Instagram</h4>
                      <a href="https://instagram.com/shwetansh_welfare_educational" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline break-words">@shwetansh_welfare_educational</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-red-500 p-2 md:p-3 rounded-full text-white flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:shwetanshwelfareeducational@gmail.com" className="text-brand-600 hover:underline break-words">shwetanshwelfareeducational@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500 p-2 md:p-3 rounded-full text-white flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.5 14.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm9 1.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm-2-9.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5.672-1.5 1.5-1.5 1.5.671 1.5 1.5z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold">Our Office</h4>
                      <p className="text-gray-700 break-words">Deepshika Bhawan, Civil Lines, Shahdol-484001 (M.P)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Ready to Join?</h3>
                <p className="text-gray-700 mb-6">
                  Take the first step toward making a difference while developing valuable skills 
                  and experiences. Our application process is simple and straightforward.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-100 text-brand-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Complete the Application</h4>
                      <p className="text-sm text-gray-600">Fill out our online form with your details and interests</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-100 text-brand-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Initial Communication</h4>
                      <p className="text-sm text-gray-600">We'll reach out via WhatsApp to discuss next steps</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-100 text-brand-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <h4 className="font-medium text-gray-900">Registration & Onboarding</h4>
                      <p className="text-sm text-gray-600">Complete registration and begin your journey with us</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://forms.gle/TqivSGspxzNXbMDXA" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full bg-brand-600 text-white text-center py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA - Fixed padding for mobile */}
        <section className="py-16 md:py-20 bg-brand-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our community of changemakers today and be part of something bigger than yourself.
            </p>
            <a 
              href="https://forms.gle/TqivSGspxzNXbMDXA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-brand-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Start Your Journey
            </a>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default JoinUs;
