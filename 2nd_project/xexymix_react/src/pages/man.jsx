import { Link } from "react-router-dom";
import { MainSlideContainer } from "../components/main_slide_container";
import { gnbMenu } from "../data/gnb";
import { makeItemBox } from "../components/item_box";
import { manItemInfo } from "../data/man_item_info";
export function Man() {
  const manData = gnbMenu.gnbCategory.filter((v) => v.txt === "맨즈")[0];
  const makeCategoryList = manData.sub.map((v) => (
    <Link to={v.link} key={v.txt}>
      {v.txt}
    </Link>
  ));
  const makeCategoryItem = manItemInfo.map((v,i) => (
    <div className="item-box" key={i}>{makeItemBox(v)}</div>
  ));
  return (
    <>
      <MainSlideContainer category="MENS" />
      <h2 className="category-title">MENS</h2>
      <div className="category-container">
        <div className="category-list">
          <Link to="/man">전체</Link>
          {makeCategoryList}
        </div>
        <div className="category-item item-box-wrap">{makeCategoryItem}</div>
      </div>
    </>
  );
}
