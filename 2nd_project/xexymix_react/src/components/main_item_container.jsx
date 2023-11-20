import { manItemInfo } from "../data/man_item_info";
import { womanItemInfo } from "../data/woman_item_info";

import { makeItemBox } from "./item_box.jsx";

const manItemInfoValues = Object.values(manItemInfo);
const womanItemInfoValues = Object.values(womanItemInfo);

export function MainItemContainer() {
  let filterByType = ["outer", "bottom"];

  const filteredItemArr = (filterBy, filterBy) =>
    manItemInfoValues.filter((v) => filterBy.every((i) => v.filterBy.includes(i)));

  console.log(filteredItemArr(filterByType, ));

  return (
    <div className="main-item-container">
      <div className="seeing-box"></div>
      <div className="main-item-box">
        <div className="item-box-wrap man-item-box-wrap">
          {manItemInfoValues.map((v, i) => (
            <div className="item-box" data-index={i} key={v.name}>
              {makeItemBox(v)}
            </div>
          ))}
        </div>
        <div className="item-box-wrap woman-item-box-wrap">
          {womanItemInfoValues.map((v, i) => (
            <div className="item-box" data-index={i} key={v.name}>
              {makeItemBox(v)}
            </div>
          ))}
        </div>
        <div className="bottom-item"></div>
      </div>
    </div>
  );
}
