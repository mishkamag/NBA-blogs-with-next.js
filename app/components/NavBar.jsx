import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./nba_PNG16.png";
import LogoutButton from "./LogoutButton";

const NavBar = ({ user }) => {
  return (
    <nav>
      <Link href="/">
        <Image src={Logo} alt="Nba logo" width={70} quality={100} />
      </Link>
      <Link className="text-primary" href="/blogs/create">
        Create Blog
      </Link>
      <Link href="/">Go Home</Link>
      <Link href="/blogs" className="mr-auto">
        Go Blogs
      </Link>
      {user && <span>Hello {user.email}</span>}
      <LogoutButton />
    </nav>
  );
};

export default NavBar;
