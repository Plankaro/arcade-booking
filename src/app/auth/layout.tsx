import ThemeRegistry from "@/theme/ThemeRegistry";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeRegistry>
      <div className="h-screen flex flex-col gap-4 items-center justify-start pt-[4rem]">
        {children}
        <Link href="/" className=" inline-flex items-center justify-center gap-2 hover:underline">
          <FaChevronLeft />
          Back to home
        </Link>
      </div>
    </ThemeRegistry>
  );
};

export default layout;
