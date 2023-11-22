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
