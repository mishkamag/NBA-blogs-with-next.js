import NavBar from "./components/NavBar";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "NBA Blogs",
  description: "Steps in next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
