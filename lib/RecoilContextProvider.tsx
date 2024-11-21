"use client";
import React from "react";
import { RecoilRoot } from "recoil";
interface RecoilContextProviderProps {
  children: React.ReactNode;
}
const RecoilContextProvider = ({ children }: RecoilContextProviderProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilContextProvider;
