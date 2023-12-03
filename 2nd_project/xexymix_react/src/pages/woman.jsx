import { MainSlideContainer } from "../components/main_slide_container";
import { gnbMenu } from "../data/gnb";
import { makeItemBox } from "../components/item_box";
import { womanItemInfo } from "../data/woman_item_info";
import { useState } from "react";
import { filteredItem } from "../func/filter_func";

export function Woman() {
  const [itemCategory, setItemCategory] = useState("전체");

  const chgItemCategory = (target) => {
    setItemCategory(target.innerText);
  };

  const womanData = gnbMenu.gnbCategory.filter((v) => v.txt === "우먼즈")[0];

  const makeCategoryList = [{ txt: "전체", link: "/woman" }, ...womanData.sub].map(
    (v) => (
      <div
        key={v.txt}
        className={itemCategory === v.txt ? "on" : ""}
        onClick={(e) => chgItemCategory(e.target)}
      >
        {v.txt}
      </div>
    )
  );

  function WomanItemEvery() {
    return womanItemInfo.map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }
  function WomanItemLeggings() {
    return filteredItem(womanItemInfo, "type", "leggings").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }
  function WomanItemTapered() {
    return filteredItem(womanItemInfo, "type", "tapered").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }
  function WomanItemTop() {
    return filteredItem(womanItemInfo, "type", "top").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }
  function WomanItemBottom() {
    return filteredItem(womanItemInfo, "type", "bottom").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }
  function WomanItemOuter() {
    return filteredItem(womanItemInfo, "type", "outer").map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
  }

  return (
    <>
      <MainSlideContainer category="WOMEN" />
      <h2 className="category-title">WOMENS</h2>
      <div className="category-container">
        <div className="category-list">{makeCategoryList}</div>
        <div className="category-item item-box-wrap">
          {itemCategory === "전체" && <WomanItemEvery />}
          {itemCategory === "레깅스" && <WomanItemLeggings />}
          {itemCategory === "테이퍼드팬츠" && <WomanItemTapered />}
          {itemCategory === "상의" && <WomanItemTop />}
          {itemCategory === "하의" && <WomanItemBottom />}
          {itemCategory === "아우터" && <WomanItemOuter />}
        </div>
      </div>
    </>
  );
}
