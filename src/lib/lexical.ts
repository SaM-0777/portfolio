export function tokenLabel(token: DemoToken | undefined) {
  if (!token) return ""
  return token.token
    .replace(/Ġ|▁/g, "·")
    .replace(/\n/g, "↵")
    .replace(/\t/g, "⇥");
}

export function classifyToken(token: string, decoded: string): TokenKind {
  const visible = decoded.trim();
  if (!visible) return "space";
  if (/^\/\//.test(visible) || /^#/.test(visible)) return "comment";
  if (/^['"]/.test(visible)) return "string";
  if (/^\d/.test(visible)) return "number";
  if (/^[A-Za-z_$]/.test(visible)) return "word";
  if (/^[{}[\]().,:;=+\-*/<>!%]/.test(visible)) return "operator";
  return "punctuation";
}

export function tokenizeWithHuggingFace(
  tokenizer: HfTokenizer,
  value: string,
): DemoToken[] {
  const input = typeof value === "string" ? value : "";
  const rawTokens = tokenizer.tokenize(input, { add_special_tokens: false });
  const ids = tokenizer.encode(input, { add_special_tokens: false });

  return rawTokens.map((token, index) => {
    const id = ids[index] ?? -1;
    const decoded =
      id >= 0
        ? tokenizer.decode([id], {
            skip_special_tokens: false,
            clean_up_tokenization_spaces: false,
          })
        : token;

    return {
      token,
      decoded: decoded.replace(/\n/g, "↵").replace(/ /g, "·"),
      id,
      kind: classifyToken(token, decoded),
    };
  });
}
