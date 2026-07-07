import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { stories } from "@/data/stories";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-[#F8F5F0] py-20">

        <div className="max-w-5xl mx-auto px-6">

          <p className="text-[#a5880f] font-medium mb-2">
            {story.category}
          </p>

          <h1 className="text-5xl font-bold text-black leading-tight">
            {story.title}
          </h1>

          <p className="text-gray-500 mt-4">
            {story.date}
          </p>

        </div>

      </section>

      {/* Featured Image */}

      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-200">

          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

        </div>

      </section>

      {/* Article */}

      <section className="max-w-4xl mx-auto px-6 pb-20">

        {story.content.map((paragraph, index) => (

          <p
            key={index}
            className="text-lg leading-9 text-gray-700 mb-8"
          >
            {paragraph}
          </p>

        ))}

      </section>

      {/* Back */}

      <section className="max-w-4xl mx-auto px-6 pb-20">

        <Link
          href="/top-stories"
          className="inline-flex items-center gap-2 text-[#a5880f] hover:underline"
        >
          ← Back to Top Stories
        </Link>

      </section>

    </main>
  );
}


