import { tokenLabel } from "@/lib/lexical";

export default function TokenPill({
  token,
  selected,
  onClick,
}: {
  token: DemoToken;
  selected: boolean;
  onClick: () => void;
}) {
  const colors: Record<TokenKind, string> = {
    word: "bg-[#e8eee8] text-[#2e654f]",
    number: "bg-[#f6e8da] text-[#9b5b38]",
    operator: "bg-[#e8e6f5] text-[#5b5b96]",
    punctuation: "bg-[#ecebe5] text-[#6f746d]",
    space: "bg-transparent text-[#bab9ae]",
    string: "bg-[#f4e8d2] text-[#886a36]",
    comment: "bg-[#e3ecee] text-[#52717a]",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Token ${tokenLabel(token)}, id ${token.id}`}
      className={`group rounded-lg border px-2 py-1.5 text-left font-mono text-[11px] transition duration-200 ${
        selected
          ? "border-[#cf6b4b] bg-[#fff5ed] text-[#a2492e] shadow-sm"
          : `border-transparent ${colors[token.kind]}`
      }`}
    >
      <span className="block max-w-40 truncate">
        {tokenLabel(token) || "∅"}
      </span>
      <span className="mt-1 block text-[9px] opacity-50">{token.id}</span>
    </button>
  );
}
