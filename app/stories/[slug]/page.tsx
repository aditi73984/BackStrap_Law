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

  const published = new Date(story.publishedAt);

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}

      <section className="bg-[#F8F5F0] border-b border-gray-200 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <Link
            href="/top-stories"
            className="inline-flex items-center gap-2 text-[#a5880f] hover:underline mb-8"
          >
            ← Back to Top Stories
          </Link>

          <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-[#a5880f] font-semibold mb-4">
            <span>{story.category}</span>
            <span>•</span>
            <span>{story.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {story.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-600">
            {story.excerpt}
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Published on{" "}
            {published.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {" • "}
            {published.toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

        </div>

      </section>

      {/* Featured Image */}

      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="relative h-[500px] overflow-hidden rounded-2xl">

          <Image
            src={story.image}
            alt={story.title}
            fill
            priority
            className="object-cover"
          />

        </div>

      </section>

      {/* Article */}

      <section className="max-w-4xl mx-auto px-6 pb-20">

        {story.sections.map((section, index) => (

          <div key={index} className="mb-14">

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {section.title}
            </h2>

            {section.content.map((paragraph, i) => (

              <p
                key={i}
                className="text-lg leading-9 text-gray-700 mb-6"
              >
                {paragraph}
              </p>

            ))}

          </div>

        ))}

        {/* Quote */}

        {story.quote && (

          <div className="bg-[#1F2937] text-white rounded-2xl p-8 my-16">

            <p className="text-2xl italic leading-10">
              "{story.quote.text}"
            </p>

            <p className="mt-6 text-gray-300 font-medium">
              — {story.quote.author}
            </p>

          </div>

        )}

        {/* Highlights */}

        {story.highlights && story.highlights.length > 0 && (

          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {story.highlightsTitle ?? "Key Highlights"}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">

              {story.highlights.map((highlight, index) => (

                <div
                  key={index}
                  className="border rounded-xl p-6 hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-3 text-[#a5880f]">
                    {highlight.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {highlight.description}
                  </p>
                </div>

              ))}

            </div>
          </>

        )}

        {/* Legal Significance */}

        {story.legalSignificance && (

          <div className="bg-[#F8F5F0] border-l-4 border-[#a5880f] rounded-xl p-8 mb-16">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Legal Significance
            </h2>

            <p className="text-gray-700 leading-8">
              {story.legalSignificance}
            </p>

          </div>

        )}

        {/* Case Details */}

        {story.caseDetails && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Case Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mb-16">

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Case</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {story.caseDetails.caseName}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Court</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {story.caseDetails.court}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Bench</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {story.caseDetails.bench}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Decision Date</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {story.caseDetails.decisionDate}
                </p>
              </div>

              {story.caseDetails.caseNumber && (
                <div className="border border-gray-200 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-gray-500">Case Number</p>
                  <p className="mt-2 text-gray-900 font-semibold">
                    {story.caseDetails.caseNumber}
                  </p>
                </div>
              )}

              {story.caseDetails.citation && (
                <div className="border border-gray-200 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-gray-500">Citation</p>
                  <p className="mt-2 text-gray-900 font-semibold">
                    {story.caseDetails.citation}
                  </p>
                </div>
              )}

            </div>
          </>
        )}

        {/* Disclaimer */}

        {story.disclaimer && (

          <div className="border-t pt-8">

            <p className="text-sm italic text-gray-500 leading-7">
              {story.disclaimer}
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

