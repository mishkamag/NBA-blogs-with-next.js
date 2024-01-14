import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/dist/server/api-utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }
  return (
    <>
      <nav>
        <h1>Nba Dairy</h1>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
