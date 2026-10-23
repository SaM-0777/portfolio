import { tokenLabel } from "@/lib/lexical";

export interface AttentionVisualizationProps {
  activeToken: DemoToken;
  attentionTokens: DemoToken[];
  selectedToken: number;
  setSelectedToken: (token: number) => void;
  matrix: number[][];
}

export default function AttentionVisualization({
  activeToken,
  attentionTokens,
  selectedToken,
  setSelectedToken,
  matrix,
}: AttentionVisualizationProps) {
  return (
    <div className="mt-9 overflow-hidden rounded-[26px] border border-[#d9d7ce] bg-[#262d2a] text-[#f4f2e9]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#414a45] px-5 py-4 sm:px-7">
        <div>
          <p className="text-[10px] uppercase tracking-[0.17em] text-[#aeb8ad]">
            attention layer
          </p>
          <p className="mt-1 font-mono text-[11px] text-[#e4e0d5]">
            {activeToken
              ? `${tokenLabel(activeToken)}  /  ${activeToken.id}`
              : "waiting for tokens"}
          </p>
        </div>
      </div>
      <div className="border-b border-[#414a45] p-5 sm:p-7">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.16em] text-[#aeb8ad]">
            token / id
          </span>
          <span className="font-mono text-[10px] text-[#78837b]">
            click to focus
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {attentionTokens.map((token, index) => (
            <button
              key={`${index}-attention`}
              type="button"
              onClick={() => setSelectedToken(index)}
              className={`min-w-14.5 rounded-lg border px-2 py-2 text-center font-mono text-[10px] transition duration-200 ${index === selectedToken ? "border-[#e7a078] bg-[#594138] text-[#fff5e8]" : "border-[#4c5851] bg-[#303a35] text-[#b9c4b9] hover:border-[#7a9182]"}`}
            >
              <span className="block truncate">{tokenLabel(token)}</span>
              <span className="mt-1 block text-[9px] text-[#839087]">
                {token.id}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-8 p-5 sm:p-7 ">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#aeb8ad]">
              attention weights
            </p>
            <span className="font-mono text-[10px] text-[#78837b]">
              softmax(QKᵀ / √d)
            </span>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#414a45] bg-[#303a35] p-3">
            <div
              className="grid min-w-117.5 gap-1"
              style={{
                gridTemplateColumns: `56px repeat(${attentionTokens.length || 1}, minmax(20px, 1fr))`,
              }}
            >
              <div />
              <div className="contents">
                {attentionTokens.map((token, index) => (
                  <div
                    key={`col-${index}`}
                    className={`truncate px-1 text-center font-mono text-[9px] ${index === selectedToken ? "text-[#e7a078]" : "text-[#78837b]"}`}
                  >
                    {tokenLabel(token)}
                  </div>
                ))}
              </div>
              {matrix.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="contents">
                  <div
                    className={`flex items-center truncate pr-2 font-mono text-[9px] ${rowIndex === selectedToken ? "text-[#e7a078]" : "text-[#78837b]"}`}
                  >
                    {tokenLabel(attentionTokens[rowIndex])}
                  </div>
                  {row.map((weight, columnIndex) => (
                    <button
                      key={`${rowIndex}-${columnIndex}`}
                      type="button"
                      aria-label={`attention from ${tokenLabel(attentionTokens[rowIndex])} to ${tokenLabel(attentionTokens[columnIndex])}: ${Math.round(weight * 100)} percent`}
                      onClick={() => setSelectedToken(rowIndex)}
                      className="h-7 rounded-[3px] transition duration-200 ring-1 ring-[#e7a078]/10"
                      style={{
                        backgroundColor: `rgba(231,160,120,${0.0 + weight * 0.88})`,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-6 text-[9px] uppercase tracking-[0.14em] text-[#78837b]">
            <span>low activation</span>
            <span className="flex items-center gap-1">
              {[0.2, 0.45, 0.7, 0.95].map((opacity) => (
                <i
                  key={opacity}
                  className="h-2 w-2 rounded-sm"
                  style={{
                    backgroundColor: `rgba(231,160,120,${opacity})`,
                  }}
                />
              ))}
            </span>
            <span>high activation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
