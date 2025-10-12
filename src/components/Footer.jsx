const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-10 px-6 border-t border-gray-800 flex flex-col items-center">
      <h2 className="text-white text-2xl font-semibold mb-3">MLStudio</h2>
      <p className="text-gray-500 text-center max-w-md mb-6">
        Empowering innovation through intelligent automation and next-gen AI solutions.
      </p>

      <div className="flex space-x-6 mb-6 text-sm">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">Plans</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>

      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} <span className="text-white font-medium">MLStudio</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
