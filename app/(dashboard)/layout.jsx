import React from "react";
import NavBar from "../components/NavBar";

const DashboardLayout = ({ children }) => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};

export default DashboardLayout;
