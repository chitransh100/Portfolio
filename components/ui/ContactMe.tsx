import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaDownload, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="w-full text-white py-16 px-6 md:px-20">
      <h2 className="text-purple-400 text-center uppercase tracking-wide text-sm mb-2">Contact Me</h2>
      <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1>

      <div className="flex flex-col md:flex-row gap-8 bg-[#161527] p-6 md:p-10 rounded-2xl shadow-lg">
        {/* Left Column - Contact Info */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <div className="flex items-center gap-4">
            <Mail className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">kumarchitransh12@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">India</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">+91 8094733519</p>
            </div>
          </div>

          <hr className="border-zinc-700 my-6" />

          <p className="text-sm text-gray-400">Connect with me</p>
          {/* Add social media icons here if needed */}
           <div className="flex gap-3 mt-4 md:mt-0">
                        <a href="https://github.com/chitransh100" target="_blank" className="p-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:scale-105 transition-all">
                          <FaGithub size={20} />
                        </a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" className="p-3 rounded-full bg-blue-600 text-white hover:scale-105 transition-all">
                          <FaLinkedin size={20} />
                        </a>
                        <a href="https://instagram.com/your-profile" target="_blank" className="p-3 rounded-full bg-pink-500 text-white hover:scale-105 transition-all">
                          <FaInstagram size={20} />
                        </a>
                      </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-zinc-800 p-3 rounded-lg w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email"
                className="bg-zinc-800 p-3 rounded-lg w-full focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Message subject"
              className="bg-zinc-800 p-3 rounded-lg w-full focus:outline-none"
            />
            <textarea
              placeholder="Your message"
              className="bg-zinc-800 p-3 rounded-lg w-full min-h-[150px] resize-none focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
