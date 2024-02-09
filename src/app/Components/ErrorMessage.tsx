import React from "react";

export default function ErrorMessage(props: { message: string }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full"
      role="alert"
    >
      <strong className="font-bold">Foutmelding:</strong>
      <span> {props.message}</span>
    </div>
  );
}
