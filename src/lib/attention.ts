import { seededRandom } from "./utils";

export const EMBEDDING_DIM = 24;

export function softmax(values: number[]) {
  const peak = Math.max(...values);
  const exp = values.map((value) => Math.exp(value - peak));
  const total = exp.reduce((sum, value) => sum + value, 0);
  return exp.map((value) => value / total);
}

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
};

export function embeddingFor(token: DemoToken | undefined, index: number) {
  const tokenSeed = token?.id ?? index;

  return Array.from({ length: EMBEDDING_DIM }, (_, dimension) => {
    const phase = (tokenSeed + 1) * (dimension + 1) * 0.173 + index * 0.41;
    return Math.sin(phase) * 0.75;
  });
}

export function linear(input: number[], weight: number[][]) {
  return weight.map((row) =>
    row.reduce((sum, value, index) => sum + value * input[index], 0),
  );
}

export function vectorOpacity(value: number, vector: number[]) {
  const peak = Math.max(...vector.map((item) => Math.abs(item)), 0.0001);
  return 0.2 + (Math.abs(value) / peak) * 0.8;
}

export function attentionMatrix(tokens: DemoToken[]) {
  const queries = tokens.map((token, index) =>
    linear(embeddingFor(token, index), PROJECTION_WEIGHTS.q),
  );
  const keys = tokens.map((token, index) =>
    linear(embeddingFor(token, index), PROJECTION_WEIGHTS.k),
  );

  return tokens.map((_, row) => {
    const scores = keys.map((key, column) => {
      if (row < column) return -Infinity;
      const query = queries[row];
      const dotProduct = query.reduce(
        (sum, value, index) => sum + value * key[index],
        0,
      );
      return dotProduct / Math.sqrt(EMBEDDING_DIM);
    });
    return softmax(scores);
  });
}
