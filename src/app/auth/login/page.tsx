import Loginform from "@/components/admin/auth/Login-form";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const isAuth = true;
  if(isAuth){
    redirect("/admin")
  }
  return <Loginform />;
};

export default page;
