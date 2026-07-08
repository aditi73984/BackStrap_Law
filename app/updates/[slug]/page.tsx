import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { updates } from "@/data/updates";

interface UpdatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function UpdatePage({ params }: UpdatePageProps) {
  const { slug } = await params;

  const update = updates.find((item) => item.slug === slug);

  if (!update) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-[#F8F5F0] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <p className="text-[#a5880f] font-medium mb-2">
            {update.category}
          </p>

          <h1 className="text-5xl font-bold text-black leading-tight">
            {update.title}
          </h1>

          <p className="text-gray-500 mt-4">
            Published on{" "}
            {new Date(update.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {" • "}
            {new Date(update.publishedAt).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-200">

          <Image
            src={update.image}
            alt={update.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />

        </div>

      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        {update.content.map((paragraph, index) => (
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
          href="/news-update"
          className="inline-flex items-center gap-2 text-[#a5880f] hover:underline"
        >
          ← Back to News Updates
        </Link>

      </section>

    </main>
  );
}



