"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vahutxt",      // Service ID
        "template_ug0rn06",      // Template ID
        form.current,
        "KvcTwC93M8J0BKYwl"     // Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Clear form
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen text-white px-6 md:px-15">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-emerald-500">Me</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind, a question, or just want to say hello?  
          I’d love to hear from you.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold text-emerald-400">
            Get in Touch
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I’m always open to discussing new opportunities, creative ideas,
            or collaborations. Feel free to reach out through any of the
            channels below.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Mail className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-200">hasib.gub221@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Phone className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-gray-200">+880 1570265433</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <MapPin className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-200">Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-8 shadow-xl space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold
                       bg-gradient-to-r from-emerald-500 to-green-400 text-black"
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
