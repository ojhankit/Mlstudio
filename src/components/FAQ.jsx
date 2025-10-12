import { useState } from "react";

const faqData = [
  { id: 1, question: "What is AI Excellence?", answer: "AI Excellence is a platform providing state-of-the-art AI solutions for businesses of all sizes." },
  { id: 2, question: "How can I subscribe?", answer: "You can subscribe via our subscription form by entering your email and clicking Subscribe." },
  { id: 3, question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial to test our AI solutions before committing." },
  { id: 4, question: "Can I upgrade my plan later?", answer: "Absolutely! You can upgrade or downgrade your plan anytime from your account settings." },
  { id: 5, question: "Is my data secure?", answer: "Yes, we use industry-standard encryption and security practices to protect your data." },
  { id: 6, question: "Do you provide support?", answer: "Our support team is available 24/7 to help you with any issues or questions." },
  { id: 7, question: "Can I cancel anytime?", answer: "Yes, you can cancel your subscription at any time without extra fees." },
  { id: 8, question: "Which payment methods are accepted?", answer: "We accept all major credit cards and PayPal for your convenience." },
];

const Accordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className="border border-gray-700 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <div onClick={onClick} className="flex justify-between items-center">
        <h3 className="text-white font-semibold">{question}</h3>
        <span className="text-gray-500 font-bold">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300`}
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="text-gray-400 mt-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id); // Toggle open/close
  };

  return (
    <section className="w-full flex flex-col items-center bg-black py-16 px-4">
      
      {/* Top Row */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="flex flex-col mb-6 md:mb-0">
          <p className="text-sm text-gray-700 uppercase mb-2">Frequently Asked Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Your Questions Answered</h2>
        </div>
      </div>

      {/* FAQ Grid */}
      <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {faqData.map((faq) => (
          <Accordion
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onClick={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
