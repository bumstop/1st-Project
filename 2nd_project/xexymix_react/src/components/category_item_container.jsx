import { useEffect, useState } from "react";
import { gnbMenu } from "../data/gnb";
import { makeItemBox } from "../components/item_box";
import { filteredItem } from "../func/filter_func";
import { manItemInfo } from "../data/man_item_info";
import { womanItemInfo } from "../data/woman_item_info";

export function CategoryItemContainer(props) {
  const [itemCategory, setItemCategory] = useState("전체");

  const chgItemCategory = (target) => {
    setItemCategory(target.innerText);
  };

  const [filterState, setFilterState] = useState("all");

  useEffect(() => {
    categoryListArr.forEach((v) => itemCategory === v.txt && setFilterState(v.type));
    console.log("선택 카테고리:", itemCategory);
  }, [itemCategory]);


  // 아이템 카테고리 데이터
  const defCategory = [
    { txt: "우먼즈", type: "woman" },
    { txt: "맨즈", type: "man" },
  ];
  const categoryData =
    props.filterType === "type"
      ? gnbMenu.gnbCategory.filter((v) => v.txt === props.condition)[0].sub
      : defCategory;

  // 필터기준에 따라 들어갈 데이터 변경
  const categoryListArr = [{ txt: "전체", type: "all" }, ...categoryData];

  // 아이템 카테고리 생성
  const makeCategoryItem = () => {
    let filterData;

    const categoryItem = (data) =>
      data.map((v, i) => (
        <div className="item-box" key={i}>
          {makeItemBox(v)}
        </div>
      ));
    // 맨즈, 우먼즈 페이지 아이템 필터링 조건
    if (props.filterType === "type" && filterState === "all") {
      filterData = props.info;
      return categoryItem(filterData);
    }
    if (props.filterType === "type" && filterState !== "all") {
      filterData = filteredItem(props.info, props.filterType, filterState);
      return categoryItem(filterData);
    }
    // 신상할인, 베스트 페이지 아이템 필터링 조건
    if (props.filterType === "iconContent" && filterState === "all") {
      filterData = filteredItem(props.info, props.filterType, props.condition);
      return categoryItem(filterData);
    }
    if (props.filterType === "iconContent" && filterState !== "all") {
      const info = filterState === "woman" ? womanItemInfo : manItemInfo;
      filterData = filteredItem(info, props.filterType, props.condition);
      return categoryItem(filterData);
    }
  };

  return (
    <div className="category-item-container">
      <h2 className="category-title">{props.category}</h2>
      <div className="category-list">
        {categoryListArr.map((v) => (
          <div
            key={v.txt}
            className={itemCategory === v.txt ? "on" : ""}
            onClick={(e) => chgItemCategory(e.target)}>
            {v.txt}
          </div>
        ))}
      </div>
      <div className="category-item item-box-wrap">{makeCategoryItem()}</div>
    </div>
  );
}
