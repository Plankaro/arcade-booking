import React, { FC } from "react";
interface ContainerProps {
    children: React.ReactNode;
}
const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="w-full  bg-black ">
            {children}
        </div>
    );
};

export default Container;
