"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { updates } from "@/data/updates";

export default function NewsUpdate() {
  const featuredUpdate = updates.find((update) => update.featured);

  const latestUpdates = [...updates].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

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
          News Updates
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Stay updated with the latest legal news, notifications,
          administrative developments and important announcements.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-12">

        {/* Left Section */}
        <div className="space-y-10">

          {/* Featured Update */}
          {featuredUpdate && (
            <Link href={`/updates/${featuredUpdate.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
              >
                <div className="relative h-[350px]">
                  <Image
                    src={featuredUpdate.image}
                    alt={featuredUpdate.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="text-sm text-[#a5880f] mb-2">
                    {featuredUpdate.category}
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#a5880f] transition">
                    {featuredUpdate.title}
                  </h2>

                  <p className="text-gray-300 max-w-xl">
                    {featuredUpdate.excerpt}
                  </p>
                </div>
              </motion.div>
            </Link>
          )}

          {/* Update Cards */}
          <div className="grid sm:grid-cols-2 gap-8">

            {latestUpdates.map((update, index) => (
              <Link
                key={update.slug}
                href={`/updates/${update.slug}`}
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
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-6">

                    <p className="text-xs text-[#a5880f] font-medium mb-2">
                      {update.category}
                    </p>

                    <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#a5880f] transition">
                      {update.title}
                    </h3>

                    <p className="text-xs text-gray-500 mb-3">
                      {new Date(update.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                      {" • "}
                      {new Date(update.publishedAt).toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {update.excerpt}
                    </p>

                    <div className="mt-4 text-sm text-[#a5880f] font-medium">
                      Read Update →
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
              Latest Updates
            </h3>

            <div className="space-y-4 text-sm">

              {latestUpdates.map((update) => (
                <Link
                  key={update.slug}
                  href={`/updates/${update.slug}`}
                  className="block text-black hover:text-[#a5880f] transition"
                >
                  • {update.title}
                </Link>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}


