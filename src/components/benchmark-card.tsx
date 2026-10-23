import { EXPERIMENT_RESULTS } from "@/constant/lexical";

export default function BenchmarkCard() {
  return (
    <div className="rounded-[26px] border border-[#d9d7ce] bg-[#f1f0ea] p-5 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#d9d7ce] pb-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7d8179]">
            results · pass@1 (%)
          </p>
          <p className="mt-2 text-[12px] text-[#777d75]">
            {"Higher is better (more tests passed)"}
          </p>
        </div>
        <div className="flex gap-4 text-[10px] uppercase tracking-[0.12em] text-[#777d75]">
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-sm bg-[#aaa99e]" />
            Standard
          </span>
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-sm bg-[#2e8b74]" />
            Extended-vocab
          </span>
        </div>
      </div>
      <div
        role="img"
        aria-label="Bar chart comparing Standard and Extended-vocab pass at 1 results"
        className="mt-6 space-y-6"
      >
        {EXPERIMENT_RESULTS.map((result) => (
          <div key={result.benchmark}>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <span className="font-serif text-lg text-[#3d4540]">
                {result.benchmark}
              </span>
              <span className="text-right text-[10px] uppercase tracking-[0.12em] text-[#96988f]">
                {result.suite}
              </span>
            </div>
            <div className="space-y-2">
              <div
                className="flex items-center gap-2"
                aria-label={"Standard " + result.standard + "%"}
              >
                <span className="w-16 text-[10px] text-[#898c83]">
                  standard
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#deddd5]">
                  <div
                    className="h-full rounded-full bg-[#aaa99e] transition-all duration-500"
                    style={{ width: result.standard + "%" }}
                  />
                </div>
                <span className="w-10 text-right font-mono text-[10px] text-[#60675f]">
                  {result.standard.toFixed(1)}%
                </span>
              </div>
              <div
                className="flex items-center gap-2"
                aria-label={"Extended-vocab " + result.extended + "%"}
              >
                <span className="w-16 text-[10px] text-[#898c83]">
                  extended
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#deddd5]">
                  <div
                    className="h-full rounded-full bg-[#2e8b74] transition-all duration-500"
                    style={{ width: result.extended + "%" }}
                  />
                </div>
                <span className="w-10 text-right font-mono text-[10px] text-[#2e8b74]">
                  {result.extended.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
