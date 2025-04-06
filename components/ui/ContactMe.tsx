"use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setStatusMessage(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatusMessage({ type: "success", text: "Message sent successfully!" });
        form.current?.reset();
        setSending(false);
      },
      (error) => {
        console.error(error.text);
        setStatusMessage({ type: "error", text: "An error occurred while sending the message." });
        setSending(false);
      }
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full text-white py-16 px-6 md:px-20"
    >
      <motion.h2
        className="text-purple-400 text-center uppercase tracking-wide text-sm mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row gap-8 bg-[#161527] p-6 md:p-10 rounded-2xl shadow-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Left Column - Contact Info */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ x: -30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
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
          <div className="flex gap-3 mt-4 md:mt-0">
            {[
              {
                href: "https://github.com/chitransh100",
                icon: <FaGithub size={20} />,
                bg: "bg-black",
              },
              {
                href: "https://www.linkedin.com/in/chitranshkumar2003/",
                icon: <FaLinkedin size={20} />,
                bg: "bg-blue-600",
              },
              {
                href: "https://www.instagram.com/chitransh_2003/",
                icon: <FaInstagram size={20} />,
                bg: "bg-pink-500",
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full text-white transition-all ${item.bg}`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="flex-1"
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <motion.input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="bg-zinc-800 p-3 rounded-lg w-full focus:outline-none"
                whileFocus={{ scale: 1.03 }}
              />
              <motion.input
                type="email"
                name="from_email"
                placeholder="Your email"
                required
                className="bg-zinc-800 p-3 rounded-lg w-full focus:outline-none"
                whileFocus={{ scale: 1.03 }}
              />
            </div>
            <motion.input
              type="text"
              name="subject"
              placeholder="Message subject"
              required
              className="bg-zinc-800 p-3 rounded-lg w-full focus:outline-none"
              whileFocus={{ scale: 1.03 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your message"
              required
              className="bg-zinc-800 p-3 rounded-lg w-full min-h-[150px] resize-none focus:outline-none"
              whileFocus={{ scale: 1.02 }}
            />

            {statusMessage && (
              <p
                className={`text-sm ${
                  statusMessage.type === "success"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {statusMessage.text}
              </p>
            )}

            <motion.button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-300"
              disabled={sending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactMe;
