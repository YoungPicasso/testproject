import Image from "next/image";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";
import HomeItem from "../Components/HomeItem";
import MiddleBar from "../Components/MiddleBar";
import ExtraBar from "../Components/ExtraBar";

export default function kadom() {
  return (
    <main className="flex flex-col min-h-screen ">
      <div className="flex flex-col w-full">
        <TopBar />
        <NavBar naam="bol.kadom" />

        <MiddleBar />
        <ExtraBar />
      </div>
      <div className="flex justify-center mt-12">
        <div className="w-full max-w-screen-xl h-80">
          <img src="/bolFoto.jpg" alt="Bol" className="w-full h-80 absolute" />
          <img
            src="/groen.jpg"
            alt="Bolkadom"
            className="absolute h-80 right-52 w-72"
          />
          <img
            src="/bol2.png"
            alt="Bolkadom"
            className="absolute h-80 right-52 w-72"
          />
        </div>
      </div>
      <div className="flex place-content-around mt-8">
        <HomeItem
          backgroundcolor="bg-pink-200"
          mainInhoud="Tot 60% korting"
          extraInhoud="op o.a. Dreft & Lenor"
        />
        <HomeItem
          backgroundcolor="bg-pink-200"
          mainInhoud="Verwen je geliefde met"
          extraInhoud="tot 60% korting* op parfum"
        />
        <HomeItem
          backgroundcolor="bg-green-300"
          mainInhoud="Tot 25,- Select-korting"
          extraInhoud="op Samsung"
        />
        <HomeItem
          backgroundcolor="bg-green-300"
          mainInhoud="Tot 25% Select-korting"
          extraInhoud="op koffie"
        />
      </div>
    </main>
  );
}
