import type { Locale } from "./translations";

export type LocalizedString = { en: string; am: string };

export function l(strings: LocalizedString, locale: Locale): string {
  return strings[locale];
}
