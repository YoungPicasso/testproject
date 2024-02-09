import React from "react";
import Link from "next/link";

export default function NavButton(props: {
  name: string;
  Link: string;
  classname: string;
}) {
  return (
    <>
      <button className={props.classname}>
        <Link href={props.Link}>{props.name}</Link>
      </button>
    </>
  );
}
