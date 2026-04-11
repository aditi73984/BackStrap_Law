import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "Understanding Fundamental Rights in India",
    desc: "A deep dive into Article 12-35 of the Indian Constitution.",
    date: "2026-01-20",
  },
  {
    id: 2,
    title: "Landmark Supreme Court Judgements",
    desc: "Key rulings that shaped Indian law.",
    date: "2026-01-18",
  },
  {
    id: 3,
    title: "How to Prepare for Judiciary Exams",
    desc: "Step-by-step guide for law aspirants.",
    date: "2026-01-15",
  },
  {
    id: 4,
    title: "Cyber Law in India",
    desc: "Legal framework for digital crimes.",
    date: "2026-01-12",
  },
  {
    id: 5,
    title: "Legal Drafting Basics",
    desc: "Learn how to draft legal documents.",
    date: "2026-01-10",
  },
  {
    id: 6,
    title: "Criminal Law Essentials",
    desc: "Important IPC sections explained.",
    date: "2026-01-08",
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = 3;

  const sorted = blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const start = (page - 1) * limit;
  const end = start + limit;

  return NextResponse.json({
    blogs: sorted.slice(start, end),
    hasMore: end < sorted.length,
  });
}

