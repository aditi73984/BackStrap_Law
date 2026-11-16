
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { articles } from "@/data/articles";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const published = new Date(article.publishedAt);

  return (
    <main className="bg-white min-h-screen">

      {/* Hero */}

      <section className="bg-[#F8F5F0] border-b border-gray-200 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[#a5880f] hover:underline mb-8"
          >
            ← Back to Articles
          </Link>

          <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-[#a5880f] font-semibold mb-4">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            {article.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-600">
            {article.excerpt}
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

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#F8F5F0]">

          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-contain"
          />

        </div>

      </section>

      {/* Article Content */}

      <section className="max-w-4xl mx-auto px-6 pb-20">

        {article.sections.map((section, index) => (

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

        {article.quote && (

          <div className="bg-[#1F2937] text-white rounded-2xl p-8 my-16">

            <p className="text-2xl italic leading-10">
              "{article.quote.text}"
            </p>

            <p className="mt-6 text-gray-300 font-medium">
              — {article.quote.author}
            </p>

          </div>

        )}

        {/* Highlights */}

        {article.highlights && article.highlights.length > 0 && (

          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {article.highlightsTitle ?? "Key Highlights"}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">

              {article.highlights.map((highlight, index) => (

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

        {article.legalSignificance && (

          <div className="bg-[#F8F5F0] border-l-4 border-[#a5880f] rounded-xl p-8 mb-16">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Legal Significance
            </h2>

            <p className="text-gray-700 leading-8">
              {article.legalSignificance}
            </p>

          </div>

        )}

        {/* Case Details */}

        {article.caseDetails && (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Case Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5 mb-16">

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Case</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {article.caseDetails.caseName}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Court</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {article.caseDetails.court}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Bench</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {article.caseDetails.bench}
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-5 bg-white">
                <p className="text-sm font-medium text-gray-500">Decision Date</p>
                <p className="mt-2 text-gray-900 font-semibold">
                  {article.caseDetails.decisionDate}
                </p>
              </div>

              {article.caseDetails.caseNumber && (
                <div className="border border-gray-200 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-gray-500">Case Number</p>
                  <p className="mt-2 text-gray-900 font-semibold">
                    {article.caseDetails.caseNumber}
                  </p>
                </div>
              )}

              {article.caseDetails.citation && (
                <div className="border border-gray-200 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-gray-500">Citation</p>
                  <p className="mt-2 text-gray-900 font-semibold">
                    {article.caseDetails.citation}
                  </p>
                </div>
              )}

            </div>
          </>
        )}

        {/* Disclaimer */}

        {article.disclaimer && (

          <div className="border-t pt-8">

            <p className="text-sm italic text-gray-500 leading-7">
              {article.disclaimer}
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

