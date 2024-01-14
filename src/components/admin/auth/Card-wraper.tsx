"use client";
import React from "react";
import CardHeader from "./Header";
import Social from "./Social";
import Image from "next/image";

interface CardWraperProps {
  children: React.ReactNode;
  headrLabel: string;
  showSocial?: boolean;
}
const Cardwraper: React.FC<CardWraperProps> = ({
  children,
  headrLabel,
  showSocial,
}) => {
  return (
    <>
      <div className="min-w-[400px] w-[500px] shadow-md rounded-md bg-white p-3">
      <div className="flex items-center justify-center bg-black w-fit mx-auto aspect-square rounded-full p-3 border- border-[#FFD700]">
        <Image
          height={100}
          width={100}
          src={"/logo-new.png"}
          alt="logo"
          className=""
        />
      </div>
        <CardHeader />
        <div className="py-4 "> {children}</div>
        {showSocial && (
          <div className="w-full p-3 items-center justify-center">
            <Social />
          </div>
        )}
      </div>
    </>
  );
};

export default Cardwraper;
