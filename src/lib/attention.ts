import { seededRandom } from "./utils";

export const Tokens: DemoToken[] = [
  //{ token: "Ċ", decoded: "\n", id: 14, kind: "space" },
  //{ token: "def", decoded: "def", id: 7, kind: "word" },
  //{ token: "Ġtransform", decoded: " transform", id: 31, kind: "word" },
  //{ token: "(value", decoded: "(value", id: 22, kind: "word" },
  //{ token: ":", decoded: ":", id: 5, kind: "operator" },
  //{ token: "Ġint", decoded: " int", id: 38, kind: "word" },
  //{ token: ",", decoded: ",", id: 11, kind: "word" },
  //{ token: "Ġexponent", decoded: " exponent", id: 42, kind: "word" },
  //{ token: ":", decoded: ":", id: 5, kind: "word" },
  //{ token: "Ġint", decoded: " int", id: 38, kind: "word" },
  //{ token: ")", decoded: ")", id: 19, kind: "word" },
  //{ token: "Ġ->", decoded: " ->", id: 27, kind: "word" },
  //{ token: "Ġint", decoded: " int", id: 38, kind: "word" },
  //{ token: ":", decoded: ":", id: 5, kind: "operator" },
  //{ token: "Ċ", decoded: "\n", id: 14, kind: "space" },
  { token: "ĠĠĠ", decoded: "   ", id: 33, kind: "space" },
  { token: "Ġresult", decoded: " result", id: 9, kind: "word" },
  { token: "Ġ=", decoded: " =", id: 44, kind: "word" },
  { token: "Ġvalue", decoded: " value", id: 16, kind: "word" },
  { token: "Ċ", decoded: "\n", id: 14, kind: "word" },
  { token: "ĠĠĠ", decoded: "   ", id: 33, kind: "word" },
  { token: "Ġresult", decoded: " result", id: 9, kind: "word" },
  { token: "Ġ", decoded: " ", id: 3, kind: "word" },
  { token: "**=", decoded: "**=", id: 24, kind: "word" },
  { token: "Ġexponent", decoded: " exponent", id: 42, kind: "word" },
  { token: "Ċ", decoded: "\n", id: 14, kind: "word" },
  { token: "ĠĠĠ", decoded: "   ", id: 33, kind: "word" },
  { token: "Ġresult", decoded: " result", id: 9, kind: "word" },
  { token: "Ġ", decoded: " ", id: 3, kind: "word" },
  { token: ">>=", decoded: ">>=", id: 36, kind: "word" },
  { token: "Ġ", decoded: " ", id: 3, kind: "word" },
  { token: "2", decoded: "2", id: 18, kind: "word" },
  { token: "Ċ", decoded: "\n", id: 14, kind: "word" },
  { token: "ĠĠĠ", decoded: "   ", id: 33, kind: "word" },
  { token: "Ġreturn", decoded: " return", id: 29, kind: "word" },
  { token: "Ġresult", decoded: " result", id: 9, kind: "word" },
  { token: "Ċ", decoded: "\n", id: 14, kind: "word" },
];

export const VOCAB_SIZE = 48;
export const EMBEDDING_DIM = 16;

export function initializeLinearWeight(seed: number) {
  const random = seededRandom(seed);
  const bound = 1 / Math.sqrt(EMBEDDING_DIM);
  return Array.from({ length: EMBEDDING_DIM }, () =>
    Array.from({ length: EMBEDDING_DIM }, () => (random() * 2 - 1) * bound),
  );
}

export const PROJECTION_WEIGHTS = {
  q: initializeLinearWeight(0x51a7),
  k: initializeLinearWeight(0x6b2d),
  v: initializeLinearWeight(0x7c93),
  //q: Wq,
  //k: Wk,
  //v: Wv,
};

function standardNormal(): number {
  const u1 = Math.random() || Number.MIN_VALUE;
  const u2 = Math.random();

  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

const embeddingMatrix: number[][] = Array.from({ length: VOCAB_SIZE }, () =>
  Array.from({ length: EMBEDDING_DIM }, () => standardNormal()),
);

export function embeddingFor(tokens: DemoToken[]) {
  return tokens.map(({ id }) => {
    if (!Number.isInteger(id) || id < 0 || id >= embeddingMatrix.length) {
      throw new RangeError(`Invalid token ID: ${id}`);
    }

    return embeddingMatrix[id];
  });
}

export function linear(x: number[][], weight: number[][]): number[][] {
  return x.map((row) =>
    weight[0].map((_, j) =>
      row.reduce((sum, value, k) => sum + value * weight[k][j], 0),
    ),
  );
}

export function vectorOpacity(value: number, vector: number[]) {
  const peak = Math.max(...vector.map((item) => Math.abs(item)), 0.0001);
  return 0.2 + (Math.abs(value) / peak) * 0.8;
}

export function softmax(values: number[]) {
  const peak = Math.max(...values);
  const exp = values.map((value) => Math.exp(value - peak));
  const total = exp.reduce((sum, value) => sum + value, 0);
  return exp.map((value) => value / total);
}

export function attentionMatrix(tokens: DemoToken[]) {
  const embeddings = embeddingFor(tokens); // seqlen, 64

  const Q = linear(embeddings, PROJECTION_WEIGHTS.q);
  const K = linear(embeddings, PROJECTION_WEIGHTS.k);

  //const seqlen = Q.length;
  const dk = Q[0].length;

  const scores = Q.map((q) =>
    K.map(
      (k) => q.reduce((sum, value, i) => sum + value * k[i], 0) / Math.sqrt(dk),
    ),
  );
  const maskedScores = scores.map((row, i) =>
    row.map((score, j) => (j > i ? -Infinity : score)),
  );

  return maskedScores.map((row) => softmax(row));
}
