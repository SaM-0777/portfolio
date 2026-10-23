"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import TokenPill from "./token-pill";
import { DEFAULT_PROMPT, LEXICAL_EXAMPLES, MODELS } from "@/constant/lexical";

export interface TokenizerProps {
  model: ModelKey;
  setModel: (o: ModelKey) => void;
  info: ModelInfo;
  tokenizerState: TokenizerState;
  tokenizerReady: boolean;
  reloadTokenizer: () => void;
  tokenize: (text: string) => DemoToken[];
  setLexicalComparisons: (o: Record<LanguageKey, DemoToken[]>) => void;
}

export default function Tokenizer({
  model,
  setModel,
  info,
  tokenizerState,
  tokenizerReady,
  reloadTokenizer,
  tokenize,
  setLexicalComparisons,
}: TokenizerProps) {
  const initialTokenization = useRef(false);
  const [prompt, setPrompt] = useState(DEFAULT_PROMPT);
  const [selectedToken, setSelectedToken] = useState<number>(0);
  const [tokens, setTokens] = useState<DemoToken[]>([]);

  const handleTokenize = useCallback(() => {
    if (!tokenizerReady) return;

    setTokens(tokenize(prompt));
    setLexicalComparisons(
      LEXICAL_EXAMPLES.reduce(
        (comparison, example) => {
          comparison[example.language] = tokenize(example.code);
          return comparison;
        },
        {} as Record<LanguageKey, DemoToken[]>,
      ),
    );
    setSelectedToken(0);
  }, [prompt, tokenize, tokenizerReady]);

  useEffect(() => {
    if (!tokenizerReady || initialTokenization.current) {
      return;
    }

    initialTokenization.current = true;
    handleTokenize();
  }, [handleTokenize, tokenizerReady]);

  const lexicalCount = tokens.filter(
    (token) => token.kind === "word" || token.kind === "number",
  ).length;

  return (
    <div className="mt-9 overflow-hidden rounded-[26px] border border-[#d9d7ce] bg-[#]">
      <div className="relative border-b border-[#d9d7ce] p-5 sm:p-7">
        <label
          htmlFor="prompt"
          className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#8c9088]"
        >
          <span>Prompt / code fragment</span>
          <span className="font-mono text-[#9a9b91]">
            {prompt.length} / 180 chars
          </span>
        </label>
        <textarea
          id="prompt"
          value={prompt}
          maxLength={180}
          onChange={(event) => {
            setPrompt(event.target.value);
            setSelectedToken(0);
            setTokens([]);
          }}
          className="min-h-56 w-full resize-y bg-transparent font-mono text-[13px] leading-7 text-ink-black outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 border-b border-[#d9d7ce] px-5 py-4 sm:px-7">
        <span className="mr-2 text-[10px] uppercase tracking-[0.16em] text-[#92958c]">
          checkpoint
        </span>
        {(Object.keys(MODELS) as ModelKey[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => {
              setModel(key);
              setSelectedToken(0);
              setTokens([]);
              setLexicalComparisons({} as Record<LanguageKey, DemoToken[]>);
            }}
            className={`rounded-full border px-3 py-2 text-[11px] transition duration-200 ${model === key ? "border-deep-forest bg-deep-forest text-white" : "border-[#d3d0c7] bg-white text-deep-forest hover:border-[#9b9e95]"}`}
          >
            {MODELS[key].shortName}
          </button>
        ))}
        <button
          type="button"
          onClick={handleTokenize}
          disabled={!tokenizerReady}
          aria-busy={tokenizerState.status === "loading"}
          className="ml-auto rounded-full border border-oxblood bg-oxblood px-4 py-2 text-[11px] text-white transition duration-200 hover:bg-[#8f3d27] disabled:cursor-wait disabled:opacity-45"
        >
          {tokenizerState.status === "loading"
            ? "Loading tokenizer…"
            : "Tokenize"}
        </button>
      </div>

      <div className="p-5 sm:p-7">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-serif text-xl text-[#333a35]">{info.name}</p>
            <p className="mt-1 font-mono text-[10px] text-[#9a9b91]">
              {info.source}
            </p>
          </div>
          <div className="max-w-xs text-right text-[12px] leading-5 text-[#858a82]">
            {info.description}
          </div>
        </div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#d9d7ce] bg-[#f7f6f2] px-4 py-3 text-[11px] text-[#777d75]">
          {tokenizerState.status === "loading" && (
            <div
              className="flex min-w-0 items-center gap-3"
              role="status"
              aria-live="polite"
            >
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-oxblood" />
              <span>Fetching tokenizer from HuggingFace</span>
              <span className="font-mono text-oxblood">
                {tokenizerState.progress}%
              </span>
              {tokenizerState.file && (
                <span className="max-w-[16rem] truncate font-mono text-[10px] text-[#9a9b91]">
                  {tokenizerState.file}
                </span>
              )}
            </div>
          )}
          {tokenizerState.status === "ready" && (
            <div
              className="flex items-center gap-3"
              role="status"
              aria-live="polite"
            >
              <span className="h-2 w-2 rounded-full bg-deep-forest" />
              <span>Tokenizer loaded from HuggingFace</span>
            </div>
          )}
          {tokenizerState.status === "error" && (
            <div
              className="flex min-w-0 flex-1 items-center justify-between gap-3"
              role="alert"
            >
              <span className="truncate text-oxblood">
                {tokenizerState.message ??
                  "Tokenizer fetch needs another attempt."}
              </span>
              <button
                type="button"
                onClick={reloadTokenizer}
                className="shrink-0 rounded-full border border-oxblood px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-oxblood transition hover:bg-[#fff5ed]"
              >
                Retry fetch
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {tokens.map((token, index) => (
            <TokenPill
              key={`${token.id}-${index}`}
              token={token}
              selected={index === selectedToken}
              onClick={() => setSelectedToken(index)}
            />
          ))}
        </div>
        {tokenizerState.status === "ready" && tokens.length === 0 && (
          <p className="mt-4 text-[12px] leading-5 text-[#858a82]">
            Edit the prompt, then press{" "}
            <span className="font-medium text-[#a2492e]">Tokenize</span> to
            update the token sequence.
          </p>
        )}
        {tokenizerState.status === "ready" && tokens.length > 0 && (
          <div className="mt-6 rounded-2xl border border-[#d9d7ce] bg-[#f7f6f2] p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#92958c]">
                token id → string
              </p>
              <p className="font-mono text-[10px] text-[#b0afa5]">
                {tokens.length} entries
              </p>
            </div>
            <div className="flex max-h-40 flex-wrap gap-2 overflow-y-auto">
              {tokens.map((token, index) => (
                <button
                  key={`decoded-${token.id}-${index}`}
                  type="button"
                  onClick={() => setSelectedToken(index)}
                  className={`rounded-lg border px-2.5 py-2 text-left font-mono text-[10px] transition ${index === selectedToken ? "border-[#cf6b4b] bg-[#fff5ed] text-[#a2492e]" : "border-transparent bg-[#eeece5] text-[#6d746c] hover:border-[#c8c5bb]"}`}
                >
                  <span className="text-[#9a9b91]">{token.id}</span>
                  <span className="mx-1 text-[#c0bdb2]">→</span>
                  <span>{token.decoded || "∅"}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-px border-t border-[#d9d7ce] sm:grid-cols-3">
        <div className="p-5 border-r border-[#d9d7ce]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#9a9b91]">
            token count
          </p>
          <p className="mt-3 font-serif text-3xl text-oxblood">
            {tokens.length}
          </p>
        </div>
        <div className="p-5 border-r border-[#d9d7ce]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#9a9b91]">
            lexical units
          </p>
          <p className="mt-3 font-serif text-3xl text-oxblood">
            {lexicalCount}
          </p>
        </div>
        <div className="p-5">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#9a9b91]">
            selected id
          </p>
          <p className="mt-3 font-mono text-2xl text-oxblood">
            {tokens[selectedToken]?.id ?? "—"}
          </p>
        </div>
      </div>
    </div>
  );
}
