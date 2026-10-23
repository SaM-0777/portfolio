type ModelKey = "gpt2" | "nemotron" | "qwen" | "swe";
type TokenKind =
  | "word"
  | "number"
  | "operator"
  | "punctuation"
  | "space"
  | "string"
  | "comment";

type DemoToken = {
  token: string;
  decoded: string;
  id: number;
  kind: TokenKind;
};

type LanguageKey = "Python" | "TypeScript" | "Rust";
type LexicalKind =
  | "keyword"
  | "identifier"
  | "type"
  | "literal"
  | "operator"
  | "delimiter";

type LexicalToken = {
  text: string;
  kind: LexicalKind;
};

type LexicalExample = {
  language: LanguageKey;
  code: string;
  tokens: LexicalToken[];
};

type ModelInfo = {
  name: string;
  shortName: string;
  source: string;
  tokenizerId: string;
  description: string;
  accent: string;
};

type HfTokenizer = {
  tokenize: (
    text: string,
    options?: { add_special_tokens?: boolean },
  ) => string[];
  encode: (
    text: string,
    options?: { add_special_tokens?: boolean },
  ) => number[];
  decode: (
    ids: number[],
    options?: {
      skip_special_tokens?: boolean;
      clean_up_tokenization_spaces?: boolean;
    },
  ) => string;
};

type TokenizerState = {
  status: "idle" | "loading" | "ready" | "error";
  progress: number;
  file?: string;
  message?: string;
};
