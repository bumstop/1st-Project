import { useState } from "react";
import { DropdownMenu } from "./dropdown_menu";
import { SearchMenu } from "./search_menu";

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
      <SearchMenu state={isSearch} searchToggleFunc={searchToggle}/>
      <DropdownMenu state={isDropdown} />
    </div>
  );
}
