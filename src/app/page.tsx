"use client";

import Image from "next/image";
import NavBar from "./Components/NavBar";
import TopBar from "./Components/TopBar";
import HomeItem from "./Components/HomeItem";
import MiddleBar from "./Components/MiddleBar";
import ExtraBar from "./Components/ExtraBar";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <div className="flex flex-col w-full">
        <TopBar />
        <NavBar naam="bol." />
        <MiddleBar />
        <ExtraBar />
      </div>
      <div className="flex justify-center mt-12">
        <div className="w-full max-w-screen-xl h-80">
          <img src="/bolFoto.jpg" alt="Bol" className="w-full h-80 absolute" />
        </div>
      </div>

      <div className="flex place-content-around mt-8">
        <HomeItem
          backgroundcolor="bg-pink-300"
          mainInhoud="Tot 60% korting"
          extraInhoud="op o.a. Dreft & Lenor"
        />
        <HomeItem
          backgroundcolor="bg-pink-200"
          mainInhoud="Verwen je geliefde met"
          extraInhoud="tot 60% korting* op parfum"
        />
        <HomeItem
          backgroundcolor="bg-green-400"
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
