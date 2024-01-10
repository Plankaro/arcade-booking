import React, { FC } from "react";
interface ContainerProps {
    children: React.ReactNode;
}
const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="w-full sm:max-w-[1120px] 2xl:max-w-[1920px] bg-black ">
            {children}
        </div>
    );
};

export default Container;
