"use client";

import { motion } from "framer-motion";

export default function NewsUpdate() {
  const news = [
    {
      title: "Supreme Court Issues Notice to 51 Hospitals in Delhi",
      desc: "The Supreme Court has taken cognizance of irregularities in hospital licensing and issued notices.",
      date: "Feb 02, 2026",
      category: "Supreme Court",
    },
    {
      title: "High Court Clarifies Bail Guidelines",
      desc: "New clarifications issued regarding anticipatory bail procedures across states.",
      date: "Jan 30, 2026",
      category: "High Court",
    },
    {
      title: "New Data Protection Bill Discussion Begins",
      desc: "Parliament begins debate on the updated Data Protection framework.",
      date: "Jan 28, 2026",
      category: "Legislation",
    },
    {
      title: "Judicial Appointments System Under Review",
      desc: "Government proposes changes to judicial appointment transparency.",
      date: "Jan 25, 2026",
      category: "Judiciary",
    },
    {
      title: "Landmark Judgment on Freedom of Speech",
      desc: "Supreme Court expands interpretation of Article 19 protections.",
      date: "Jan 22, 2026",
      category: "Constitutional",
    },
  ];

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
        <h1 className="text-4xl md:text-6xl font-bold text-[#a5880f] mb-6">
          Legal News Updates
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Stay updated with the latest developments from courts, legislation,
          and the legal ecosystem across India.
        </p>
      </motion.div>

      
      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

        
        <div className="space-y-8">

          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden bg-black text-white shadow-xl cursor-pointer group"
          >
            <div className="h-[300px] bg-gradient-to-br from-black to-gray-800"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-0 p-8">
              <p className="text-sm text-[#a5880f] mb-2">Featured</p>

              <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#a5880f] transition">
                Supreme Court Expands Digital Privacy Rights
              </h2>

              <p className="text-gray-300 max-w-xl">
                A landmark judgment strengthening digital privacy protections
                under Article 21.
              </p>
            </div>
          </motion.div>

          
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex gap-5 items-start p-5 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition cursor-pointer group"
            >

              
              <div className="w-24 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>

              
              <div>
                <p className="text-xs text-[#a5880f] mb-1 font-medium">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold text-black group-hover:text-[#a5880f] transition">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mb-2">
                  {item.date}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

       
        <div className="space-y-8">

         
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-semibold mb-4 text-[#a5880f]">
              Trending News
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              {news.slice(0, 4).map((item, i) => (
                <p
                  key={i}
                  className="hover:text-[#a5880f] cursor-pointer transition"
                >
                  • {item.title}
                </p>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

    </main>
  );
}