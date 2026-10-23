"use client";

import { useState } from "react";
import SectionLabel from "@/components/section-label";
import {
  LEXICAL_EXAMPLES,
  LEXICAL_KIND_STYLES,
  MODELS,
} from "@/constant/lexical";
import { tokenLabel } from "@/lib/lexical";
import Link from "next/link";
import { useHuggingFaceTokenizer } from "@/hooks/use-hugging-face-tokenizer";
import { REFERENCES } from "@/constant/references";
import AttentionVisualization from "@/components/attention-visualization";
import ReferenceLink from "@/components/reference-link";
import BenchmarkCard from "@/components/benchmark-card";
import Tokenizer from "@/components/tokenizer";

export default function Article() {
  const [model, setModel] = useState<ModelKey>("swe");

  const [lexicalComparisons, setLexicalComparisons] = useState<
    Record<LanguageKey, DemoToken[]>
  >({} as Record<LanguageKey, DemoToken[]>);

  const info = MODELS[model];
  const {
    state: tokenizerState,
    isReady: tokenizerReady,
    tokenize,
    reload: reloadTokenizer,
  } = useHuggingFaceTokenizer(info.tokenizerId);

  return (
    <article className="min-w-0">
      <section id="overview" className="scroll-mt-8 pt-16 sm:pt-24">
        <SectionLabel number="01">Overview</SectionLabel>
        <h1 className="max-w-4xl text-7xl leading-[0.93] tracking-[-0.055em] text-[#252a27]">
          Lexical boundaries
          <br />
          for code.
        </h1>
        <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#626962] sm:text-[19px]">
          Can a tokenizer that respects the lexical boundaries of
          programming-languages help a language model generalize syntax,
          semantics, and structure better?
        </p>

        <div className="relative flex h-full flex-col justify-between space-y-8 mt-14">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a8d84]">
              working hypothesis
            </p>
            <p className="mt-6 font-serif text-2xl leading-tight text-[#39403b]">
              Make the units of code look like the units of grammar.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#6f766e]">
            <span className="rounded-full bg-[#f7f6f2] px-3 py-1.5">
              characters
            </span>
            <span>→</span>
            <span className="rounded-full bg-[#d9e7dd] px-3 py-1.5 text-[#2e654f]">
              lexemes
            </span>
            <span>→</span>
            <span className="rounded-full bg-[#f4dfd5] px-3 py-1.5 text-[#a2492e]">
              meaning
            </span>
          </div>
        </div>

        <div className="mt-12 text-[15px] leading-8 text-[#59615a]">
          <p>
            Programming languages have a built-in grammar, identifiers name
            values, operators follow clear rules, and delimiters define the
            structure. Standard subword tokenizers learn useful statistical
            patterns, but their token boundaries are determined by character
            frequency in the training data rather than the syntax of the code.
          </p>
        </div>
      </section>

      <section id="explorer" className="scroll-mt-8 pt-32">
        <SectionLabel number="02">Tokenization</SectionLabel>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-4xl tracking-[-0.035em] sm:text-5xl">
            How code gets tokenized
          </h2>
        </div>

        <Tokenizer
          model={model}
          setModel={setModel}
          info={info}
          reloadTokenizer={reloadTokenizer}
          setLexicalComparisons={setLexicalComparisons}
          tokenize={tokenize}
          tokenizerReady={tokenizerReady}
          tokenizerState={tokenizerState}
        />
        <p className="mt-4 text-[11px] leading-5 text-[#92958c]">
          Tokenizer assets are loaded through{" "}
          <code className="rounded bg-[#eceae3] px-1 font-mono">
            @huggingface/transformers
          </code>
          .
        </p>
      </section>

      <section id="lexical" className="scroll-mt-8 pt-32">
        <SectionLabel number="03">What counts as a token?</SectionLabel>
        <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
          Subword tokenizers can split code in awkward places.
        </h2>
        <div className="mt-8 grid gap-7 text-[15px] leading-8 text-[#59615a] sm:grid-cols-2">
          <p>
            A lexical token is a smallest meaningful unit emitted by a language
            lexer. Such as an identifier, keyword, literal, operator, or
            delimiter. The parser then combines these units into an abstract
            syntax tree. A tokenizer designed around those same atoms gives the
            model a representation whose transitions already carry hints about
            the next legal move.
          </p>
          <p>
            Subword algorithms such as BPE begin with a compact base vocabulary
            and learn frequent adjacent merges. That is efficient and
            expressive; the learned merge table can also cut across an
            identifier, attach whitespace to a token, or bundle a delimiter with
            a nearby symbol. The result is a useful statistical vocabulary with
            a less explicit grammar.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {LEXICAL_EXAMPLES.map((example) => {
            const tokenizerTokens = lexicalComparisons[example.language] ?? [];

            return (
              <div
                key={example.language}
                className="overflow-hidden rounded-[22px] border border-[#d9d7ce] bg-[#f1f0ea]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d9d7ce] px-5 py-4">
                  <div>
                    <p className="font-serif text-2xl text-[#3f4641]">
                      {example.language}
                    </p>
                  </div>
                </div>

                <pre className="overflow-x-auto border-b border-[#d9d7ce] bg-[#2f3833] p-5 font-mono text-[12px] leading-7 text-[#e9e6dc]">
                  <code>{example.code}</code>
                </pre>

                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-2">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#6f776e]">
                        lexical tokens
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {example.tokens.map((token, index) => (
                        <span
                          key={example.language + "-lexical-" + index}
                          className={
                            "rounded-lg border px-2.5 py-2 font-mono text-[10px] " +
                            LEXICAL_KIND_STYLES[token.kind]
                          }
                          title={token.kind}
                        >
                          <span className="block">{token.text}</span>
                          <span className="mt-1 block text-[8px] uppercase tracking-widest opacity-60">
                            {token.kind}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#6f776e]">
                        selected tokenizer · {info.shortName}
                      </p>
                      <span className="font-mono text-[10px] text-[#9a9b91]">
                        {tokenizerState.status === "ready"
                          ? tokenizerTokens.length + " tokens"
                          : "loading"}
                      </span>
                    </div>
                    {tokenizerState.status === "ready" &&
                    tokenizerTokens.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {tokenizerTokens.map((token, index) => (
                          <span
                            key={example.language + "-tokenizer-" + index}
                            className="rounded-lg border border-[#d9d7ce] bg-[#faf9f5] px-2.5 py-2 font-mono text-[10px] text-[#606860]"
                            title={"token id " + token.id}
                          >
                            <span className="block">
                              {tokenLabel(token) || "∅"}
                            </span>
                            <span className="mt-1 block text-[8px] text-[#9a9b91]">
                              {token.id}
                            </span>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="rounded-xl border border-dashed border-[#cfcfc6] px-4 py-5 text-[12px] leading-6 text-[#858a82]">
                        {tokenizerState.status === "loading"
                          ? "Fetching the selected tokenizer before rendering its pieces."
                          : "Press Tokenize to render the selected tokenizer pieces."}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="attention" className="scroll-mt-8 pt-32">
        <SectionLabel number="04">
          Causal attention & lexical boundaries
        </SectionLabel>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-serif text-4xl tracking-[-0.035em] sm:text-5xl">
            How attention builds code meaning
          </h2>
        </div>
        <div className="mt-8 gap-7 text-[15px] leading-8 text-[#59615a] sm:grid-cols-2">
          Causal self-attention builds the representation at each position from
          that token and the available prefix. Each position is projected into a
          query, key, and value; query–key dot products produce scores, the
          causal mask assigns -Infinity score to future positions before
          softmax, and the resulting weights mix the value vectors into the
          position’s output. This lets an autoregressive model predict the next
          token from the sequence it has read so far. <sup>[04, 05]</sup>
          <br />
          <br />
          Token boundaries determine the units that participate in these
          information paths. Preserving lexical boundaries gives an keyword,
          operator, literal, or delimiter its own position in the sequence, so a
          query token can attend directly to the unit that carries the relevant
          grammatical or semantic role. A model can then connect an identifier
          to its declaration and uses, an operator to its operands, a delimiter
          to the region it opens or closes, and a type annotation to the value
          or expression it constrains. These direct token-to-token paths give
          the model a representation that follows the structure of the
          programming language. Lexical roles are visible at the token level,
          syntax is expressed through relationships among those roles, and
          semantics is built from their contextual composition.
          <br />
          <br />
          Consider the operator <code>{"<<="}</code>. With a subword split such
          as <code>{"<"}</code>, <code>{"<="}</code> or <code>{"<<"}</code>,{" "}
          <code>{"="}</code>, the compound operator occupies several key
          positions. A later query that uses the operator can distribute its
          attention across those fragments, and their value vectors must be
          combined to reconstruct that the sequence forms one grammatical unit
          with the left-shift-assignment meaning. With <code>{"<<="}</code>{" "}
          preserved as one lexical token, the same query has a single explicit
          key position for the complete operator while attending separately to
          its left-hand operand, right-hand operand, and surrounding statement
          context. Subword splits therefore scatter attention across fragments;
          clean lexical boundaries create clear attention paths for the
          operator’s syntax and semantics. This is the representation hypothesis
          tested by the comparison below.
        </div>

        <AttentionVisualization />
      </section>

      <section id="experiment" className="scroll-mt-8 pt-32">
        <SectionLabel number="05">Experiment</SectionLabel>
        <h2 className="max-w-4xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
          Training, Evaluation, and Results
        </h2>

        <div className="mt-8 grid gap-7 text-[15px] leading-8 text-[#59615a] sm:grid-cols-2">
          <p>
            Qwen3.5-SWE compares two supervised fine-tunes of{" "}
            <Link
              href="https://huggingface.co/Qwen/Qwen3.5-4B-Base"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#c9c5b9] underline-offset-4 transition hover:text-[#cf6b4b]"
            >
              Qwen3.5-4B-Base
            </Link>
            . Both variants use NVIDIA’s{" "}
            <Link
              href="https://huggingface.co/datasets/nvidia/Nemotron-SFT-SWE-v3.5"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#c9c5b9] underline-offset-4 transition hover:text-[#cf6b4b]"
            >
              Nemotron-SFT-SWE-v3.5
            </Link>
            , a SWE instruction-tuning dataset containing agentic trajectories
            with code, text, structured data, patches, and configuration
            artifacts. <sup>[06]</sup>
            <br />
            The Standard variant keeps the base tokenizer. The Extended-vocab
            variant adds 278 new lexical code tokens across
          </p>
          <p>
            various programming languages which includes the keywords,
            operators, delimiters, but does not consider the identifier such as
            variable names, and resizes the model vocabulary, exposes the added
            embedding rows as trainable token indices while applying the same
            LoRA supervised-fine-tuning recipe. The recipe uses the dataset’s
            train split and creates a seeded 90/10 train-test split.{" "}
            <sup>[05]</sup>
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "model card",
              "Qwen3.5-SWE variants",
              "https://huggingface.co/SamLegion888/Qwen3.5-SWE",
            ],
            [
              "dataset",
              "Nemotron-SFT-SWE-v3.5",
              "https://huggingface.co/datasets/nvidia/Nemotron-SFT-SWE-v3.5",
            ],
            [
              "fine-tuning notebook",
              "Open in Molab",
              "https://molab.marimo.io/notebooks/nb_9nSuZSHfW24oKTMuBJmaey",
            ],
            [
              "evaluation notebook",
              "Open in Molab",
              "https://molab.marimo.io/notebooks/nb_SULmbKQPPMR1zbdaQHcW2H",
            ],
          ].map(([label, title, href]) => (
            <ReferenceLink
              key={label}
              title={title}
              label={label}
              href={href}
            />
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="mt-4 max-w-md font-serif text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
              Benchmark Setup and Evaluation Criteria
            </h3>
            <div className="mt-5 space-y-5 text-[14px] leading-7 text-[#697068]">
              <p>
                I used{" "}
                <Link
                  href={"https://github.com/evalplus/evalplus"}
                  target="_blank"
                  className="text-oxblood underline"
                >
                  EvalPlus
                </Link>{" "}
                to evaluate the code-generation capability on HumanEval and
                MBPP. HumanEval focuses on function-level programming tasks,
                while MBPP uses natural-language problem statements paired with
                Python solutions. Their base suites measure agreement with the
                original task tests; HumanEval+ and MBPP+ add substantially
                larger extra-test suites that probe behavior across more inputs;
                EvalPlus describes these extensions as roughly 80× the original
                HumanEval tests and 35× the original MBPP tests. <sup>[07]</sup>
                <span>
                  For each tokenizer variant, the evaluation notebook uses the
                  corresponding model directory, generates one greedy completion
                  per task with
                </span>
              </p>
            </div>
          </div>

          <BenchmarkCard />
        </div>

        <div className="mt-8 grid gap-7 text-[15px] leading-8 text-[#59615a] sm:grid-cols-2">
          <p>
            <span>
              vLLM, and runs EvalPlus against the base and extended tests using
              the forced base prompt. The reported metric is <em>pass@1</em>:
              the percentage of tasks whose first generated solution passes the
              selected executable tests. <sup>[07]</sup>
            </span>
            <span>
              The Extended-vocab variant leads on HumanEval by 6.7 percentage
              points and on HumanEval+ by 8.0 points. Its HumanEval score falls
              by 5.4 points when the extra tests are added, compared with a
              6.7-point fall for standard, so the extended variant retains more
              of its base-test
            </span>
          </p>
          <p>
            <span>performance on this evaluation.</span>
            <span>
              Standard leads MBPP by 0.7 points and MBPP+ by 0.8 points. Both
              variants experience a similar MBPP-to-MBPP+ reduction of roughly
              eleven points, showing the additional pressure created by broader
              test coverage. Across this matched run, the results support a
              benchmark-specific effect: lexical vocabulary expansion helps the
              HumanEval family, while the original performance remains slightly
              stronger on MBPP. <sup>[07]</sup>
            </span>
          </p>
        </div>
      </section>

      <section id="tradeoffs" className="scroll-mt-8 pt-32">
        <SectionLabel number="06">Trade-offs</SectionLabel>
        <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
          Benefits and costs of lexical token boundaries.
        </h2>
        <div className="mt-8 space-y-6 text-[15px] leading-8 text-[#59615a]">
          <p>
            <strong>Token merging and sequence length.</strong> BPE learns
            frequent adjacent merges, so a standard tokenizer can represent
            spaces, brackets, and punctuation together with nearby code in units
            such as <code>{" return"}</code> or <code>{"):"}</code>. These
            merges reduce the number of sequence positions. Strict lexical
            boundaries separate the delimiter, operator, and keyword units,
            which can increase token count for the same source text and increase
            the number of key/value states held during autoregressive
            generation. <sup>[01]</sup>
          </p>
          <p>
            <strong>
              Where it helps, where the effect is small, and where it costs.
            </strong>{" "}
            Explicit lexical boundaries are most relevant when inputs contain
            recurring syntax, stable semantic roles, and structural
            relationships, such as programming languages, mathematical notation,
            markup, configuration files, and symbolic expressions. They can be
            less effective for corpora with many rare or open-ended identifiers,
            highly variable conventions, mixed domains, or tasks that benefit
            from reusable subword pieces across many types of text. In those
            settings, a larger specialized vocabulary can require more learned
            token embeddings while providing less reusable coverage for unseen
            forms.
          </p>
          <p>
            <strong>Practical limitation.</strong> The extended tokenizer is
            most useful when the corpus and model are designed around the same
            lexical units. It may not be worth the additional tokenizer,
            vocabulary, and deployment requirements for short or mostly
            unstructured inputs, or when broad compatibility and compact model
            artifacts are the primary goals. These conditions define the
            situations that future comparisons should measure.
          </p>
        </div>
      </section>

      <section id="references" className="scroll-mt-8 pt-32">
        <SectionLabel number="07">References</SectionLabel>
        <h2 className="font-serif text-4xl tracking-[-0.035em] sm:text-5xl">
          Reading list
        </h2>
        <ol className="mt-9 space-y-4 border-t border-[#d9d7ce] pt-5 text-[13px] leading-6 text-[#6c736b]">
          {REFERENCES.map(([number, author, title, href]) => (
            <li
              key={number}
              className="grid gap-2 sm:grid-cols-[34px_160px_1fr] sm:gap-4"
            >
              <span className="font-mono text-[10px] text-oxblood">
                {number}
              </span>
              <span className="text-[#454d47]">{author}</span>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[#c9c5b9] underline-offset-4 transition hover:text-oxblood"
              >
                {title}
              </Link>
            </li>
          ))}
        </ol>
        <div className="mt-14 rounded-[22px] bg-[#2f3833] p-6 text-[#e9e6dc] sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#aeb8ad]">
            citation
          </p>
          <pre className="mt-5 overflow-x-auto font-mono text-[11px] leading-6 text-[#d7d3c7]">
            <code>{`@misc{qwen35_swe,\n  title        = {Qwen3.5-SWE},\n  author       = {SamLegion888},\n  year         = {2026},\n  url          = {https://huggingface.co/SamLegion888/Qwen3.5-SWE}\n}`}</code>
          </pre>
        </div>
      </section>
    </article>
  );
}
