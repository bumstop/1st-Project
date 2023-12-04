import { useEffect, useState } from "react";
import { gnbMenu } from "../data/gnb";
import { makeItemBox } from "../components/item_box";
import { filteredItem } from "../func/filter_func";

export function CategoryItemContainer(props) {
  const [itemCategory, setItemCategory] = useState("전체");

  const [filterState, setFilterState] = useState("all");

  useEffect(() => {
    categoryListArr.forEach((v) => itemCategory === v.txt && setFilterState(v.type));
    console.log("선택 카테고리:", itemCategory);
  }, [itemCategory]);

  const chgItemCategory = (target) => {
    setItemCategory(target.innerText);
  };

  // 아이템 카테고리 데이터
  const defCategory = [
    { txt: "우먼즈", type: "woman" },
    { txt: "맨즈", type: "man" },
  ];
  const categoryData = gnbMenu.gnbCategory.filter((v) => v.txt === props.page)[0].sub;

  // 필터기준에 따라 들어갈 데이터 변경
  const categoryListArr = [
    { txt: "전체", type: "all" },
    ...(props.filterType === "type" ? categoryData : defCategory),
  ];
  // let filterData = props.filterType === "type" ?
  {
    console.log(filteredItem(props.info, props.filterType, "신상"));
  }

  // 아이템 카테고리 생성
  const makeCategoryItem = () => {
    const filterData =
      filterState === "all"
        ? props.info
        : filteredItem(props.info, props.filterType, filterState);

    return filterData.map((v, i) => (
      <div className="item-box" key={i}>
        {makeItemBox(v)}
      </div>
    ));
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
