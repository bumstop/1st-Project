import { DropdownMenuWrap } from "./dropdown_menu_wrap";

export function Gnb() {
  const rightBtnMenu = ["view", "cart", "mypage"];
  const gnbCategory = ["신상할인", "베스트", "우먼즈", "맨즈", "골프", "커뮤니티"];

  const makeRightBtn = rightBtnMenu.map((v) => (
    <li key={v}>
      <a href="#!">
        <img src={"./images/menu_" + v + ".png"} alt={v} />
      </a>
    </li>
  ));
  const makeGnbCategory = gnbCategory.map((v) => (
    <li key={v}>
      <a href="#!">{v}</a>
    </li>
  ));

  return (
    <div className="gnb-wrap">
      <div className="gnb">
        <div className="hamburger">
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
      <DropdownMenuWrap />
    </div>
  );
}
