import Link from "next/link";

export interface ReferenceLinkProps {
  label: string;
  href: string;
  title: string;
}

export default function ReferenceLink({
  label,
  href,
  title,
}: ReferenceLinkProps) {
  return (
    <Link
      key={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-[#d9d7ce] bg-[#eeece5] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[#cf6b4b]"
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#9a9b91]">
        {label}
      </span>
      <span className="mt-3 block text-[12px] text-[#454d47] group-hover:text-[#cf6b4b]">
        {title} <span aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
