// Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 px-6 py-10 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-500">
            Chitransh Kumar
          </h2>
          <p className="mt-4 text-gray-400">
            MERN Stack Developer | Passionate about Web2, GenAI, and building production-grade full-stack applications.
          </p>
          <div className="flex gap-4 mt-6 text-xl">
            <a href="https://github.com/chitransh100" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="hover:text-purple-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/chitransh-kumar-1b317325b" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="hover:text-purple-400 transition" />
            </a>
            <a href="#" title="Twitter">
              <FaTwitter className="hover:text-purple-400 transition" />
            </a>
            <a href="mailto:kumarchitransh12@gmail.com" title="Email">
              <FaEnvelope className="hover:text-purple-400 transition" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#experience" className="hover:text-white">Experience</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col justify-between items-start lg:items-end">
          <div className="text-right lg:text-right">
            <p>© {year} | Chitransh Kumar</p>
            <p className="text-sm text-gray-400">CSE @ IIITV-ICD | Developer & Tech Enthusiast</p>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-6 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition"
            title="Back to Top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>

      {/* Bottom Attribution */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        Built with <span className="text-red-500">❤️</span> by <span className="text-white font-medium">Chitransh Kumar</span>
      </div>
    </footer>
  );
}
