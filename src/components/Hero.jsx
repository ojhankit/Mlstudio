import { useEffect, useState } from "react";

const Hero = () => {
  const handleScrollToSubscription = () => {
    const section = document.getElementById("subscription");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const codeBlocks = [
    `
  from mlstudio import Model, Dataset

  data = Dataset.load("customer_churn")
  model = Model("xgboost")

  model.train(data, epochs=10, metrics=["accuracy", "f1"])
  model.evaluate(test_split=0.2)
  model.deploy(auto_scale=True)
      `,
      `
  from mlstudio.monitoring import Tracker

  tracker = Tracker("churn-predictor")
  tracker.log_metric("accuracy", 0.94)
  tracker.log_latency(23.5)
  tracker.alert_on_drop(threshold=0.85)

  print("Monitoring active ✅")
      `,
      `
  from mlstudio.pipeline import Pipeline

  pipeline = Pipeline()
  pipeline.add_step("clean_data")
  pipeline.add_step("feature_engineering")
  pipeline.add_step("train_model", model="resnet50")

  pipeline.run()
  pipeline.deploy("production")
      `,
  ];

  const [displayedCode, setDisplayedCode] = useState("");
  const [currentBlock, setCurrentBlock] = useState(0);

  useEffect(() => {
    let code = codeBlocks[currentBlock].trim();
    let i = 0;

    const typeInterval = setInterval(() => {
      setDisplayedCode(code.slice(0, i));
      i++;

      // When one block finishes typing
      if (i > code.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          // Clear + move to next block
          setDisplayedCode("");
          setCurrentBlock((prev) => (prev + 1) % codeBlocks.length);
        }, 1500);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentBlock]);

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

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-6 justify-center md:justify-start">
          <button
            onClick={handleScrollToSubscription}
            className="px-6 py-3 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
          >
            Launch Studio
          </button>
          <button className="px-6 py-3 bg-white/40 text-black rounded font-semibold hover:bg-gray-200 transition">
            View Docs
          </button>
        </div>
      </div>

      {/* Right Column: Live Typing Code */}
      <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
        <div className="relative bg-black/70 border border-white/10 rounded-2xl p-6 shadow-2xl font-mono text-[13px] md:text-sm text-green-400 w-[90%] md:w-[500px] overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gray-600/10 to-transparent opacity-30 blur-2xl pointer-events-none" />

          {/* VSCode Top Bar */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Animated Code */}
          <pre className="relative z-10 whitespace-pre-wrap leading-relaxed">
            {displayedCode}
          </pre>

          {/* Blinking Cursor */}
          <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
