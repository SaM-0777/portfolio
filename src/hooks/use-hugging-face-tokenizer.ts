"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { tokenizeWithHuggingFace } from "@/lib/lexical";
import { loadHuggingFaceTokenizer } from "@/lib/tokenizer";

type DecodeOptions = Parameters<HfTokenizer["decode"]>[1];

export function useHuggingFaceTokenizer(tokenizerId: string) {
  const [tokenizer, setTokenizer] = useState<HfTokenizer | null>(null);
  const [state, setState] = useState<TokenizerState>({
    status: "idle",
    progress: 0,
  });
  const [reloadNonce, setReloadNonce] = useState(0);
  const cache = useRef<Record<string, HfTokenizer>>({});

  useEffect(() => {
    let cancelled = false;
    const cached = cache.current[tokenizerId];

    if (cached) {
      setTokenizer(() => cached);
      setState({ status: "ready", progress: 100 });
      return () => {
        cancelled = true;
      };
    }

    setTokenizer(null);
    setState({ status: "loading", progress: 0, file: "starting" });

    void (async () => {
      try {
        const loaded = await loadHuggingFaceTokenizer(
          tokenizerId,
          (progress, file) => {
            if (cancelled) return;
            setState({ status: "loading", progress, file });
          },
        );

        if (cancelled) return;
        cache.current[tokenizerId] = loaded;
        setTokenizer(() => loaded);
        setState({ status: "ready", progress: 100 });
      } catch (error) {
        if (cancelled) return;
        setState({
          status: "error",
          progress: 0,
          message:
            error instanceof Error
              ? error.message
              : "Hugging Face tokenizer could not be loaded.",
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [reloadNonce, tokenizerId]);

  const tokenize = useCallback(
    (text: string) =>
      tokenizer ? tokenizeWithHuggingFace(tokenizer, text) : [],
    [tokenizer],
  );

  const encode = useCallback(
    (text: string) =>
      tokenizer?.encode(text, { add_special_tokens: false }) ?? [],
    [tokenizer],
  );

  const decode = useCallback(
    (ids: number[], options?: DecodeOptions) =>
      tokenizer?.decode(ids, {
        skip_special_tokens: false,
        clean_up_tokenization_spaces: false,
        ...options,
      }) ?? "",
    [tokenizer],
  );

  const reload = useCallback(() => {
    delete cache.current[tokenizerId];
    setReloadNonce((value) => value + 1);
  }, [tokenizerId]);

  return {
    tokenizer,
    state,
    isReady: state.status === "ready" && tokenizer !== null,
    tokenize,
    encode,
    decode,
    reload,
  };
}
