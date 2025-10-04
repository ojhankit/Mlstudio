import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaSyncAlt, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket size={40} />,
    title: "Model Deployment",
    description: "Deploy machine learning models with one click to production-ready APIs.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Data Analysis & Visualization",
    description: "Analyze datasets and visualize insights with interactive charts.",
  },
  {
    icon: <FaSyncAlt size={40} />,
    title: "Auto-scaling ML APIs",
    description: "Automatically scale your model APIs to handle traffic spikes.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Collaboration Tools",
    description: "Share projects and collaborate with your team seamlessly.",
  },
];

const Features = () => {
    return (
        <section className="w-full px-6 py-20 flex flex-col items-center bg-black text-white">
            <h2 className="text-4xl md:text-5xl font-barlow font-semibold mb-12 text-center"> Our Features </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10, scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-gray-900/40 backdrop-blur-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:shadow-white/20">
                        <div className="mb-4 text-white">{feature.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
};

export default Features;