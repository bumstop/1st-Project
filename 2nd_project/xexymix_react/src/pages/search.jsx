import { useLocation, useNavigate } from "react-router-dom";
import { itemInfo } from "../data/item_info";
import { filteredItem } from "../func/filter_func";
import { makeItemBox } from "../components/item_box";
import { useRef } from "react";

export function Search() {
  const location = useLocation();
  const searchkeyword = location.state.keyword;
  console.log(searchkeyword);
  const searchItems = filteredItem(itemInfo, "name", searchkeyword);
  const searchEa = searchItems.length;

  const searchRef = useRef();

  const navigate = useNavigate();
  // 검색어를 가지고 search 페이지로 이동
  const goSearch = (searchValue) => {
    console.log("검색 입력값:", searchValue);
    navigate("/search", { state: { keyword: searchValue } });
  };

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
            <input
              ref={searchRef}
              className="search-box"
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") goSearch(searchRef.current.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => goSearch(searchRef.current.value)}></button>
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
