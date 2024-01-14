import ThemeRegistry from "@/theme/ThemeRegistry";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeRegistry>
      <div className="h-screen flex flex-col gap-4 items-center justify-start pt-[4rem]">
        {children}
      </div>
    </ThemeRegistry>
  );
};

export default layout;
