"use client";
import { ReactNode } from "react";
import AuthContext from "./AuthContext";
type ProviderPropType = {
  children: ReactNode;
};
const Providers = ({ children }: ProviderPropType) => {
  return (<AuthContext>{children}</AuthContext>);
};

export default Providers;
