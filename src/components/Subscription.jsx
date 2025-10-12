import { useState } from "react";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);

    // Reset after a short animation
    setTimeout(() => {
      setSubmitted(false);
      setEmail(""); // optional: clear input
    }, 1000);
  };

  return (
    <section id="subscription" className="w-full radial-gradient-bg flex flex-col items-center bg-black py-16 px-4">
      
      {/* Top small title with border */}
      <div className="border border-gray-300 rounded-full px-4 py-1 mb-4">
        <p className="text-sm text-white uppercase">Join With Us</p>
      </div>

      {/* Headings */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
        Flexible AI Plan For
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-4">
        Every Business
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 text-center max-w-xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et metus nec justo convallis tempor.
      </p>

      {/* Email input and button */}
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-black/40"
        />
        <button
          type="submit"
          className={`px-6 py-3 bg-white/40 text-white rounded-lg transition-transform duration-200 
            ${submitted ? "scale-110 bg-black/40" : "hover:bg-white/20"}`}
        >
          {submitted ? "Subscribed!" : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default Subscription;
