import React, { useState } from "react";

import Search from "../components/Search";
import Picture from "../components/Picture";

import axios from "axios";

const Homepage = ({ isChinese }) => {
  // usestate
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // 這個 state 是為了避免使用者輸入 xxx 但沒按下 search button 的前提下
  // 按了 load more button 會跑出 xxx 的 bug 情況
  const [currentSearch, setCurrentSearch] = useState("");

  // 從 Pexels 拿到的金鑰，用環境變數保護起來
  const APIKey = process.env.REACT_APP_MY_API;
  // 精選照片的 URL，後面的參數包含 page & per_page
  // page 是指要的 page number (第 x 分頁)； per_page 是指(第 x 分頁)要的照片張數
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=12";
  // 搜索照片的 URL，後面的參數包含 query & page & per_page
  // query 是指要搜尋的相片類型
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&page=1&per_page=12`;

  // 按下 load more button 之事件處理
  const morePicHandler = async () => {
    // 下一個渲染週期才會更新 state 中的 page 值
    setPage(page + 1);
    // console.log(page)

    let newURL;

    // 為最初的精選照片時
    if (currentSearch === "") {
      // 為了避免上述未即時更新的情況，這邊要寫 page + 1，而非 page
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=12`;
    } else {
      // 為所記錄的搜尋內容時
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=${
        page + 1
      }&per_page=12`;
    }

    // 拿到下個分頁的照片
    try {
      let response = await axios.get(newURL, {
        headers: { Authorization: APIKey },
      });

      // 之前的 array + 新拿到的 array
      // 使用 concat() 處理
      setData(data.concat(response.data.photos));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        initialURL={initialURL}
        searchURL={searchURL}
        APIKey={APIKey}
        input={input}
        setInput={setInput}
        setData={setData}
        setCurrentSearch={setCurrentSearch}
        isChinese={isChinese}
      />

      <div className="pictures">
        {data.map((img, index) => {
          // key prop 寫在這裡 (Each child in a list should have a unique key prop)
          return <Picture img={img} key={index} isChinese={isChinese} />;
        })}
      </div>

      <div className="morePicture">
        <button onClick={morePicHandler}>
          {isChinese ? "載入更多" : "load more"}
        </button>
      </div>
    </div>
  );
};

export default Homepage;
