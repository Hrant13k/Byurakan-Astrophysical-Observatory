import { publications } from "@/data/publications";
import PublicationDetailClient from "./PublicationDetailClient";

export function generateStaticParams() {
  return publications.map((pub) => ({ id: pub.id }));
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PublicationDetailClient id={id} />;
}
