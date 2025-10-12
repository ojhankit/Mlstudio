import { useState, useEffect } from "react";

const newsData = [
  {
    id: 1,
    title: "AI Revolutionizes Healthcare Diagnostics",
    image:
      "https://images.unsplash.com/photo-1679083216051-aa510a1a2c0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
    description:
      "AI-driven tools are transforming medical imaging, offering faster, more accurate diagnostics that support doctors in saving lives.",
  },
  {
    id: 2,
    title: "Generative AI Sets New Creativity Benchmarks",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    description:
      "Generative AI is pushing the boundaries of art and design, with tools that assist creators in producing unique, high-quality content.",
  },
  {
    id: 3,
    title: "Ethical AI: The Next Frontier in Innovation",
    image:
      "https://plus.unsplash.com/premium_photo-1680700103864-ee1e7575b78f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdwdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    description:
      "As AI continues to expand, ethical considerations become critical. Experts call for transparent and fair AI systems worldwide.",
  },
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedNews ? "hidden" : "auto";
  }, [selectedNews]);

  return (
    <section className="w-full flex flex-col items-center bg-black text-white py-16 px-6">

      <div className="w-full max-w-6xl flex flex-row justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Latest AI News</h2>
        <button className="text-white hover:text-gray-400 transition">
          View All →
        </button>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900/30 transition-all"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-84 object-cover"
            />
            <div className="p-5 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {news.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {news.description}
              </p>
              <button
                onClick={() => setSelectedNews(news)}
                className="text-white text-sm hover:text-gray-400 transition self-start"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          <div className="bg-gray-900 max-w-lg w-full rounded-2xl p-6 relative text-white">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-72 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-3 text-white">
              {selectedNews.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedNews.description}
              <br />
              <br />
              In a rapidly evolving tech landscape, AI continues to influence
              industries — from creative design and automation to medicine and
              climate solutions.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;
