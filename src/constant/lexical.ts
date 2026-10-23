export const MODELS: Record<ModelKey, ModelInfo> = {
  gpt2: {
    name: "GPT-2",
    shortName: "GPT-2",
    source: "Xenova/gpt2",
    tokenizerId: "Xenova/gpt2",
    description:
      "Byte-level BPE baseline with compact, learned subword merges.",
    accent: "#cf6b4b",
  },
  nemotron: {
    name: "NVIDIA Nemotron 3.5 Super VL",
    shortName: "Nemotron 3.5",
    source: "nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4",
    tokenizerId: "nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4",
    description:
      "A long-context multimodal checkpoint with an engineering-heavy training mix.",
    accent: "#6c7dff",
  },
  qwen: {
    name: "Qwen3.5-4B",
    shortName: "Qwen3.5-4B",
    source: "Qwen/Qwen3.5-4B",
    tokenizerId: "Qwen/Qwen3.5-4B",
    description:
      "A 4B native multimodal model with a 248,320-entry padded vocabulary.",
    accent: "#bd7c42",
  },
  swe: {
    name: "Qwen3.5-SWE (extended)",
    shortName: "Qwen3.5-SWE",
    source: "SamLegion888/Qwen3.5-SWE / extended-vocab",
    tokenizerId: "SamLegion888/Qwen3.5-SWE",
    description:
      "The experiment's extended-vocabulary tokenizer with code-aware boundary cues.",
    accent: "#2e8b74",
  },
};

export const DEFAULT_PROMPT = `def weighted_mean(values: list[float]) -> float:\n    return sum(values) / len(values)`;

export const LEXICAL_KIND_STYLES: Record<LexicalKind, string> = {
  keyword: "border-[#d7b3a3] bg-[#f5e5dd] text-[#9b4f36]",
  identifier: "border-[#bed2c4] bg-[#e8f0e9] text-[#2e654f]",
  type: "border-[#c5c0df] bg-[#eceaf6] text-[#5b5b96]",
  literal: "border-[#e3c99f] bg-[#f7eddc] text-[#886a36]",
  operator: "border-[#c3c8df] bg-[#e9ecf7] text-[#53618e]",
  delimiter: "border-[#d1d2ca] bg-[#f0f0eb] text-[#626960]",
};

export const LEXICAL_EXAMPLES: LexicalExample[] = [
  {
    language: "Python",
    code: "def weighted_mean(values: list[float]) -> float:\n    return sum(values) / len(values)",
    tokens: [
      { text: "def", kind: "keyword" },
      { text: "weighted_mean", kind: "identifier" },
      { text: "(", kind: "delimiter" },
      { text: "values", kind: "identifier" },
      { text: ":", kind: "delimiter" },
      { text: "list", kind: "type" },
      { text: "[", kind: "delimiter" },
      { text: "float", kind: "type" },
      { text: "]", kind: "delimiter" },
      { text: ")", kind: "delimiter" },
      { text: "->", kind: "operator" },
      { text: "float", kind: "type" },
      { text: ":", kind: "delimiter" },
      { text: "return", kind: "keyword" },
      { text: "sum", kind: "identifier" },
      { text: "(", kind: "delimiter" },
      { text: "values", kind: "identifier" },
      { text: ")", kind: "delimiter" },
      { text: "/", kind: "operator" },
      { text: "len", kind: "identifier" },
      { text: "(", kind: "delimiter" },
      { text: "values", kind: "identifier" },
      { text: ")", kind: "delimiter" },
    ],
  },
  {
    language: "TypeScript",
    code: "const sample: Record<string, number> = {\n  passAt1: 0.524,\n};",
    tokens: [
      { text: "const", kind: "keyword" },
      { text: "sample", kind: "identifier" },
      { text: ":", kind: "delimiter" },
      { text: "Record", kind: "type" },
      { text: "<", kind: "operator" },
      { text: "string", kind: "type" },
      { text: ",", kind: "delimiter" },
      { text: "number", kind: "type" },
      { text: ">", kind: "operator" },
      { text: "=", kind: "operator" },
      { text: "{", kind: "delimiter" },
      { text: "passAt1", kind: "identifier" },
      { text: ":", kind: "delimiter" },
      { text: "0.524", kind: "literal" },
      { text: ",", kind: "delimiter" },
      { text: "}", kind: "delimiter" },
      { text: ";", kind: "delimiter" },
    ],
  },
  {
    language: "Rust",
    code: "let mean = values.iter().sum::<f32>() / values.len() as f32;",
    tokens: [
      { text: "let", kind: "keyword" },
      { text: "mean", kind: "identifier" },
      { text: "=", kind: "operator" },
      { text: "values", kind: "identifier" },
      { text: ".", kind: "delimiter" },
      { text: "iter", kind: "identifier" },
      { text: "(", kind: "delimiter" },
      { text: ")", kind: "delimiter" },
      { text: ".", kind: "delimiter" },
      { text: "sum", kind: "identifier" },
      { text: "::", kind: "operator" },
      { text: "<", kind: "operator" },
      { text: "f32", kind: "type" },
      { text: ">", kind: "operator" },
      { text: "(", kind: "delimiter" },
      { text: ")", kind: "delimiter" },
      { text: "/", kind: "operator" },
      { text: "values", kind: "identifier" },
      { text: ".", kind: "delimiter" },
      { text: "len", kind: "identifier" },
      { text: "(", kind: "delimiter" },
      { text: ")", kind: "delimiter" },
      { text: "as", kind: "keyword" },
      { text: "f32", kind: "type" },
      { text: ";", kind: "delimiter" },
    ],
  },
];

export const EXPERIMENT_RESULTS = [
  {
    benchmark: "HumanEval",
    suite: "Base tests",
    standard: 45.7,
    extended: 52.4,
  },
  {
    benchmark: "HumanEval+",
    suite: "Base + extra tests",
    standard: 39.0,
    extended: 47.0,
  },
  {
    benchmark: "MBPP",
    suite: "Base tests",
    standard: 65.3,
    extended: 64.6,
  },
  {
    benchmark: "MBPP+",
    suite: "Base + extra tests",
    standard: 54.5,
    extended: 53.7,
  },
] as const;

export const sectionLinks = [
  ["01", "Overview", "overview"],
  ["02", "Tokenization", "explorer"],
  ["03", "What counts as a token?", "lexical"],
  ["04", "Causal attention & lexical boundaries", "attention"],
  ["05", "Experiment", "experiment"],
  ["06", "Trade-offs", "tradeoffs"],
  ["07", "References", "references"],
] as const;
