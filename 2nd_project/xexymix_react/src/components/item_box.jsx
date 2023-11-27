/**
 *  info: v : 불러올 info.js 데이터 파일의 values 배열객체
 *
 */
export function makeItemBox(v) {
  /** 가격/할인/콤마 출력 */
  const priceFormat = v["sale"] ? (
    <>
      <span>{Number(v["sale"]).toLocaleString()}</span>
      <strike>{Number(v["price"]).toLocaleString()}</strike>
    </>
  ) : (
    <span>{Number(v["price"]).toLocaleString()}</span>
  );

  /** 상품설명 출력 */
  const descText =
    v["descSub"] && v["descMain"] ? (
      <>
        <div className="mb-5">{v["descMain"]}</div>
        <div>{v["descSub"]}</div>
      </>
    ) : (
      <>
        {v["descMain"] && <div>{v["descMain"]}</div>}
        {v["descSub"] && <div>{v["descSub"]}</div>}
      </>
    );

  /** 박스 아이콘 출력 */
  const itemIcon =
    v["iconContent"] &&
    v["iconContent"].map((v) => (
      <span className={"item-icon" + (v === "주문폭주" ? " hot" : "")} key={v}>
        {v}
      </span>
    ));

  return (
    <a href="#!">
      <div className="item-img-box">
        <img src={v["imgSrc"]} alt={v["name"]} />
      </div>
      <div className="item-txt-box">
        <div className="item-name-box">{v["name"]}</div>
        <div className="item-price-box">{priceFormat}</div>
        <div className="item-icon-box">{itemIcon}</div>
        <div className="item-desc-box">{descText}</div>
      </div>
    </a>
  );
}
