import { getPrograms } from "@/data/education";
import ProgramDetailClient from "./ProgramDetailClient";

export function generateStaticParams() {
  return getPrograms("en").map((program) => ({ id: program.id }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProgramDetailClient id={id} />;
}
