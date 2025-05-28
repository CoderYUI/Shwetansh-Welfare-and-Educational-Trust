import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const RefundPolicy = () => {
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Refund & Cancellation Policy</h1>
              
              <div className="mb-8">
                <p className="text-gray-700">
                  Thank you for choosing our services. Please review our refund and cancellation policy carefully to understand your rights and responsibilities.
                </p>
              </div>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">1. Refund Eligibility</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Our services require a registration fee of Rs. 210.</li>
                  <li>This fee is strictly non-refundable under any circumstances.</li>
                  <li>Once the payment is successfully made, it confirms your registration and initiates service allocation; 
                  therefore, refunds will not be processed.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">2. Non-Refundable Services</h2>
                <p className="text-gray-700 mb-2">The following are strictly non-refundable:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Registration fees (Rs. 210)</li>
                  <li>Any partially used service or consultation already rendered</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">3. Cancellations</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Cancellation requests must be made in writing via email to our official support team.</li>
                  <li>While you may cancel your request or service, no refund will be issued for the registration fee.</li>
                  <li>There are no cancellation charges apart from the already paid non-refundable registration fee.</li>
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">4. Return or Replace Requests</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>As we offer digital/consultative services, there is no physical product to return or replace.</li>
                  <li>If you face any issues, you may contact our support team for assistance or clarification.</li>
                </ul>
              </section>
              
              <section className="mb-4">
                <h2 className="text-xl font-semibold text-brand-600 mb-3">5. Contact Us</h2>
                <p className="text-gray-700 mb-2">
                  For any questions or concerns regarding our Refund Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700"><strong>Phone:</strong> 8989973328</p>
                  <p className="text-gray-700"><strong>Support Hours:</strong> 24 x 7</p>
                  <p className="text-gray-700"><strong>Email:</strong> shwetanshwelfareeducational@gmail.com</p>
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
    </div>
  );
};

export default RefundPolicy;
