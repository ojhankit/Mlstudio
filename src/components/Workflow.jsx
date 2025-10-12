import React from "react";
import { motion } from "framer-motion";
import { FaUpload, FaRobot, FaCloudUploadAlt, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload size={30} />,
    title: "Upload Data",
    description: "Easily upload your datasets in CSV or JSON format."
  },
  {
    icon: <FaRobot size={30} />,
    title: "Train Model",
    description: "Select or configure your machine learning model and start training."
  },
  {
    icon: <FaCloudUploadAlt size={30} />,
    title: "Deploy",
    description: "Deploy trained models as scalable APIs in seconds."
  },
  {
    icon: <FaChartLine size={30} />,
    title: "Monitor",
    description: "Track performance metrics and analyze model outputs in real-time."
  },
];

const Workflow = () => {
  return (
    <section className="w-full py-20 bg-black text-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-barlow font-semibold mb-12 text-center">
        How It Works
      </h2>

      <motion.div
        className="flex gap-8"
        animate={{ x: [0, -1152] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          repeatType: "loop"
        }}
      >

        {[...steps, ...steps, ...steps].map((step, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-gray-900/30 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:shadow-white/20 transition"
          >
            <div className="mb-4 text-white">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Workflow;