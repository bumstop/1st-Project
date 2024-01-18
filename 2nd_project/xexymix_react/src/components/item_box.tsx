import { Link } from "react-router-dom";
import { itemIcon, descText } from "./item_box_detail";

/** info: v : 불러올 info.js 데이터 파일의 values 배열객체 */
export function makeItemBox(v: any) {
  /** 가격/할인/콤마 출력 */
  const priceFormat = v.sale ? (
    <>
      <span>{Number(v.sale).toLocaleString()}</span>
      <span style={{ textDecoration: 'line-through' }}>{Number(v.price).toLocaleString()}</span>
    </>
  ) : (
    <span>{Number(v.price).toLocaleString()}</span>
  );

  return (
    <Link to={`/product/${v.id}`}>
      <div className="item-img-box">
        <img src={process.env.PUBLIC_URL + v.imgSrc} alt={v.name} />
      </div>
      <div className="item-txt-box">
        <div className="item-name-box">{v.name}</div>
        <div className="item-price-box">{priceFormat}</div>
        <div className="item-icon-box">{itemIcon(v)}</div>
        <div className="item-desc-box">{descText(v)}</div>
      </div>
    </Link>
  );
}
