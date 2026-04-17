import { getStaff } from "@/data/staff";
import StaffProfileClient from "./StaffProfileClient";

export function generateStaticParams() {
  return getStaff("en").map((member) => ({ id: member.id }));
}

export default async function StaffProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <StaffProfileClient id={id} />;
}
