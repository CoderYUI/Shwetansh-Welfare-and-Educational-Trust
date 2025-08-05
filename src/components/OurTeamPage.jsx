// src/components/OurTeamPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// You might want to define team member data here or fetch it from an API
const leadershipTeam = [
  {
    name: "Dr. Anya Sharma",
    title: "Chief Executive Officer (CEO)",
    image: "https://via.placeholder.com/150/60a5fa/ffffff?text=CEO", // Placeholder image
    bio: "Dr. Sharma brings over 20 years of experience in tech leadership, driving innovation and strategic growth. Her vision has been instrumental in shaping SWET's direction."
  },
  {
    name: "Mr. Raj Patel",
    title: "Chief Financial Officer (CFO)",
    image: "https://via.placeholder.com/150/3b82f6/ffffff?text=CFO", // Placeholder image
    bio: "Mr. Patel is a seasoned financial expert with a strong background in corporate finance and investment. He ensures the robust financial health and sustainable growth of SWET."
  },
  {
    name: "Ms. Lena Singh",
    title: "Chief Marketing Officer (CMO)",
    image: "https://via.placeholder.com/150/2563eb/ffffff?text=CMO", // Placeholder image
    bio: "Ms. Singh is a dynamic marketing leader, expert in digital strategy and brand development. She spearheads SWET's market presence and engagement initiatives."
  }
];

const generalTeam = [
  {
    name: "Ahmed Khan",
    title: "Lead Developer",
    image: "https://via.placeholder.com/100/eff6ff/1e3a8a?text=AK",
    bio: "Specializes in full-stack development and scalable architectures."
  },
  {
    name: "Priya Devi",
    title: "UI/UX Designer",
    image: "https://via.placeholder.com/100/eff6ff/1e3a8a?text=PD",
    bio: "Crafts intuitive and beautiful user experiences."
  },
  {
    name: "Chris Evans",
    title: "Content Strategist",
    image: "https://via.placeholder.com/100/eff6ff/1e3a8a?text=CE",
    bio: "Develops engaging and informative content for all platforms."
  },
  {
    name: "Sarah Lee",
    title: "Community Manager",
    image: "https://via.placeholder.com/100/eff6ff/1e3a8a?text=SL",
    bio: "Fosters a vibrant and supportive community around our products."
  },
];

function OurTeamPage() {
  return (
    <div className="font-poppins bg-brand-50 min-h-screen">
      <Navbar />
      {/* Hero Section for Team Page */}
      <section className="bg-gradient-to-r from-brand-500 to-brand-700 text-white pt-40 md:pt-30 text-center py-20 px-4 shadow-soft">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Meet the Minds Behind SWET</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Our diverse team of experts is dedicated to innovation, excellence, and creating impactful learning experiences for you.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-brand-800 text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 p-8 text-center flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-brand-300"
              />
              <h3 className="text-2xl font-semibold text-brand-700 mb-2">{member.name}</h3>
              <p className="text-lg text-accent-700 font-medium mb-4">{member.title}</p>
              <p className="text-gray-600 leading-relaxed text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* General Team Section */}
      <section className="bg-brand-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-brand-800 text-center mb-12">Our Dedicated Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {generalTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 p-6 text-center flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-accent-300"
                />
                <h3 className="text-xl font-semibold text-brand-600 mb-1">{member.name}</h3>
                <p className="text-md text-gray-500 mb-3">{member.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-brand-800 mb-6">Join Our Growing Team!</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          We are always looking for passionate and talented individuals to contribute to our mission. Explore career opportunities with SWET.
        </p>
        <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-full shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          View Open Positions
        </button>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default OurTeamPage;