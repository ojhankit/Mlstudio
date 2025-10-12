import { useRef, useState, useEffect } from "react";

const reviewsData = [
  {
    id: 1,
    text: "This AI product changed the way we innovate!",
    name: "John Doe",
    occupation: "CEO, TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "Absolutely amazing results, highly recommend!",
    name: "Jane Smith",
    occupation: "CTO, InnovateX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text: "The team is brilliant and the product works wonders.",
    name: "Alex Johnson",
    occupation: "Product Manager, FutureLabs",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 4,
    text: "A game-changer for our workflows, truly innovative!",
    name: "Maria Gomez",
    occupation: "Lead Engineer, TechWave",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 5,
    text: "Exceptional product with amazing support!",
    name: "Liam Brown",
    occupation: "CTO, CodeCraft",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 6,
    text: "Our productivity skyrocketed thanks to this tool!",
    name: "Emma Wilson",
    occupation: "Product Owner, InnovateLab",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
];

const Reviews = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    const progress = (scrollLeft / scrollWidth) * 100;
    setScrollProgress(progress);
  };

  return (
    <section className="w-full flex flex-col items-center bg-black py-16 px-4">
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center text-center mb-10">
        <div className="text-gray-400 uppercase mb-2">Testimonials</div>
        <h1 className="text-4xl font-bold text-white mb-2">Trusted by Innovators, Driven</h1>
        <h2 className="text-2xl text-gray-300 mb-4">by AI Excellence</h2>
        <p className="text-gray-400 max-w-xl">
          See what our clients say about our AI solutions that empower innovation and efficiency.
        </p>
      </div>

      {/* Reviews Cards - Horizontal Scroll */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex gap-6 overflow-x-auto scrollbar-hide pb-6 cursor-grab"
      >
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="flex-shrink-0 w-80 bg-black rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-300 mb-6 text-lg">“{review.text}”</p>
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <h3 className="text-white font-semibold">{review.name}</h3>
            <p className="text-gray-400 text-sm">{review.occupation}</p>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-4xl h-2 bg-gray-700 rounded-full mt-4">
        <div
          className="h-2 bg-gray-900 rounded-full transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Reviews;
