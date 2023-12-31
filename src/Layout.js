import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Layout = ({ isChinese, setIsChinese }) => {
  return (
    <div>
      <Nav isChinese={isChinese} setIsChinese={setIsChinese} />

      <Outlet />

      <Footer isChinese={isChinese} />
    </div>
  );
};

export default Layout;
