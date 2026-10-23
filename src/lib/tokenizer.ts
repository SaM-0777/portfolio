import { fetchJsonWithProgress } from "./utils";

export async function loadHuggingFaceTokenizer(
  tokenizerId: string,
  onProgress: (progress: number, file?: string) => void,
): Promise<HfTokenizer> {
  const { AutoTokenizer, PreTrainedTokenizer } =
    await import("@huggingface/transformers");

  if (tokenizerId === "SamLegion888/Qwen3.5-SWE") {
    const base =
      "https://huggingface.co/SamLegion888/Qwen3.5-SWE/resolve/main/extended-vocab/";
    const [tokenizerJson, tokenizerConfig] = await Promise.all([
      fetchJsonWithProgress(`${base}tokenizer.json`, (progress) =>
        onProgress(Math.round(progress * 0.9), "extended-vocab/tokenizer.json"),
      ),
      fetchJsonWithProgress(`${base}tokenizer_config.json`, (progress) =>
        onProgress(
          Math.max(5, Math.round(90 + progress * 0.1)),
          "extended-vocab/tokenizer_config.json",
        ),
      ),
    ]);

    onProgress(100, "extended-vocab/tokenizer_config.json");
    return new PreTrainedTokenizer(
      tokenizerJson,
      tokenizerConfig,
    ) as HfTokenizer;
  }

  const tokenizer = await AutoTokenizer.from_pretrained(
    tokenizerId,
    {
      progress_callback: (data) => {
        const progress =
          "progress" in data && typeof data.progress === "number"
            ? Math.round(data.progress)
            : data.status === "done"
              ? 100
              : 0;
        onProgress(progress, "file" in data ? data.file : undefined);
      },
    },
  );
  return tokenizer as HfTokenizer;
}
