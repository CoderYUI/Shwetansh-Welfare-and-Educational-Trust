// src/components/OurTeamPage.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

// You might want to define team member data here or fetch it from an API
const leadershipTeam = [
  {
    name: "Vansh Aggarwal",
    title: "Chief Executive Officer (CEO)",
    image: "/vansh.jpg", // Placeholder image
    bio: "Vansh Aggarwal is a dynamic tech leader known for driving innovation and shaping strategic growth. His vision plays a key role in steering SWET’s direction."
  },
  {
    name: "Manishka Gupta",
    title: "Chief Marketing Officer (CMO)",
    image: "/manishka.jpg", // Placeholder image
    bio: "Manishka Gupta is a marketing strategist who strengthens brand presence and builds strong customer connections."
  },
  {
    name: "Anushka Gora",
    title: "Human Resource (HR)",
    image: "/anushka.jpg",
    bio: "Anushka Gora leads HR initiatives at SWET, fostering a culture of collaboration, growth, and employee well-being."
  }
];

const generalTeam = [
  {
    name: "Bidhi Sarma",
    title: "Chief Operations Officer (COO)",
    image: "/bidhi.jpg", // Placeholder image
    bio: "Bidhi Sarma is an operations expert who ensures seamless processes and drives efficiency across SWET’s core functions."
  },
  {
    name: "Bhaskar Ojha",
    title: "Chief Technical Officer (CTO)",
    image: "/bhaskar.jpg",
    bio: "Bhaskar Ojha is a tech innovator who leads SWET’s technical strategy and drives cutting-edge development across platforms."
  },
  {
    name: "Om Bilaiya",
    title: "Business Analyst",
    image: "/om.jpg",
    bio: "Om Bilaiya analyzes business data and trends to support strategic decisions and enhance SWET’s operational efficiency."
  },
  {
    name: "Gaurvi Sharan Nigam",
    title: "Head of Sales",
    image: "/gaurvi.jpg",
    bio: "Gaurvi leads SWET’s sales strategy, building client relationships and boosting revenue growth."
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
        <a
          href="/join-us"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-full shadow-soft hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Apply Now
          </button>
        </a>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default OurTeamPage;