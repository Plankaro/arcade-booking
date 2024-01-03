"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Social = () => {
    return (
        <Link
            href={"/api/auth/google"}
            className="flex w-full gap-x-2 items-center justify-center p-3 rounded-md bg-[#26648a]"
        >
            <FcGoogle size={24} />
        </Link>
    );
};

export default Social;
