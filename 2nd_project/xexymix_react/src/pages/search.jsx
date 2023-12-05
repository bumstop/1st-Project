import { useLocation } from "react-router-dom";
import { itemInfo } from "../data/item_info";
import { filteredItem } from "../func/filter_func";
import { makeItemBox } from "../components/item_box";

export function Search() {
  const location = useLocation();
  const searchkeyword = location.state.keyword;
  console.log(searchkeyword);
  const searchItems = filteredItem(itemInfo, "name", searchkeyword);
  const searchEa = searchItems.length;
  return (
    <>
      <div className="search-head-container">
        <div className="search-head">
          <div className="search-txt">
            <span style={{ fontWeight: 500, fontSize: "30px" }}>
              &quot;{searchkeyword}&quot;
            </span>
            에 대한 {searchEa}
            개의 통합 검색결과입니다.
          </div>
          <div className="search-box-wrap">
            <input className="search-box" type="text" />
          </div>
        </div>
      </div>
      <div className="search-item-container">
        <div className="item-box-wrap">
          {searchItems.map((v) => (
            <div className="item-box" key={v.name}>
              {makeItemBox(v)}
            </div>
          ))}
          {/* {filteredItem(itemInfo, "descMain", searchkeyword).map((v) => (
            <div className="item-box" key={v.name}>
              {makeItemBox(v)}
            </div>
          ))}
          {filteredItem(itemInfo, "descSub", searchkeyword).map((v) => (
            <div className="item-box" key={v.name}>
              {makeItemBox(v)}
            </div>
          ))} */}
          {/* 겹치는 데이터 삭제 필요함 */}
        </div>
      </div>
    </>
  );
}
