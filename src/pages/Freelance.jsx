import { Link } from "react-router-dom";

const Freelance = () => {
    return (
      <section id="freelance" className="py-20 px-6 bg-white text-center bg-dot-pattern">
        <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <div className="text-left mb-6">
          <Link to="/" className="text-sm text-gray-600 hover:underline">
            ← Back to Home
          </Link>
        </div>

          <h2 className="text-4xl font-semibold mb-6 text-gray-800">Available for Freelance</h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Need a website, dashboard, or product UI? I help founders and teams bring ideas to life with fast,
            beautiful, responsive frontend experiences using React, Tailwind, and modern web tech.
          </p>
  
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Services I Offer</h3>
          <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 text-left text-gray-700 text-base mb-12">
            <li className="bg-gray-50 rounded p-4 shadow-sm">
              🔧 Custom Frontend Development (React + Tailwind)
            </li>
            <li className="bg-gray-50 rounded p-4 shadow-sm">
              📊 Dashboard Design & Data Visualization
            </li>
            <li className="bg-gray-50 rounded p-4 shadow-sm">
              ⚡ Landing Page Design & Animation
            </li>
            <li className="bg-gray-50 rounded p-4 shadow-sm">
              🛠️ Website Optimization & Responsive Fixes
            </li>
          </ul>
  
          <p className="text-gray-500 mb-6">
            Open to one-time gigs, short-term work, or long-term collaboration.
          </p>
  
          <a
            href="mailto:priyanshunaudiyal1@gmail.com"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Get in Touch →
          </a>
        </div>
      </section>
    );
  };
  
  export default Freelance;
  