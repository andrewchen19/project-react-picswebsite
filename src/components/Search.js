import React, { useEffect } from "react";

import axios from "axios";

const Search = ({
  initialURL,
  searchURL,
  APIKey,
  input,
  setInput,
  setData,
  setCurrentSearch,
  isChinese,
}) => {
  // 第一次渲染時，就先用 initialURL 執行一次，讓精選照片跑出來
  useEffect(() => {
    searchHandler(initialURL);
  }, []);

  // 更動輸入欄之事件處理
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  // 按下 search button 之事件處理
  const searchHandler = async (URL) => {
    try {
      // 使用 axios 就不需要寫 fetch & response.json()
      // 這邊的 response 除了 headers 之外，也能直接取得 data 來使用
      let response = await axios.get(URL, {
        // 在 headers (標頭) 新增 Authorization 屬性，以提供金鑰
        headers: { Authorization: APIKey },
      });
      // console.log(response);
      setData(response.data.photos);
      // 紀錄輸入框所輸入的內容
      setCurrentSearch(input);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search">
      <input type="text" className="input" onChange={inputHandler} />

      {/* function with argument */}
      <button
        onClick={() => {
          searchHandler(searchURL);
        }}
      >
        {isChinese ? "搜尋" : "search"}
      </button>
    </div>
  );
};

export default Search;
