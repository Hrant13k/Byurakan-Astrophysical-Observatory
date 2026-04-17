import { getNews } from "@/data/news";
import NewsArticleClient from "./NewsArticleClient";

export function generateStaticParams() {
  return getNews("en").map((item) => ({ id: item.id }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <NewsArticleClient id={id} />;
}
