import Image from "next/image";
import React from "react";
import BackButton from "./shared/BackButton";

const Header = () => {
    return (
        <div className="w-full  absolute z-20 top-3 left-1/2 transform -translate-x-1/2 max-w-[1500px] ">
            <div className="w-full flex justify-between items-center px-4">
                <div className="flex items-center h-full">
                    {" "}
                    <BackButton />
                </div>
             <div className="flex items-center">
                    <Image
                        height={100}
                        width={100}
                        src={"/logo-new.png"}
                        alt="logo"
                        className="mr-4"
                    />
                    <Image
                        height={100}
                        width={100}
                        src={"/weaverBird.png"}
                        alt="logo"
                        className="mr-4"
                    />
             </div>
            </div>
        </div>
    );
};

export default Header;
