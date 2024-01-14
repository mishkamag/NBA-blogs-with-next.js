import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./nba_PNG16.png";

const NavBar = ({ user }) => {
  return (
    <nav>
      <Link href="/">
        <Image src={Logo} alt="Nba logo" width={70} quality={100} />
      </Link>
      <h1>Nba World</h1>
      <Link href="/">Go Home</Link>
      <Link href="/blogs">Go Blogs</Link>
      {user && <span>Hello {user.email}</span>}
    </nav>
  );
};

export default NavBar;
