import React from "react";
import NavButton from "./NavButton";

export default function NavBar(props: { naam: string }) {
  return (
    <>
      <div className="flex justify-start place-content-evenly bg-blue-800 w-full h-20">
        <NavButton
          name={props.naam}
          Link="/"
          classname="font-black text-white ml-12 text-5xl"
        ></NavButton>

        <div></div>
        <input
          className="rounded-full bg-white text-xs ml-44  p-6 h-4 w-1/2 self-center w-1/2 placeholder-black-400"
          placeholder="Waar ben je naar opzoek?"
        />
        <NavButton
          name="Inloggen"
          Link="/login"
          classname="text-white text-xs ml-56"
        ></NavButton>
      </div>
    </>
  );
}
