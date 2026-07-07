"use client";

import { stories } from "@/data/stories";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  
  const featuredStory = stories.find((story) => story.featured);

  return (
    <main>

    
    <motion.section
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className="min-h-[90vh] bg-[#F8F5F0] flex items-center px-4 sm:px-6 lg:px-8 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] w-full mt-2">

        
        <div className="flex flex-col justify-center pr-10 mb-2">

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm mb-6 w-fit"
          >
            Back Strap Law – Your Legal Companion
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black"
          >
            Empowering India's{" "}
            <span className="text-[#a5880f]">Legal Minds</span> <br />
            with{" "}
            <span className="underline decoration-4 decoration-[#a5880f] underline-offset-4">
              Knowledge,
            </span>{" "}
            Resources & Insights
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-gray-600 max-w-lg mb-8 text-lg"
          >
            A platform for law students and professionals delivering
            reliable legal resources and insights.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex gap-4"
          >
            
            {/* <button
              onClick={() =>
                document
                  .getElementById("resources")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-black text-white rounded-full 
                        hover:bg-[#a5880f] hover:text-black 
                        transition-all duration-300"
            >
              Explore Resources
            </button>

           
            <button
              onClick={() =>
                document
                  .getElementById("updates")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 border border-[#a5880f] text-[#a5880f] rounded-full 
                        hover:bg-[#a5880f] hover:text-black 
                        transition-all duration-300"
            >
              View Top Stories
            </button> */}

            <Link href="/news-update">
  <button
    className="px-6 py-3 bg-black text-white rounded-full
               hover:bg-[#a5880f] hover:text-black
               transition-all duration-300"
  >
    Explore Resources
  </button>
</Link>


<Link href="/top-stories">
  <button
    className="px-6 py-3 border border-[#a5880f] text-[#a5880f] rounded-full
               hover:bg-[#a5880f] hover:text-black
               transition-all duration-300"
  >
    View Top Stories
  </button>
</Link>
          </motion.div>

        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex items-center justify-center lg:justify-end mt-2"
        >
          <Image
  src="/images/logo-small.png"
  alt="Backstrap Law"
  width={320}
  height={320}
  priority
  loading="eager"
  style={{
    width: "220px",
    height: "auto",
  }}
/>
        </motion.div>

      </div>
    </motion.section>

      
      <section id="updates" className="px-4 sm:px-6 lg:px-8 w-full py-20 bg-white text-black">

        
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#a5880f]">Top Stories</h2>

          <Link
            href="/top-stories"
            className="text-sm text-[#a5880f] hover:underline"
          >
            View more →
          </Link>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">

          <Link href={`/stories/${featuredStory?.slug}`}>
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer">

              <Image
                src={featuredStory?.image || "/images/placeholder.jpg"}
                alt={featuredStory?.title || "Featured Story"}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 p-6">
                <p className="text-sm text-[#a5880f] mb-2">
                  {featuredStory?.category}
                </p>

                <h3 className="text-xl font-semibold leading-snug text-white">
                  {featuredStory?.title}
                </h3>

                <p className="text-sm text-gray-300 mt-2">
                  {featuredStory?.excerpt}
                </p>
              </div>

            </div>
          </Link>
                    
          <div className="flex flex-col gap-6">

            {stories.slice(0, 4).map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
              >
                <div className="flex gap-4 items-start p-4 rounded-xl border border-gray-200 hover:border-[#a5880f] hover:shadow-md transition-all cursor-pointer">
                  <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-sm leading-snug text-black hover:text-[#a5880f] transition">
                    {story.title}
                  </p>
                </div>
              </Link>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}

