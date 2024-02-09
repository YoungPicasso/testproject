import Link from "next/link";

export default function MiddleBar() {
  return (
    <>
      <div className="w-full bg-white h-16 flex gap-8 ml-12">
        <p className="self-center text-sm cursor-pointer">Categorieën</p>
        <p className="self-center text-sm cursor-pointer">
          Cadeaus & Inspiratie
        </p>
        <p className="self-center text-sm  cursor-pointer">Aanbiedingen</p>
        <div className="ml-80 flex flex-row gap-8">
          <p className="self-center text-xs">Zakelijk</p>
          <p className="self-center text-xs">
            <Link href="/kadom">Cadeaukaart</Link>
          </p>
          <p className="self-center text-xs">Bestelstatus</p>
          <p className="self-center text-xs">Klantenservice</p>
          <p className="self-center text-xs mr-16">NL</p>
        </div>
      </div>
    </>
  );
}
