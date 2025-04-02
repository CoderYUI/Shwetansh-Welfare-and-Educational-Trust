import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              {/* Use actual logo */}
              <img 
                src="/swet_logo.jpg" 
                alt="SWET Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="font-bold text-xl">
                <span className="text-brand-400">Shwetansh</span> Welfare
              </div>
            </div>
            <p className="text-gray-400 mb-2">
              Empowering Youth, Transforming Futures.
            </p>
            <p className="text-gray-400 mb-6">
              Driving positive change through education and social welfare initiatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">📸</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">📱</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl transition-colors">✉️</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-brand-400 transition-colors">Benefits</a></li>
              <li><a href="#departments" className="text-gray-400 hover:text-brand-400 transition-colors">Departments</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-brand-400 transition-colors">Work Process</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-500 p-2 rounded-full">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <p className="text-gray-300">+91 8989973328</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-500 p-2 rounded-full">
                    <span className="text-xl">📸</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Instagram</h4>
                    <p className="text-gray-300">@shwetansh_welfare_educational</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-brand-500 p-2 rounded-full">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300 break-all">shwetanshwelfareeducational@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shwetansh Welfare and Education Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
