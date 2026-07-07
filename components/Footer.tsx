"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";


export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("subscribedEmail");
    if (saved) setSubscribed(true);
  }, []);

//   const handleSubscribe = () => {
//     setError("");

//     if (!email || !email.includes("@")) {
//       setError("Please enter a valid email");
//       return;
//     }

//     // localStorage.setItem("subscribedEmail", email);
//     await fetch("/api/subscribe",{

// method:"POST",

// headers:{

// "Content-Type":"application/json"

// },

// body:JSON.stringify({

// email

// })

// });
//     setSubscribed(true);
//     setEmail("");
//   };

     const handleSubscribe = async () => {
  setError("");

  if (!email.trim()) {
    setError("Please enter your email.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setError("Please enter a valid email.");
    return;
  }

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Subscription failed.");
      return;
    }

    localStorage.setItem("subscribedEmail", email);

    toast.success("Successfully subscribed!");
    setEmail("");

  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again.");
  }
};
  return (
    <footer className="relative bg-black text-white px-4 sm:px-6 lg:px-8 w-full py-16 overflow-hidden">

      
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-[#a5880f]/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl animate-ping bottom-10 right-10"></div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
      >

        
        <div>
          <h2 className="text-lg font-semibold mb-3">
            <span className="text-[#a5880f] font-bold">B</span>ackstrap{" "}
            <span className="text-[#a5880f] font-bold">L</span>aw
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Delivering trusted legal knowledge, timely updates, and insightful resources
            to empower students, professionals, and citizens across India.
          </p>

          <div className="mt-4 inline-block border border-[#a5880f] text-[#a5880f] text-xs px-3 py-1 rounded-full">
            Trusted Legal Platform
          </div>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold mb-4 text-[#a5880f]">
            Explore
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">

            <motion.li whileHover={{ x: 5 }}>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </motion.li>

            <motion.li whileHover={{ x: 5 }}>
              <Link href="/top-stories" className="hover:text-white transition">
                Top Stories
              </Link>
            </motion.li>

            <motion.li whileHover={{ x: 5 }}>
              <Link href="/news-update" className="hover:text-white transition">
                News Update
              </Link>
            </motion.li>

            {/* <motion.li whileHover={{ x: 5 }}>
              <Link href="/article" className="hover:text-white transition">
                Articles
              </Link>
            </motion.li>

            <motion.li whileHover={{ x: 5 }}>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </motion.li> */}

            <motion.li whileHover={{ x: 5 }}>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </motion.li>

          </ul>
        </div>

        
        <div>
          <h3 className="text-sm font-semibold mb-4 text-[#a5880f]">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
            <p>
              📍 Flat No.2, First Floor, Harshita Apartment,<br />
              Nawab Yusuf Road, Near DRM Office,<br />
              Prayagraj, Uttar Pradesh, India
            </p>

            <p>📞 +91 9935964832</p>
            <p>✉️contact.backstraplaw@gmail.com</p>
          </div>
        </div>

      </motion.div>

      
      <div className="relative z-10 border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">

        <p>
          © {new Date().getFullYear()} Backstrap Law. All rights reserved.
        </p>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer transition">
            Terms of Service
          </span>
        </div>

      </div>
    </footer>
  );
}