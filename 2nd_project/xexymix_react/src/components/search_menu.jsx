/** 서치메뉴
 *  @param props.state 서치 버튼 클릭시 useState를 가져와 on classToggle
 */
export function SearchMenu(props) {
  return (
    <div className={"search-menu-wrap" + (props.state ? " on" : "")}>
      <div className="search-menu">
        살려줘
        <input></input>
      </div>
    </div>
  );
}
