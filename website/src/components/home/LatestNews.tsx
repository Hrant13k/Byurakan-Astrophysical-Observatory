"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/shared/SectionHeading";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";

export default function LatestNews() {
  return (
    <section className="relative py-28">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          label="Stay Informed"
          title="Latest News"
          subtitle="Discoveries, developments, and milestones from our observatory"
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 tracking-wide")}
          >
            View All News
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
