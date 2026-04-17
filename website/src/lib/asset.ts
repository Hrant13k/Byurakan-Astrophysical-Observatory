export const basePath =
  process.env.NODE_ENV === "production" ? "/Byurakan-Astrophysical-Observatory" : "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
