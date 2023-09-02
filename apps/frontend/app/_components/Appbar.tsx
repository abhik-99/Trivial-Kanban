import React from "react";
import SignoutButton from "./SignoutButton";

const Appbar = () => {
  return (
    <header className="flex justify-end gap-4 p-4 bg-gradient-to-b from-blue-900 to-black shadow">
      <SignoutButton />
    </header>
  );
};

export default Appbar;
