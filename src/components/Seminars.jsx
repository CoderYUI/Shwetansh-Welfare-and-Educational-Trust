import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'; // ✅ Import ScrollToTop

const Seminars = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        {/* Hero Section with background that allows navbar to be transparent initially */}
        <section className="bg-brand-600 text-white pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 h-[400px]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Seminars by SWET</h1>
              <p className="text-xl opacity-90 italic mb-6">
                "Enriching Minds, Empowering Futures"
              </p>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Join our comprehensive seminar programs designed to bridge the gap between 
                theoretical knowledge and practical application.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main>
          {/* About SWET Seminars */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Seminars</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  SWET Seminars are designed to enhance learning experiences and prepare participants for 
                  future challenges in their respective fields.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[{
                      title: "Spark Interest",
                      text: "Generate enthusiasm for emerging technologies"
                    },
                    {
                      title: "Practical Knowledge",
                      text: "Equip students with real-world skills"
                    },
                    {
                      title: "Career Awareness",
                      text: "Build awareness about various career paths"
                    },
                    {
                      title: "Expert Interaction",
                      text: "Connect learners with industry professionals"
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
                </div>
                
                <div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Seminar Session" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seminar Modes */}
         <section className="py-12 bg-gray-50">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">Seminar Modes</h2>
             <p className="text-gray-700 mb-10">
               Our seminars are conducted offline, offering two enriching formats led by experienced professionals.
             </p>
         
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Industry Expert Seminar */}
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <h3 className="text-2xl font-semibold mb-4 text-brand-600">Taken by Industry Experts</h3>
                 <ul className="text-left list-disc pl-6 space-y-2 text-gray-700">
                   <li>Live sessions with real-world insights</li>
                   <li>Case studies from working professionals</li>
                   <li>Career-oriented discussions and tips</li>
                   <li>Hands-on practical exposure</li>
                 </ul>
               </div>
         
               {/* SWET Team Seminar */}
               <div className="bg-white p-6 rounded-lg shadow-md">
                 <h3 className="text-2xl font-semibold mb-4 text-brand-600">Taken by SWET Team Experts</h3>
                 <ul className="text-left list-disc pl-6 space-y-2 text-gray-700">
                   <li>Concept-oriented academic sessions</li>
                   <li>Skill-based topic deep dives</li>
                   <li>Preparation for future opportunities</li>
                   <li>Offline participation with certification</li>
                 </ul>
               </div>
         
             </div>
           </div>
         </section>

          {/* Why Attend */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Attend a SWET Seminar?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Gain valuable knowledge and skills to enhance your future
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[{
                  icon: "💡",
                  title: "Gain Industry Insights",
                  description: "Learn about emerging technologies and trends from experts"
                },
                {
                  icon: "👨‍🏫",
                  title: "Learn from Leaders",
                  description: "Interact with professionals who are leading in their fields"
                },
                {
                  icon: "🗣️",
                  title: "Enhance Soft Skills",
                  description: "Develop communication and presentation abilities"
                },
                {
                  icon: "📜",
                  title: "Receive Certification",
                  description: "Add valuable credentials to your academic profile"
                },
                {
                  icon: "🛣️",
                  title: "Explore Career Paths",
                  description: "Discover new professional opportunities and directions"
                },
                {
                  icon: "🤝",
                  title: "Build Connections",
                  description: "Network with like-minded peers and potential mentors"
                }].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who Can Attend */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Can Attend?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our seminars are designed for diverse audiences
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  "School students (Classes 9–12)",
                  "College/University students",
                  "Faculty and educators",
                  "Tech & science enthusiasts",
                  "Individuals seeking professional awareness"
                ].map((audience, index) => (
                  <div
                    key={index}
                    className="bg-brand-50 px-4 py-2 rounded-full"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
                      <span className="text-brand-700 font-medium">{audience}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Vision */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision Through Seminars</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Creating lasting impact through knowledge sharing
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[{
                  icon: "🌉",
                  title: "Bridge Education and Employability",
                  description: "Connect academic learning with real-world job requirements"
                },
                {
                  icon: "🌍",
                  title: "Democratize Knowledge",
                  description: "Make quality education accessible to all, regardless of location"
                },
                {
                  icon: "💫",
                  title: "Encourage Innovation and Mentorship",
                  description: "Foster creativity and provide guidance for future leaders"
                }].map((vision, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg text-center"
                  >
                    <div className="text-3xl mb-3">{vision.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{vision.title}</h3>
                    <p className="text-gray-600 text-sm">{vision.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="bg-brand-600 rounded-lg p-8 max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Our Seminars?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Join our upcoming seminars to enhance your knowledge, skills, and future prospects.
                  Contact us for details about upcoming events.
                </p>
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

export default Seminars;