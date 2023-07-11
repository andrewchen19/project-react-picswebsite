import React from "react";

const Footer = ({ isChinese }) => {
  return (
    <div className="footer">
      {/* if 的簡潔語法，Ternary Operator */}
      {isChinese ? (
        <p>這個網站的素材都是由 Pexels 所提供</p>
      ) : (
        <p>This website's materials are all provided by Pexels</p>
      )}
      <p>&#169;Andrew Chen 2023</p>
    </div>
  );
};

export default Footer;
