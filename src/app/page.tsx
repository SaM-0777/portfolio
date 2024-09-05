import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-y-8 p-[4vw]" >
      <p className="uppercase text-lg" >Realmwave</p>
      <div >
        <h1 className="text-[36vh] leading-[32vh] text-center font-extrabold tracking-[0.03em] font-humane uppercase" >
          Fullstack
        </h1>
        <h1 className="text-[36vh] leading-[24vh] text-center font-extrabold tracking-[0.03em] font-humane uppercase" >
          Developer
        </h1>
      </div>
      <Link href={"mailto:realmwavesoftware@gmail.com"} className="flex items-center gap-x-2" >
        <span className="block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="uppercase text-sm border-b border-b-neutral-600" >
          {`realmwavesoftware@gmail.com`}
        </span>
      </Link>
    </main>
  );
}
