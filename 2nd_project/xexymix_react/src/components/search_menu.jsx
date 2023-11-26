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
 *  @param props.func  state 를 toggle 해주는 함수
 */
export function SearchMenu(props) {
  function searchToggle() {
    props.func();
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
