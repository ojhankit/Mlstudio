import { useState } from "react";

const plansData = [
  { id: 1, name: "Starter Plan", price: "$19/mo", description: "Perfect for individuals or small teams starting with AI solutions.", features: ["Basic AI tools", "Email support", "Up to 5 projects"] },
  { id: 2, name: "Professional Plan", price: "$49/mo", description: "Ideal for growing businesses that need more advanced features.", features: ["All Starter features", "Priority support", "Up to 25 projects", "Advanced analytics"] },
  { id: 3, name: "Master Plan", price: "$99/mo", description: "For enterprises needing full access to AI solutions and dedicated support.", features: ["All Professional features", "Dedicated account manager", "Unlimited projects", "Custom integrations"] },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="w-full flex flex-col items-center bg-black py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 uppercase mb-2">Our Plans</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">Choose the Right Plan</h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto">
          Flexible plans to fit your business needs. Scale as you grow with AI Excellence.
        </p>
      </div>

      {/* Plans Cards */}
      <div className="w-full grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {plansData.map((plan) => {
          const isSelected = selectedPlan === plan.id;
          return (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`flex flex-col p-6 rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 
                ${isSelected ? "bg-white text-black" : "bg-black text-white"}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-3xl font-extrabold mb-4`}>{plan.price}</p>
              <p className="mb-4">{plan.description}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className={`mr-2 ${isSelected ? "text-black" : "text-gray-400"}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-6 py-3 rounded-lg font-semibold transition-colors 
                  ${isSelected ? "bg-black text-white hover:bg-gray-800" : "bg-gray-700 text-white hover:bg-gray-600"}`}
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Plans;
