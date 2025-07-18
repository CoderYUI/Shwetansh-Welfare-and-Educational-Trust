import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'; // ✅ Import ScrollToTop

const Olympiads = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4"> Shwetansh National Olympiads</h1>
              <p className="text-xl opacity-90 italic mb-6">
                "Challenging Minds, Inspiring Excellence"
              </p>
              <p className="text-lg opacity-80 max-w-3xl mx-auto">
                Join our prestigious national-level competitions designed to challenge and 
                nurture young talent across various academic disciplines.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main>
          {/* About SWET Olympiads */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Olympiads</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  SWET National Olympiads are competitive exams designed to identify and nurture talent
                  while encouraging critical thinking and problem-solving abilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[{
                      title: "Discover Talent",
                      text: "Identify hidden potential in students"
                    },
                    {
                      title: "Build Confidence",
                      text: "Help students believe in their abilities"
                    },
                    {
                      title: "Academic Growth",
                      text: "Enhance knowledge beyond school curriculum"
                    },
                    {
                      title: "Future Preparation",
                      text: "Develop skills for academic challenges ahead"
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
                      src="https://images.unsplash.com/photo-1655337690727-5224680c8c07?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Students participating in olympiad"
                      className="w-full h-full object-cover"
                    />

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Olympiad Subjects */}
          <section id="olympiad-subjects" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Olympiad Subjects</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Challenging competitions across key academic disciplines
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Science Olympiad */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-500">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Science Olympiad</h3>
                  <p className="text-gray-600 mb-4">Explore scientific concepts, theories, and their practical applications.</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Physics, Chemistry, and Biology integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Scientific reasoning and experimentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Contemporary scientific developments</span>
                    </li>
                  </ul>
                </div>
                
                {/* Workshops */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-500">
                  <div className="text-xl mb-4">🛠</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Workshops</h3>
                  <p className="text-gray-600 mb-4">
                    Empower students through interactive and practical learning experiences.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Hands-on sessions in coding, AI, and robotics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Soft skills and personality development workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Career guidance and entrepreneurship training</span>
                    </li>
                  </ul>
                </div>
                

                {/* English Olympiad */}
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-500">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">English Olympiad</h3>
                  <p className="text-gray-600 mb-4">Enhance language proficiency, grammar, and comprehension skills.</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Reading comprehension and vocabulary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Grammar and language structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>Creative writing and composition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Olympiad Modes */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Olympiad Modes</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose the mode that works best for you
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Online Olympiads */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-500 p-2 rounded-full text-white text-xl mr-3">
                      💻
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Online Olympiads</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Participate from anywhere with internet access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Secure browser-based testing platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Instant results and performance analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Digital certificates delivered via email</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Flexible scheduling within examination window</span>
                    </li>
                  </ul>
                </div>

                {/* Offline Olympiads */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-brand-500 p-2 rounded-full text-white text-xl mr-3">
                      📝
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Offline Olympiads</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Conducted at designated examination centers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Traditional pen and paper examination format</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Supervised testing environment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Physical certificates and awards distribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">✓</span>
                      <span className="text-gray-700">Recognition ceremonies for top performers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Olympiad Structure */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Olympiad Structure</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A two-level competition to challenge students progressively
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {/* Level 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-600 mb-4">Level 1: Preliminary Round</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>School/center-based examination</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>Multiple-choice questions testing fundamental concepts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>60-minute duration with age-appropriate difficulty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>Top performers advance to Level 2</span>
                    </li>
                  </ul>
                </div>
                
                {/* Level 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-600 mb-4">Level 2: National Finals</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>Centralized examination for qualified students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>Advanced concepts and application-based questions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>90-minute duration with increased complexity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-500 mr-2 font-bold">•</span>
                      <span>National ranking and prestigious awards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section id="contact-section" className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="bg-brand-600 rounded-lg p-8 max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Challenge Yourself?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Join thousands of students across India in participating in our National Olympiads and take the first step toward academic excellence and recognition.
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

export default Olympiads;



