export default function ExtraBar() {
  return (
    <>
      <div className="w-full bg-blue-50 h-8 flex justify-end gap-8 ">
        <p className="self-center text-sm">Carnaval</p>
        <p className="self-center text-sm">Valentijnscadeau</p>
        <p className="self-center text-sm">Wintersport</p>
        <p className="self-center text-sm">Fashionsale</p>
        <p className="text-blue-700 self-center font-extrabold text-xl mr-12">
          Select-Deals {">"}
        </p>
      </div>
    </>
  );
}
