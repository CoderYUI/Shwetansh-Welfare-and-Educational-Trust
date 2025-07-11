const Seminars = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-5 rounded-3xl transform -rotate-1"></div>
          <div className="relative z-10 py-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-6">
              🎓 Seminars by SWET
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 font-light italic">
              Enriching Minds, Empowering Futures
            </p>
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-16">
          {/* About SWET Seminars */}
          <section className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-white rounded-2xl transform rotate-1 opacity-50"></div>
            <div className="relative bg-white rounded-xl shadow-xl border border-blue-100 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
                About SWET Seminars
              </h2>
              <p className="text-blue-700 mb-8 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                SWET Seminars are designed to bridge the gap between theoretical knowledge and practical application. 
                Our comprehensive seminar programs aim to enhance learning experiences and prepare participants for 
                future challenges in their respective fields.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">Spark interest in emerging technologies</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">Equip students with practical knowledge</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">Build awareness about career paths in STEM and other fields</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">Foster interaction between learners and real-world experts</span>
                </div>
              </div>
            </div>
          </section>

          {/* Seminar Modes */}
          <section className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                Seminar Modes
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Online Seminars */}
              <article className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-xl shadow-xl border border-blue-100 p-8 h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                      <span className="text-2xl">🧑‍💻</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">Online Seminars</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-blue-700">Seamless participation from anywhere in India</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-blue-700">Interactive Q&A and live discussions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-blue-700">Participation certificates for attendees</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-blue-700">Hosted by experienced SWET academic team</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Offline Seminars */}
              <article className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-xl shadow-xl border border-blue-100 p-8 h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                      <span className="text-2xl">🧑‍🏫</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">Offline Seminars</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-blue-700">Face-to-face engagement with professionals</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-blue-700">Practical insights, case studies, and demos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-blue-700">Networking opportunities</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-blue-700">Physical certificates and materials</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Why Attend a SWET Seminar */}
          <section className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-white to-blue-100 rounded-2xl transform -rotate-1 opacity-50"></div>
            <div className="relative bg-white rounded-xl shadow-xl border border-blue-100 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
                Why Attend a SWET Seminar?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
                  <span className="text-blue-700 font-medium">Gain insights into emerging technologies</span>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
                  <span className="text-blue-700 font-medium">Learn from industry leaders</span>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
                  <span className="text-blue-700 font-medium">Enhance soft skills</span>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
                  <span className="text-blue-700 font-medium">Receive certification</span>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-3"></div>
                  <span className="text-blue-700 font-medium">Explore new career paths</span>
                </div>
              </div>
            </div>
          </section>

          {/* Who Can Attend */}
          <section className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                Who Can Attend?
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-xl shadow-xl border border-blue-100 p-8 md:p-12">
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 bg-blue-50 px-6 py-4 rounded-full">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">School students (Classes 9–12)</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 px-6 py-4 rounded-full">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">College/University students</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 px-6 py-4 rounded-full">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">Faculty and educators</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 px-6 py-4 rounded-full">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">Tech & science enthusiasts</span>
                </div>
                <div className="flex items-center space-x-3 bg-blue-50 px-6 py-4 rounded-full">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium">Individuals seeking professional awareness</span>
                </div>
              </div>
            </div>
          </section>

          {/* Our Vision Through Seminars */}
          <section className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                Our Vision Through Seminars
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="group relative">
                <div className="absolute -inset-2 bg-blue-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white rounded-xl shadow-xl border border-blue-100 p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    Bridge Education and Employability
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    Connect academic learning with real-world job requirements
                  </p>
                </div>
              </article>
              
              <article className="group relative">
                <div className="absolute -inset-2 bg-blue-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white rounded-xl shadow-xl border border-blue-100 p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    Democratize Knowledge
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    Make quality education accessible to all, regardless of location
                  </p>
                </div>
              </article>
              
              <article className="group relative">
                <div className="absolute -inset-2 bg-blue-700 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative bg-white rounded-xl shadow-xl border border-blue-100 p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full mb-6">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-4">
                    Encourage Innovation and Mentorship
                  </h3>
                  <p className="text-blue-700 leading-relaxed">
                    Foster creativity and provide guidance for future leaders
                  </p>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Seminars;