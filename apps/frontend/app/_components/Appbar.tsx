"use client"
import React from "react";
import SignoutButton from "./SignoutButton";
import { useSession } from "next-auth/react";

const Appbar = () => {

  const {data: session, status} = useSession()
  console.log("From App Bar" ,status, session)

  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-600 shadow">
      <SignoutButton />
    </header>
  );
};

export default Appbar;
