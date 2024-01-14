import React from "react";
import NavBar from "../components/NavBar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const DashboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <NavBar user={data.session.user} />
      {children}
    </main>
  );
};

export default DashboardLayout;
