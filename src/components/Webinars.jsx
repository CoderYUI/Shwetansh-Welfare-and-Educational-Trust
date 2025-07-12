import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'; // ✅ Import ScrollToTop

const Webinars = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        {/* Hero Section with background that allows navbar to be transparent initially */}
        <section className="bg-brand-600 text-white pt-20 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 h-[400px]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Webinars by SWET</h1>
              <p className="text-xl opacity-90 italic mb-6">
                "Knowledge That Empowers, Connections That Matter"
              </p>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Join our high-impact virtual events focused on delivering practical knowledge, 
                career insights, and industry exposure in an engaging format.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main>
          {/* What Makes SWET Webinars Unique */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes SWET Webinars Unique?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  SWET webinars are short-format, high-impact virtual events focused on delivering practical knowledge, 
                  career insights, and industry exposure in a highly engaging format. These are not just lectures — 
                  they're conversations, interactive sessions, and knowledge-exchange experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[{
                      title: "Expert-Led",
                      text: "Sessions conducted by industry professionals and thought leaders"
                    },
                    {
                      title: "Interactive Format",
                      text: "Engaging discussions rather than one-way presentations"
                    },
                    {
                      title: "Practical Insights",
                      text: "Real-world applications and actionable takeaways"
                    },
                    {
                      title: "Cutting-Edge Topics",
                      text: "Focus on emerging trends and future-ready skills"
                    }].map((item, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg border-l-4 border-brand-500"
                      >
                        <div className="text-brand-600 font-bold mb-1">{item.title}</div>
                        <div className="text-gray-700 text-sm">{item.text}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mt-6 text-gray-700">
                    Whether it's an expert talking about the latest tech revolution, a workshop on career readiness, 
                    or a panel discussion on entrepreneurship — each webinar is tailored to keep you ahead of the curve.
                  </p>
                </div>
                
                <div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Virtual Webinar Session" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modes of Delivery */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Modes of Delivery</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our webinars are delivered in two flexible formats, catering to the convenience and needs of different participants
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Online Webinars */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-500 p-2 rounded-full text-white text-xl mr-3">
                      💻
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Online Webinars</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    These sessions are conducted via digital platforms and are designed for quick access, 
                    wide participation, and strong engagement. They often include live polls, interactive chats, 
                    breakout activities, and digital handouts.
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Online Webinar Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Join from anywhere using a smartphone or computer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Real-time engagement with resource persons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Downloadable materials and slides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Digital certificate of participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Post-session quiz or feedback for active learners</span>
                    </li>
                  </ul>
                </div>

                {/* Offline Webinars */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-500 p-2 rounded-full text-white text-xl mr-3">
                      🏢
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Offline Webinars</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    For institutions and communities that prefer a more personal touch, SWET conducts offline 
                    webinars where our team or invited industry experts visit and conduct the session face-to-face 
                    while using multimedia tools for live presentation and interaction.
                  </p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Offline Webinar Highlights:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Live screening of presentations with interactive Q&A</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Panel discussions, demonstrations, and audience engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Group participation for classroom learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Certificate distribution and on-the-spot feedback</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Opportunity to connect and collaborate in real time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Topics Covered */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Topics Covered in SWET Webinars</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our webinars cover a wide range of relevant and cutting-edge topics
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[{
                  icon: "💡",
                  title: "Innovation in Technology and Startups",
                  description: "Insights into emerging tech trends and the startup ecosystem"
                },
                {
                  icon: "🤖",
                  title: "AI & Machine Learning Simplified",
                  description: "Breaking down complex AI concepts into understandable components"
                },
                {
                  icon: "🌱",
                  title: "Sustainability & Smart Living",
                  description: "Exploring eco-friendly technologies and sustainable practices"
                },
                {
                  icon: "🌐",
                  title: "Digital Careers",
                  description: "Freelancing, tech jobs, remote work opportunities, and future skills"
                },
                {
                  icon: "🧠",
                  title: "Mental Wellness for Youth",
                  description: "Strategies for maintaining mental health in a digital age"
                },
                {
                  icon: "👩‍💻",
                  title: "Women in Tech & STEM",
                  description: "Promoting diversity and inclusion in technology fields"
                },
                {
                  icon: "📝",
                  title: "Resume & Interview Preparation",
                  description: "Practical sessions on crafting standout applications"
                },
                {
                  icon: "🔄",
                  title: "Digital Transformation",
                  description: "How industries are evolving in the digital era"
                },
                {
                  icon: "🚀",
                  title: "Personal Branding",
                  description: "Building your professional identity in the digital space"
                }].map((topic, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl mb-3">{topic.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm">{topic.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-700">
                  Each webinar is aligned with SWET's core mission of empowerment through education — 
                  bringing awareness, direction, and practical tools for self-growth.
                </p>
              </div>
            </div>
          </section>

          {/* Who Should Join */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Join?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our webinars are designed for diverse audiences seeking knowledge and growth
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {[
                  "High school students",
                  "College undergraduates",
                  "Young professionals",
                  "Tech enthusiasts",
                  "Career explorers",
                  "Faculty and educators",
                  "Social activists",
                  "Volunteers",
                  "Lifelong learners"
                ].map((audience, index) => (
                  <div
                    key={index}
                    className="bg-brand-50 px-6 py-3 rounded-full"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
                      <span className="text-brand-700 font-medium">{audience}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Why Choose SWET Webinars?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[{
                    title: "Learn from Anywhere",
                    description: "All you need is an internet connection"
                  },
                  {
                    title: "Engage with Experts",
                    description: "Talk, ask, learn directly from professionals"
                  },
                  {
                    title: "Get Certified",
                    description: "Every session adds value to your resume"
                  },
                  {
                    title: "Affordable and Accessible",
                    description: "Free or low-cost learning for all"
                  },
                  {
                    title: "Updated Topics",
                    description: "We focus on what's new, next, and needed"
                  },
                  {
                    title: "Network and Connect",
                    description: "Build valuable professional relationships"
                  }].map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-brand-500 font-bold">✓</div>
                      <div>
                        <p className="font-semibold">{reason.title}</p>
                        <p className="text-sm text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section id="register-section" className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="bg-brand-600 rounded-lg p-8 max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Register & Connect With Us!</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Ready to join? Secure your spot for upcoming webinars. 
                  Don't miss out on valuable insights and networking opportunities!
                </p>
                                
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Participants Say</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Hear from those who've experienced our webinars
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[{
                  quote: "The AI webinar was eye-opening! Concepts that seemed complex were explained in such a simple way. I've already started applying what I learned.",
                  name: "Rahul Sharma",
                  role: "Computer Science Student"
                },
                {
                  quote: "As someone looking to switch careers, the digital marketing webinar gave me a clear roadmap of skills to develop and resources to explore.",
                  name: "Neha Gupta",
                  role: "Career Changer"
                },
                {
                  quote: "The interactive format made learning enjoyable. The speaker addressed all our questions and even shared industry contacts for further guidance.",
                  name: "Aditya Patel",
                  role: "Engineering Graduate"
                }].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-brand-600 text-4xl mb-4">"</div>
                    <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <ScrollToTop /> {/* ✅ Add ScrollToTop component */}
    </div>
  );
};

export default Webinars;
