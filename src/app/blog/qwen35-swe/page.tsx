import type { Metadata } from "next";
import Link from "next/link";
import Article from "@/markdown/qwen35-swe/article";
import { sectionLinks } from "@/constant/lexical";

//export const instant = false;

export const metadata: Metadata = {
  title: {
    default: "Lexical Boundaries for Code Tokenization",
    template: "%s — Soumya Ranjan Sahu",
  },
  description:
    "An interactive note on whether programming-language lexical boundaries can make code tokenization more structurally legible to language models.",
  keywords: [
    "swe",
    "tokenization",
    "lexical boundaries",
    "code language models",
    "Qwen3.5-SWE",
    "attention",
  ],
  authors: [{ name: "Soumya Ranjan Sahu" }],
  openGraph: {
    title: "Lexical Boundaries for Code Tokenization",
    description:
      "A note on exploring tokenizer boundaries, program syntax, and attention structure.",
    type: "article",
    authors: ["Soumya Ranjan Sahu"],
  },
};

export default function LexicalBoundaryPage() {
  return (
    <main className="min-h-screen text-[#252a27] selection:bg-[#e9cfc2] selection:text-[#432218]">
      <div className="mx-auto max-w-8xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[190px_minmax(0,820px)_minmax(160px,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-8 pt-16">
              <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-[#9a9b91]">
                Contents
              </p>
              <nav className="space-y-3 border-l border-[#ddd9cf] pl-4">
                {sectionLinks.map(([number, label, id]) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="group flex items-baseline gap-2 text-[12px] text-[#7d827a] transition hover:text-ink-black"
                  >
                    <span className="font-mono text-[10px] text-[#b6b3a8] group-hover:text-ink-black">
                      {number}
                    </span>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <Article />
        </div>
      </div>
    </main>
  );
}
