import MainBody from "@/components/(Admin)/MainBody";
import Navbar from "@/components/(Admin)/Navbar";
import Sidebar from "@/components/(Admin)/Sidebar1";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex   items-center p-4 ">
   
      <div className="flex w-full items-center justify-between gap-4">
        <MainBody />
      </div>
    </div>
  );
};

export default page;
