import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./nba_PNG16.png";

const NavBar = () => {
  return (
    <nav>
      <Image src={Logo} alt="Nba logo" width={70} quality={100} />
      <h1>Nba World</h1>
      <Link href="/">Go Home</Link>
      <Link href="/blog">Go Blogs</Link>
    </nav>
  );
};

export default NavBar;
