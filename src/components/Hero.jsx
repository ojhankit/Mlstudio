import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20">
      
      {/* Left Column: Text Content */}
      <div className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-barlow font-semibold">
          Build Smarter AI Solutions
        </h1>
        <h2 className="text-2xl md:text-3xl font-inter font-light text-gray-300">
          Deploy, scale, and monitor machine learning models effortlessly
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-lg">
          Our platform helps data scientists and engineers accelerate AI deployment,
          streamline workflows, and integrate models with zero hassle.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition">
            Launch Studio
          </button>
        </div>
      </div>

      {/* Right Column: Illustration/Image */}
      {/* <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="/hero-ml.png" // Replace with your illustration
          alt="ML Dashboard Illustration"
          className="w-[90%] md:w-full rounded-2xl shadow-2xl"
        />
      </div> */}

    </section>
  );
};

export default Hero;
