import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function seededRandom(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

export async function fetchJsonWithProgress(
  url: string,
  onProgress: (progress: number) => void,
) {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Hugging Face returned ${response.status} for ${url}`);
  }

  if (!response.body) {
    const json = await response.json();
    onProgress(100);
    return json;
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  const total = Number(response.headers.get("content-length") ?? 0);
  let loaded = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;
    chunks.push(value);
    loaded += value.byteLength;
    onProgress(total ? Math.min(100, Math.round((loaded / total) * 100)) : 50);
  }

  const bytes = new Uint8Array(loaded);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  onProgress(100);
  return JSON.parse(new TextDecoder().decode(bytes));
}
