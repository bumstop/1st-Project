import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gnbMenu } from "../data/gnb";

/** 드롭다운메뉴
 *  @param props.state 햄버거 버튼 클릭시 useState를 가져와 on classToggle
 */
export function DropdownMenu(props) {
  const scrollY = useRef(0);
  // 모달 오버레이에서 스크롤 방지
  useEffect(() => {
    if (props.state) {
      scrollY.current = window.scrollY;
      document.body.style.cssText = `
      position: fixed; 
      top: -${scrollY.current}px;
      overflow-y: scroll;
      width: 100%;`;
    }

    if (!props.state) {
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY.current, 10));
    }
  }, [props.state]);

  const navigate = useNavigate();
  const dropdownBanner = ["kids", "review"];

  const goSubPage = (link, category) => {
    props.hambergerToggleFunc();
    navigate(link, { state: { keyword: category } });
  };

  const makeDropdownCategory = gnbMenu.gnbCategory.map((v) => (
    <li key={v.txt}>
      <div className="category-head" onClick={() => goSubPage(v.link)}>
        {v.txt}
      </div>
      {v.sub && (
        <ul>
          {v.sub.map((subV) => (
            <li
              className="category-sub"
              key={subV.txt}
              onClick={() => goSubPage(subV.link, subV.txt)}
            >
              {subV.txt}
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  const makeDropdownBanner = dropdownBanner.map((v) => (
    <div key={v}>
      <Link to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/images/menu_banner_${v}.jpg`}
          alt={v}
        />
      </Link>
    </div>
  ));

  const dropdownMenuWrapRef = useRef();
  const checkDimmed = (e) => {
    console.log(e.target, e.currentTarget);
    if (dropdownMenuWrapRef.current === e.target) props.hambergerToggleFunc();
  };

  return (
    <div
      ref={dropdownMenuWrapRef}
      className={"dropdown-menu-wrap" + (props.state ? " on" : "")}
      onClick={checkDimmed}
    >
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
  const scrollY = useRef(0);

  // 모달 오버레이에서 스크롤 방지
  useEffect(() => {
    if (props.state) {
      scrollY.current = window.scrollY;
      document.body.style.cssText = `
      position: fixed; 
      top: -${scrollY.current}px;
      overflow-y: scroll;
      width: 100%;`;
    }

    if (!props.state) {
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY.current, 10));
    }
  }, [props.state]);

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

  const searchMenuWrapRef = useRef();
  const checkDimmed = (e) => {
    if (searchMenuWrapRef.current === e.target) searchToggle();
  };

  return (
    <div
      ref={searchMenuWrapRef}
      className={"search-menu-wrap" + (props.state ? " on" : "")}
      onClick={checkDimmed}
    >
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
            onClick={() => goSearch(searchRef.current.value)}
          ></button>
        </div>
        <div className="popular-search">
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            인기검색어
          </div>
          <div className="hashtag-box-wrap">
            {popularSearchWord.map((v) => (
              <button
                className="hashtag-box"
                onClick={(e) => goSearch(e.target.innerText)}
                key={v}
              >
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

  const openDropdownAndCloseSearch = () => {
    setIsDropdown(true);
    if (isSearch) setIsSearch(false);
  };
  const openSearchAndCloseDropdown = () => {
    setIsSearch(true);
    if (isDropdown) setIsDropdown(false);
  };

  function hambergerToggle() {
    isDropdown ? setIsDropdown(false) : openDropdownAndCloseSearch();
  }
  function searchToggle() {
    isSearch ? setIsSearch(false) : openSearchAndCloseDropdown();
  }

  const makeGnbCategory = gnbMenu.gnbCategory.map((v) => (
    <li key={v.txt}>
      <Link to={v.link}>{v.txt}</Link>
    </li>
  ));

  const makeRightBtn = (
    <>
      <li className="search-icon" onClick={searchToggle}>
        <button>
          <img
            src={`${process.env.PUBLIC_URL}/images/menu_search.png`}
            alt="검색"
          />
        </button>
      </li>
      <li className="cart-icon">
        <Link to="/cart">
          <img
            src={`${process.env.PUBLIC_URL}/images/menu_cart.png`}
            alt="카트"
          />
        </Link>
      </li>
      <li className="login-icon">
        <Link to="/login">
          <img
            src={`${process.env.PUBLIC_URL}/images/menu_login.png`}
            alt="로그인"
          />
        </Link>
      </li>
    </>
  );
  return (
    <div className="gnb-wrap">
      <div className="gnb">
        <div
          className={"hamburger" + (isDropdown ? " on" : "")}
          onClick={hambergerToggle}
        >
          <span className="petty"></span>
        </div>
        <div className="top-logo">
          <Link to={"/home"}>
            <img
              src={`${process.env.PUBLIC_URL}/images/header_logo_bk.png`}
              alt="xexymix"
            />
          </Link>
        </div>
        <ul className="gnb-category">{makeGnbCategory}</ul>
        <ul className="right-btn-wrap">{makeRightBtn}</ul>
      </div>
      <SearchMenu state={isSearch} searchToggleFunc={searchToggle} />
      <DropdownMenu state={isDropdown} hambergerToggleFunc={hambergerToggle} />
    </div>
  );
}
