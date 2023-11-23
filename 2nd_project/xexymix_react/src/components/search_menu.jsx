/** 서치메뉴
 *  @param props.state 서치 버튼 클릭시 useState를 가져와 on classToggle
 */
export function SearchMenu(props) {
  return (
    <div className={"search-menu-wrap" + (props.state ? " on" : "")}>
      <div className="search-menu">
        <div className="search-box-wrap">
          <input className="search-box" type="text" />
          <button className="search-btn"></button>
        </div>
      </div>
    </div>
  );
}
