import React from "react";
import Link from "next/link";

const AuthLayout = ({ children }) => {
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
