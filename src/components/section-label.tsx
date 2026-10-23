export default function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#7c817b]">
      <span className="font-mono text-oxblood">{number}</span>
      <span className="h-px w-8 bg-[#d7d3ca]" />
      <span>{children}</span>
    </div>
  );
}
