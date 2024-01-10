import Sidebar from "@/components/admin/Sidebar";
import { redirect } from "next/navigation";
import React from "react";
import { cookies } from "next/headers";

const isAuthenticated = async () => {
  const token = cookies().get("token");
  const api_uri =
    process.env.NODE_ENV === "development"
      ? process.env.DEVELOPMENT_API_URL
      : process.env.API_URL;
  return await fetch(`${api_uri}/api/v1/auth/session?role=ADMIN`, {
    headers: {
      authorization: `Bearer ${token?.value}`,
    },
  }).then(async (res) => {
    const session = await res.json();
    // console.log(session)
    // console.log("=>(layout.tsx:16) session", session);
    return session.isActive;
  });
};

const layout =  async({ children }: { children: React.ReactNode }) => {
  const isAuth =  await isAuthenticated();

  if (!isAuth) {
    redirect("/auth/login");
  }

  return (
    <div className=" ">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default layout;
