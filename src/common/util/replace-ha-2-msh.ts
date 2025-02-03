import type { TemplateResult, nothing } from "lit";

export function replaceHA2MSH(
  content: string | TemplateResult | typeof nothing
): string | TemplateResult | typeof nothing {
  if (typeof content === "string") {
    return content.replace(/MSH/gi, "MSH");
  }
  return content;
}
