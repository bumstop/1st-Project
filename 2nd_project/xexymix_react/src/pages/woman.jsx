import { Link } from "react-router-dom";
import { MainSlideContainer } from "../components/main_slide_container";
import { gnbMenu } from "../data/gnb";
import { makeItemBox } from "../components/item_box";
import { womanItemInfo } from "../data/woman_item_info";

export function Woman() {
  const womanData = gnbMenu.gnbCategory.filter((v) => v.txt === "우먼즈")[0];
  const makeCategoryList = womanData.sub.map((v) => (
    <Link to={v.link} key={v.txt}>
      {v.txt}
    </Link>
  ));
  const makeCategoryItem = womanItemInfo.map((v, i) => (
    <div className="item-box" key={i}>
      {makeItemBox(v)}
    </div>
  ));

  return (
    <>
      <MainSlideContainer category="WOMEN" />
      <h2 className="category-title">WOMENS</h2>
      <div className="category-container">
        <div className="category-list">
          <Link to="/woman">전체</Link>
          {makeCategoryList}
        </div>
        <div className="category-item item-box-wrap">{makeCategoryItem}</div>
      </div>
    </>
  );
}
