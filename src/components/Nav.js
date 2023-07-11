import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ isChinese, setIsChinese }) => {
  // 當下拉式選單有所變更時之事件處理
  const langHandeler = (e) => {
    if (e.target.value === "english") {
      setIsChinese(false);
    } else {
      setIsChinese(true);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          {/* if 的簡潔語法，Ternary Operator */}
          {isChinese ? <Link to="/">首頁</Link> : <Link to="/">Home</Link>}
        </li>
      </ul>

      <select onChange={langHandeler}>
        <option value="chinese" selected>
          中文
        </option>
        <option value="english">English</option>
      </select>
    </nav>
  );
};

export default Nav;
