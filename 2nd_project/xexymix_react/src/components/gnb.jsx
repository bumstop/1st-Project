import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gnbMenu } from "../data/gnb";

/** 드롭다운메뉴
 *  @param props.state 햄버거 버튼 클릭시 useState를 가져와 on classToggle
 */
export function DropdownMenu(props) {
  const dropdownBanner = ["kids", "review"];

  const makeDropdownCategory = gnbMenu.gnbCategory.map((v) => (
    <li key={v.txt}>
      <div className="category-head">
        <Link to={v.link}>{v.txt}</Link>
      </div>
      {v.sub && (
        <ul>
          {v.sub.map((subV) => (
            <li className="category-sub" key={subV.txt}>
              <Link to={subV.link}>{subV.txt}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));
  const makeDropdownBanner = dropdownBanner.map((v) => (
    <div key={v}>
      <Link to={'/'}>
        <img src={`${process.env.PUBLIC_URL}/images/menu_banner_${v}.jpg`} alt={v} />
      </Link>
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
  "블랙라벨",
  "기모",
  "자켓",
  "패딩",
  "쉐르파",
  "조거",
  "부츠컷",
  "플리스",
  "집업",
  "브라탑",
  "레깅스",
  "후드",
];

/** 서치메뉴
 *  @param props.state 서치 버튼 클릭시 useState를 가져와 on classToggle
 *  @param props.searchToggleFunc  state 를 toggle 해주는 함수
 */
export function SearchMenu(props) {
  const searchToggle = () => {
    props.searchToggleFunc();
  };
  const searchRef = useRef();

  const navigate = useNavigate();
  // 검색어를 가지고 search 페이지로 이동
  const goSearch = (searchValue) => {
    searchToggle();
    console.log("검색 입력값:", searchValue);
    navigate("/search", { state: { keyword: searchValue } });
    searchRef.current.value = "";
  };
  return (
    <div className={"search-menu-wrap" + (props.state ? " on" : "")}>
      <div className="search-menu">
        <div className="close-btn" onClick={searchToggle}></div>
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
        <div className="popular-search">
          <div style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "10px" }}>
            인기검색어
          </div>
          <div className="hashtag-box-wrap">
            {popularSearchWord.map((v) => (
              <button
                className="hashtag-box"
                onClick={(e) => goSearch(e.target.innerText)}
                key={v}>
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/******************** GNB ********************/
export function Gnb() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  function hambergerToggle() {
    isDropdown ? setIsDropdown(false) : setIsDropdown(true);
  }
  function searchToggle() {
    isSearch ? setIsSearch(false) : setIsSearch(true);
  }

  const makeGnbCategory = gnbMenu.gnbCategory.map((v) => (
    <li key={v.txt}>
      <Link to={v.link}>{v.txt}</Link>
    </li>
  ));

  const makeRightBtn = gnbMenu.rightBtnMenu.map((v) =>
    v.txt === "search" ? (
      <li className={v.txt + "-icon"} key={v.txt} onClick={searchToggle}>
        <button>
          <img src={`${process.env.PUBLIC_URL}/images/menu_${v.txt}.png`} alt={v.txt} />
        </button>
      </li>
    ) : (
      <li className={v.txt + "-icon"} key={v.txt}>
        <Link to={v.link}>
          <img src={`${process.env.PUBLIC_URL}/images/menu_${v.txt}.png`} alt={v.txt} />
          {/* <img src={"./images/menu_" + v.txt + ".png"} alt={v.txt} /> */}
        </Link>
      </li>
    )
  );

  return (
    <div className="gnb-wrap">
      <div className="gnb">
        <div
          className={"hamburger" + (isDropdown ? " on" : "")}
          onClick={hambergerToggle}>
          <span className="petty"></span>
        </div>
        <div className="top-logo">
          <Link to={"/home"}>
            <img src={`${process.env.PUBLIC_URL}/images/header_logo_bk.png`} alt="xexymix" />
          </Link>
        </div>
        <ul className="gnb-category">{makeGnbCategory}</ul>
        <ul className="right-btn-wrap">{makeRightBtn}</ul>
      </div>
      <SearchMenu state={isSearch} searchToggleFunc={searchToggle} />
      <DropdownMenu state={isDropdown} />
    </div>
  );
}
