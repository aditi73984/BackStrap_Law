"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  desc: string;
  date: string;
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadBlogs = async () => {
    setLoading(true);

    const res = await fetch(`/api/blog?page=${page}`);
    const data = await res.json();

    setBlogs((prev) => [...prev, ...data.blogs]);
    setHasMore(data.hasMore);

    setLoading(false);
  };

  useEffect(() => {
    loadBlogs();
  }, [page]);

  return (
    <main className="relative min-h-screen px-4 sm:px-6 lg:px-8 w-full py-20 overflow-hidden">

      
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[#a5880f]/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl animate-ping bottom-10 right-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#a5880f]/5 rounded-full blur-2xl animate-bounce top-1/2 left-1/3"></div>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#a5880f] mb-6 tracking-tight">
          Legal Insights & Blogs
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore expert-written articles, legal case studies, and professional
          insights designed for modern legal minds.
        </p>
      </motion.div>

      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer"
          >

           
            <div className="absolute inset-0 bg-gradient-to-br from-[#a5880f]/0 via-[#a5880f]/5 to-[#a5880f]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            
            <div className="relative h-44 bg-gradient-to-br from-black to-gray-800 rounded-lg mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

           
            <p className="text-xs text-gray-400 mb-2 relative z-10">
              {new Date(blog.date).toDateString()}
            </p>

            
            <h3 className="text-lg font-semibold text-black mb-2 relative z-10 group-hover:text-[#a5880f] transition">
              {blog.title}
            </h3>

            
            <p className="text-sm text-gray-600 relative z-10 line-clamp-3">
              {blog.desc}
            </p>

            
            <div className="mt-4 text-sm text-[#a5880f] font-medium relative z-10">
              Read More →
            </div>

          </motion.div>
        ))}

      </div>

      {/* 🔽 SEE MORE */}
      {hasMore && (
        <div className="flex justify-center mt-16">

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.08 }}
            onClick={() => setPage((prev) => prev + 1)}
            disabled={loading}
            className="px-10 py-3 bg-black text-white rounded-full hover:bg-[#a5880f] hover:text-black transition-all duration-300 shadow-xl"
          >
            {loading ? "Loading..." : "See More"}
          </motion.button>

        </div>
      )}

    </main>
  );
}