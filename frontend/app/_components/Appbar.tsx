import React from "react";
import SignoutButton from "./SignoutButton";

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-600 shadow">
      <SignoutButton />
    </header>
  );
};

export default Appbar;
