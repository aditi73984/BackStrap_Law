"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ArticleType {
  title: string;
  desc: string;
  date: string;
  category: string;
}

export default function Article() {
  const allArticles: ArticleType[] = [
    {
      title: "The Evolution of Constitutional Law in India",
      desc: "An in-depth analysis of constitutional developments and landmark amendments shaping Indian democracy.",
      date: "Jan 20, 2026",
      category: "Constitutional",
    },
    {
      title: "Criminal Justice System: Challenges & Reforms",
      desc: "Exploring the structural challenges in India's criminal justice system and possible reforms.",
      date: "Jan 18, 2026",
      category: "Criminal",
    },
    {
      title: "Intellectual Property Rights in Digital Era",
      desc: "Understanding copyrights, patents, and trademarks in the age of digital transformation.",
      date: "Jan 15, 2026",
      category: "IPR",
    },
    {
      title: "Role of Judiciary in Strengthening Democracy",
      desc: "Judicial activism, accountability, and its role in democratic balance.",
      date: "Jan 12, 2026",
      category: "Judiciary",
    },
    {
      title: "Fundamental Rights vs Duties",
      desc: "Balancing citizen rights with responsibilities in modern India.",
      date: "Jan 10, 2026",
      category: "Constitutional",
    },
    {
      title: "Cyber Crimes in India",
      desc: "Legal framework and preventive measures against cyber threats.",
      date: "Jan 08, 2026",
      category: "Criminal",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const filteredArticles =
    selectedCategory === "All"
      ? allArticles
      : allArticles.filter((a) => a.category === selectedCategory);

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <main className="relative min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 overflow-hidden">

      
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[#a5880f]/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl animate-ping bottom-10 right-10"></div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#a5880f] mb-6">
          Legal Articles
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore detailed legal research, expert opinions, and deep analysis.
        </p>
      </motion.div>

      
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {["All", "Constitutional", "Criminal", "IPR", "Judiciary"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(4); 
            }}
            className={`px-5 py-2 rounded-full border transition ${
              selectedCategory === cat
                ? "bg-[#a5880f] text-black border-[#a5880f]"
                : "border-[#a5880f] text-[#a5880f] hover:bg-[#a5880f] hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 relative rounded-3xl overflow-hidden bg-black text-white shadow-xl"
      >
        <div className="h-[300px] bg-gradient-to-br from-black to-gray-800"></div>

        <div className="absolute bottom-0 p-8">
          <p className="text-sm text-[#a5880f] mb-2">Featured Article</p>
          <h2 className="text-2xl md:text-3xl font-bold">
            The Future of Legal Education in India
          </h2>
        </div>
      </motion.div>

      
      <div className="grid md:grid-cols-2 gap-10">
        {visibleArticles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl transition"
          >
            <p className="text-xs text-[#a5880f] mb-2 font-medium">
              {article.category}
            </p>

            <h3 className="text-xl font-semibold mb-3 group-hover:text-[#a5880f]">
              {article.title}
            </h3>

            <p className="text-xs text-gray-400 mb-3">
              {article.date}
            </p>

            <p className="text-sm text-gray-600">
              {article.desc}
            </p>

            <div className="mt-4 text-sm text-[#a5880f] font-medium">
              Read Full Article →
            </div>
          </motion.div>
        ))}
      </div>

      
      {visibleCount < filteredArticles.length && (
        <div className="flex justify-center mt-16">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.08 }}
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="px-10 py-3 bg-black text-white rounded-full hover:bg-[#a5880f] hover:text-black transition"
          >
            Load More
          </motion.button>
        </div>
      )}

    </main>
  );
}