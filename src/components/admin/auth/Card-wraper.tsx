"use client";
import React from "react";
import CardHeader from "./Header";
import Social from "./Social";

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
        <div className="min-w-[400px] w-[500px] shadow-md rounded-md bg-white p-3">
            <CardHeader />
            <div className="py-4 "> {children}</div>
            {showSocial && (
                <div className="w-full p-3 items-center justify-center">
                    <Social />
                </div>
            )}
        </div>
    );
};

export default Cardwraper;
