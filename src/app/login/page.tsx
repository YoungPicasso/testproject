"use client"; // This is a client component 👈🏽

import { SetStateAction, useState } from "react";
import ErrorMessage from "../Components/ErrorMessage";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleError = () => {
    setShowError(!showError);
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleError();
  };

  return (
    <>
      <div className="flex justify-center items-start w-2/5 flex-col border border-grey m-auto mt-16">
        <h1 className="font-extrabold text-6xl ml-8 text-blue-800 mt-8">
          <Link href="/">bol.</Link>
        </h1>
        <h2 className="font-extrabold text-2xl ml-8">Inloggen</h2>
        <form onSubmit={login}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 ml-8 mt-8 p-4 rounded w-4/5 focus:border-blue-700 focus:border-l-4"
            placeholder="E-mailadres"
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-500 ml-8 mt-2 p-4 rounded w-4/5 focus:border-blue-700 focus:border-l-4"
            placeholder="Wachtwoord"
          ></input>
          <p className="ml-8 mt-4 text-blue-800 underline cursor-pointer">
            Wachtwoord vergeten?
          </p>
          <button
            type="submit"
            className="bg-blue-600 text-white ml-8 mt-12 p-3 rounded"
          >
            Inloggen
          </button>
        </form>
        <p className="ml-8 mt-4">
          Ben je nog niet bekend bij ons? Maak dan eerst een nieuw account aan{" "}
          <span className="text-blue-700 underline cursor-pointer">
            voor jezelf
          </span>{" "}
          of{" "}
          <span className="text-blue-700 underline cursor-pointer">
            je bedrijf
          </span>
          .
        </p>
        <p className="text-center w-full mt-8 mb-8">
          <span className="underline text-blue-800 mr-2 cursor-pointer">
            Privacy
          </span>
          {"    "}
          <span className="underline text-blue-800 ml-2 cursor-pointer">
            Cookies
          </span>
        </p>

        {showError && <ErrorMessage message="onjuiste inloggegevens" />}
      </div>
    </>
  );
}
