import React from "react";

const Picture = ({ img, isChinese }) => {
  console.log(img);
  return (
    <div className="picture">
      {isChinese ? (
        <p>攝影師：{img.photographer}</p>
      ) : (
        <p>Photographer：{img.photographer}</p>
      )}

      <div className="imageContainer">
        <img src={img.src.large} alt="一張圖片" />
      </div>

      {isChinese ? (
        <p>
          查看全圖：
          <a href={img.src.large} target="_blank">
            按我一下
          </a>
        </p>
      ) : (
        <p>
          full image：
          <a href={img.url} target="_blank">
            click me
          </a>
        </p>
      )}
    </div>
  );
};

export default Picture;
