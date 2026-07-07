"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { stories } from "@/data/stories";

export default function TopStories() {
  const featuredStory = stories.find((story) => story.featured);

  return (
    <main className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[#a5880f]/10 rounded-full blur-3xl animate-pulse top-10 left-10" />
        <div className="absolute w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl animate-ping bottom-10 right-10" />
        <div className="absolute w-[300px] h-[300px] bg-[#a5880f]/5 rounded-full blur-2xl animate-bounce top-1/2 left-1/3" />
      </div>

      {/* Heading */}
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

      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

        {/* Left Section */}
        <div className="space-y-10">

          {/* Featured Story */}
          {featuredStory && (
            <Link href={`/stories/${featuredStory.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
              >
                <div className="relative h-[350px]">
                  <Image
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="text-sm text-[#a5880f] mb-2">
                    {featuredStory.category}
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#a5880f] transition">
                    {featuredStory.title}
                  </h2>

                  <p className="text-gray-300 max-w-xl">
                    {featuredStory.excerpt}
                  </p>
                </div>
              </motion.div>
            </Link>
          )}

          {/* Story Cards */}
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
                  className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition cursor-pointer overflow-hidden"
                >
                  <div className="relative h-52">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-[#a5880f] font-medium mb-2">
                      {story.category}
                    </p>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#a5880f] transition">
                      {story.title}
                    </h3>

                    <p className="text-xs text-gray-400 mb-3">
                      {story.date}
                    </p>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {story.excerpt}
                    </p>

                    <div className="mt-4 text-sm text-[#a5880f] font-medium">
                      Read Story →
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>

        {/* Right Section */}
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-100"
          >
            <h3 className="text-lg font-semibold mb-4 text-[#a5880f]">
              Trending Stories
            </h3>

            <div className="space-y-4 text-sm">
              {stories.map((story) => (
                <Link
                  key={story.slug}
                  href={`/stories/${story.slug}`}
                  className="block hover:text-[#a5880f] transition"
                >
                  • {story.title}
                </Link>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
}

