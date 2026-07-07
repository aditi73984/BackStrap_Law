"use client";

import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories";

import { motion } from "framer-motion";

export default function TopStories() {
    const featuredStory = stories.find((story) => story.featured);


  return (
    <main className="relative min-h-screen px-4 sm:px-6 lg:px-8 w-full py-20 overflow-hidden">

      
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[#a5880f]/10 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl animate-ping bottom-10 right-10"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#a5880f]/5 rounded-full blur-2xl animate-bounce top-1/2 left-1/3"></div>
      </div>

      <Link href={`/stories/${featuredStory?.slug}`}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#a5880f] mb-6">
            Top Stories
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore the most important legal developments, landmark judgments,
            and trending stories shaping the legal landscape.
          </p>
        </motion.div>
      </Link>
      
      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

        
        <div className="space-y-10">

         
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden bg-black text-white shadow-xl group cursor-pointer"
          >
            <div className="relative h-[350px]">
              <Image
                src={stories.find((story) => story.featured)?.image || "/images/story1.png"}
                alt="Featured Story"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-0 p-8">
              <p className="text-sm text-[#a5880f] mb-2">Featured Story</p>

              <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#a5880f] transition">
                 {featuredStory?.title}
              </h2>

              <p className="text-gray-300 max-w-xl">
                {featuredStory?.excerpt}
              </p>
            </div>
          </motion.div>

          
          <div className="grid sm:grid-cols-2 gap-8">

            {stories.map((story, index) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
              >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition cursor-pointer"
              >
                
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                
                <p className="text-xs text-[#a5880f] mb-1 font-medium">
                  {story.category}
                </p>

                
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#a5880f] transition">
                  {story.title}
                </h3>

                
                <p className="text-xs text-gray-400 mb-2">
                  {story.date}
                </p>

                
                <p className="text-sm text-gray-600">
                  {story.excerpt}
                </p>

                
                <div className="mt-3 text-sm text-[#a5880f] font-medium">
                  Read Story →
                </div>
                </motion.div>
              </Link>
              ))}

          </div>

        </div>

        
        <div className="space-y-8">

          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-semibold mb-4 text-[#a5880f]">
              Trending Stories
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              {stories.slice(0, 5).map((item, i) => (
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