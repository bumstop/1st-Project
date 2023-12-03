import { MainSlideContainer } from "../components/main_slide_container";
import { gnbMenu } from "../data/gnb";
import { makeItemBox } from "../components/item_box";
import { manItemInfo } from "../data/man_item_info";
import { useState } from "react";
import { filteredItem } from "../func/filter_func";
export function Man() {
  const [itemCategory, setItemCategory] = useState("전체");

  const chgItemCategory = (target) => {
    setItemCategory(target.innerText);
  };

  const manData = gnbMenu.gnbCategory.filter((v) => v.txt === "맨즈")[0];

  const makeCategoryList = [{ txt: "전체", link: "/man" }, ...manData.sub].map((v) => (
    <div
      key={v.txt}
      className={itemCategory === v.txt ? "on" : ""}
      onClick={(e) => chgItemCategory(e.target)}
    >
      {v.txt}
    </div>
  ));

  function ManItemEvery() {
    return manItemInfo.map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }

  function ManItemTop() {
    return filteredItem(manItemInfo, "type", "top").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }
  function ManItemBottom() {
    return filteredItem(manItemInfo, "type", "bottom").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }
  function ManItemOuter() {
    return filteredItem(manItemInfo, "type", "outer").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }

  return (
    <>
      <MainSlideContainer category="MENS" />
      <h2 className="category-title">MENS</h2>
      <div className="category-container">
        <div className="category-list">{makeCategoryList}</div>
        <div className="category-item item-box-wrap">
          {itemCategory === "전체" && <ManItemEvery />}
          {itemCategory === "상의" && <ManItemTop />}
          {itemCategory === "하의" && <ManItemBottom />}
          {itemCategory === "아우터" && <ManItemOuter />}
        </div>
      </div>
    </>
  );
}
