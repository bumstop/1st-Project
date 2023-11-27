import { useState } from "react";

/** 드롭다운메뉴
 *  @param props.state 햄버거 버튼 클릭시 useState를 가져와 on classToggle
 */
export function DropdownMenu(props) {
  const dropdownCategory = {
    신상할인: null,
    베스트: null,
    우먼즈: ["레깅스", "조거팬츠", "상의", "하의", "아우터"],
    맨즈: ["상의", "하의", "아우터"],
    골프: ["우먼즈", "맨즈", "용품"],
    커뮤니티: ["이벤트", "공지사항", "고객만족센터", "웹진"],
  };
  const dropdownCategoryKeys = Object.keys(dropdownCategory);
  const dropdownBanner = ["kids", "review"];

  const makeDropdownCategory = dropdownCategoryKeys.map((v) => (
    <li key={v}>
      <div className="category-head">
        <a href="#!">{v}</a>
      </div>
      {dropdownCategory[v] && (
        <ul>
          {dropdownCategory[v].map((v) => (
            <li className="category-sub" key={v}>
              <a href="#!">{v}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));
  const makeDropdownBanner = dropdownBanner.map((v) => (
    <div key={v}>
      <a href="#!">
        <img src={"./images/menu_banner_" + v + ".jpg"} alt={v} />
      </a>
    </div>
  ));

  return (
    <div className={"dropdown-menu-wrap" + (props.state ? " on" : "")}>
      <div className="dropdown-menu">
        <ul className="dropdown-category">{makeDropdownCategory}</ul>
        <div className="dropdown-banner">{makeDropdownBanner}</div>
      </div>
    </div>
  );
}
const popularSearchWord = [
  "기모",
  "양말",
  "쉐르파",
  "벨로아",
  "조거",
  "부츠컷",
  "플리스",
  "가방",
  "집업",
  "브라탑",
  "운동화",
  "기모레깅스",
  "모자",
  "땀복",
  "후드",
];

/** 서치메뉴
 *  @param props.state 서치 버튼 클릭시 useState를 가져와 on classToggle
 *  @param props.searchToggleFunc  state 를 toggle 해주는 함수
 */
export function SearchMenu(props) {
  function searchToggle() {
    props.searchToggleFunc();
  }

  return (
    <div className={"search-menu-wrap" + (props.state ? " on" : "")}>
      <div className="search-menu">
        <div className="close-btn" onClick={searchToggle}></div>
        <div className="search-box-wrap">
          <input className="search-box" type="text" />
          <button className="search-btn"></button>
        </div>
        <div className="popular-search">
          <div style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}>
            인기검색어
          </div>
          <div className="hashtag-box-wrap">
            {popularSearchWord.map((v) => (
              <a className="hashtag-box" key={v} href="#!">
                {v}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export function Gnb() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  function hambergerToggle() {
    isDropdown ? setIsDropdown(false) : setIsDropdown(true);
  }
  function searchToggle() {
    isSearch ? setIsSearch(false) : setIsSearch(true);
  }
  const rightBtnMenu = ["search", "cart", "mypage"];
  const gnbCategory = ["신상할인", "베스트", "우먼즈", "맨즈", "골프", "커뮤니티"];

  const makeRightBtn = rightBtnMenu.map((v) =>
    v === "search" ? (
      <li className={v + "-icon"} key={v} onClick={searchToggle}>
        <a href="#!">
          <img src={"./images/menu_" + v + ".png"} alt={v} />
        </a>
      </li>
    ) : (
      <li className={v + "-icon"} key={v}>
        <a href="#!">
          <img src={"./images/menu_" + v + ".png"} alt={v} />
        </a>
      </li>
    )
  );
  const makeGnbCategory = gnbCategory.map((v) => (
    <li key={v}>
      <a href="#!">{v}</a>
    </li>
  ));

  return (
    <div className="gnb-wrap">
      <div className="gnb">
        <div
          className={"hamburger" + (isDropdown ? " on" : "")}
          onClick={hambergerToggle}>
          <span className="petty"></span>
        </div>
        <div className="top-logo">
          <a href="#!">
            <img src="./images/header_logo_bk.png" alt="xexymix" />
          </a>
        </div>
        <ul className="gnb-category">{makeGnbCategory}</ul>
        <ul className="right-btn-wrap">{makeRightBtn}</ul>
      </div>
      <SearchMenu state={isSearch} searchToggleFunc={searchToggle} />
      <DropdownMenu state={isDropdown} />
    </div>
  );
}
