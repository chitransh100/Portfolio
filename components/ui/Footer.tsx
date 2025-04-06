// Footer.jsx
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 px-6 py-12 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
            Chitransh Kumar
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            MERN Stack Developer | Passionate about Web2, GenAI, and building
            production-grade full-stack applications.
          </p>
          <div className="flex gap-4 mt-6 text-xl">
            <a
              href="https://github.com/chitransh100"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/chitransh-kumar-1b317325b"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:kumarchitransh12@gmail.com"
              title="Email"
              className="hover:text-purple-400 transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between items-start lg:items-end">
          <div className="text-left lg:text-right">
            <p className="text-lg font-medium">© {year} | Chitransh Kumar</p>
            <p className="text-sm text-gray-400 mt-1">
              CSE @ IIITV-ICD | Developer & Tech Enthusiast
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-6 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg"
            title="Back to Top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* Bottom Attribution */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        Built with <span className="text-red-500">❤️</span> by{" "}
        <span className="text-white font-medium">Chitransh Kumar</span>
      </div>
    </footer>
  );
}
