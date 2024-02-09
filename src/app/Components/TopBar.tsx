export default function TopBar() {
  return (
    <>
      <div className="w-full bg-white h-8 flex gap-8 ml-12">
        <p className="self-center text-xs text-blue-800 cursor-pointer">
          <span className="font-bold">Gratis</span> verzending vanaf 20,-
        </p>
        <p className="self-center text-xs text-blue-800 cursor-pointer">
          Bezorging dezelfde dag, 's avonds of in het weekend*
        </p>
        <p className="self-center text-xs text-blue-800 cursor-pointer">
          <span className="font-bold">Gratis</span> retourneren
        </p>
        <p className="ml-80 text-xs self-center text-green-600">
          <span className="font-bold">Select </span>
          Ontdek nu de 4 voordelen
        </p>
      </div>
    </>
  );
}
