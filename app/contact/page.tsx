"use client";

import { motion } from "framer-motion";
import { useState } from "react";



const particles = [
  { top: "5%", left: "10%" },
  { top: "15%", left: "80%" },
  { top: "25%", left: "35%" },
  { top: "40%", left: "70%" },
  { top: "55%", left: "15%" },
  { top: "65%", left: "60%" },
  { top: "80%", left: "25%" },
  { top: "90%", left: "85%" },
  { top: "30%", left: "90%" },
  { top: "75%", left: "45%" },
  { top: "12%", left: "50%" },
  { top: "52%", left: "92%" },
  { top: "67%", left: "8%" },
  { top: "84%", left: "62%" },
  { top: "95%", left: "20%" },
  { top: "22%", left: "5%" },
  { top: "48%", left: "40%" },
  { top: "58%", left: "78%" },
  { top: "7%", left: "65%" },
  { top: "88%", left: "50%" },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;

    const data = {
  name: form.name.value,
  email: form.email.value,
  phone: "",
  subject: "",
  message: form.message.value,
};

    try {
      const res = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

      const result = await res.json();

      setLoading(false);

      if (result.success) {
        setSent(true);

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("Server error. Please check your connection.");
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">

     
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-x"></div>

      
      <div className="absolute w-[500px] h-[500px] bg-[#a5880f]/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-ping bottom-10 right-10"></div>

      
      <div className="absolute inset-0 pointer-events-none">
  {particles.map((particle, i) => (
    <span
      key={i}
      className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
      style={{
        top: particle.top,
        left: particle.left,
      }}
    />
  ))}
</div>

     
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0 bg-white/10 backdrop-blur-xl p-12 rounded-3xl shadow-[0_0_60px_rgba(165,136,15,0.3)] border border-white/20"
      >

        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white"
        >
          <h1 className="text-5xl font-bold mb-6 text-[#a5880f]">
            Let’s Connect
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            Whether you're a law student, professional, or someone seeking legal clarity —
            we’re here to help. Drop us a message and our team will respond shortly.
          </p>

          <div className="space-y-5 text-sm text-gray-300">
            <p>📍 Prayagraj, Uttar Pradesh, India</p>
            <p>📞 +91 9935964832</p>
            <p>✉️contact.backstraplaw@gmail.com</p>
          </div>
        </motion.div>

        
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-5"
        >

          
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#a5880f] transition-all"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#a5880f] transition-all"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#a5880f] transition-all"
          />

          
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm"
            >
              ❌ {error}
            </motion.div>
          )}

          
          {sent && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-green-400 text-sm"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}

          
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-[#a5880f] text-black font-semibold text-lg shadow-lg hover:shadow-[0_0_20px_#a5880f] transition-all duration-300"
          >
            {loading
              ? "Sending..."
              : sent
              ? "Sent ✅"
              : "Send Message"}
          </motion.button>

        </motion.form>
      </motion.div>
    </main>
  );
}