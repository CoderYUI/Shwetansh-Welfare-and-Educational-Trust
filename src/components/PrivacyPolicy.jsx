import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop'; // ✅ Import ScrollToTop

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Privacy Policy</h1>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">1. Introduction</h2>
                <p className="text-gray-700">
                  At Shwetansh Welfare and Educational Trust ("we", "us", "our"), we are 
                  committed to protecting your personal information and your right to 
                  privacy. This Privacy Policy explains how we collect, use, disclose, and 
                  safeguard your information when you visit our website: 
                  https://shwetanshwelfaretrust.vercel.app ("Platform"). By accessing or 
                  using our Platform, you agree to this Privacy Policy and our Terms of Use.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Note:</strong> We currently operate and process personal data only within India.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">2. Information We Collect</h2>
                <p className="text-gray-700 mb-2">
                  We collect personal information when you interact with our services or 
                  communicate with us. This may include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li><strong>Personal Information:</strong> Name, date of birth, gender, address, phone 
                  number, email ID, etc.</li>
                  <li><strong>Sensitive Data (with consent):</strong> Bank account details, payment 
                  information, biometric data (if any), and identity documents.</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, time spent, pages visited.</li>
                  <li><strong>Transactional Data:</strong> Records of donations, services availed, and 
                  communications.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-2">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Provide and manage services</li>
                  <li>Process donations and issue receipts</li>
                  <li>Respond to queries and support requests</li>
                  <li>Send updates about our activities, events, and campaigns</li>
                  <li>Conduct research and analysis to improve our services</li>
                  <li>Comply with legal obligations and safeguard our interests</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">4. Sharing Your Information</h2>
                <p className="text-gray-700 mb-2">
                  We may share your data with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Internal departments for administrative purposes</li>
                  <li>Affiliated NGOs or service partners for program execution</li>
                  <li>Payment gateways and logistics providers</li>
                  <li>Law enforcement or regulatory authorities when required by law</li>
                </ul>
                <p className="text-gray-700 mt-2 font-medium">
                  We do not sell your personal information under any circumstances.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">5. Data Security</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures including encryption, secure 
                  servers, and access controls to protect your data. However, no method of 
                  transmission over the Internet is completely secure. You are responsible 
                  for maintaining the confidentiality of your login credentials.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">6. Data Retention</h2>
                <p className="text-gray-700">
                  We retain your information for as long as necessary to fulfill the purposes 
                  outlined in this policy or as required by law. You may request deletion of 
                  your data, subject to any legal or operational obligations.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">7. Your Rights</h2>
                <p className="text-gray-700 mb-2">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Access, update, or correct your information</li>
                  <li>Withdraw your consent at any time</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p className="text-gray-700 mt-2">
                  You may exercise these rights by contacting our Grievance Officer.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">8. Consent</h2>
                <p className="text-gray-700">
                  By using our Platform or sharing your information, you consent to the 
                  collection, storage, and use of your information as described in this policy. 
                  If you are sharing information of others, you represent that you have the 
                  authority to do so.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">9. Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy periodically. Changes will be posted on 
                  this page, and where appropriate, notified to you via email or other 
                  channels.
                </p>
              </section>
              
              <section className="mb-4">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">10. Grievance Redressal</h2>
                <p className="text-gray-700 mb-2">
                  For questions, complaints, or concerns about this policy or your personal 
                  data, contact:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700"><strong>Grievance Officer:</strong> Mrs. Anushka</p>
                  <p className="text-gray-700"><strong>Designation:</strong> HR</p>
                  <p className="text-gray-700"><strong>Organization:</strong> Shwetansh Welfare and Educational Trust</p>
                  <p className="text-gray-700"><strong>Address:</strong> Deepshika Bhawan, civil lines, Shahdol-484001(M.P)</p>
                  <p className="text-gray-700"><strong>Phone:</strong> 8989973328</p>
                  <p className="text-gray-700"><strong>Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM</p>
                </div>
              </section>
              
              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <ScrollToTop /> {/* ✅ Add ScrollToTop component */}
    </div>
  );
};

export default PrivacyPolicy;
