import { useEffect, useRef } from "react";
import { useDidMountEffect } from "../func/useDidMountEffect";

/** 상품 수량 및 가격 표시 박스 컴포넌트 */
export const ProductOrderedList = (props) => {
  console.log("ProductOrderedList 랜더링됨");

  const countInputRef = useRef();
  // const count = props.countObject[props.selectRefText];
  const count = 1;
  const price = props.price * count;
  const changeCountObject = (key, value) =>  props.changeCountObject(key, value);

  useEffect(() => {
    console.log(props.countObject);
  });

  useDidMountEffect(() => {
    // countInputRef.current.value = count;
    // count가 0보다 작거나 숫자가 아니거나 정수가 아니면 1로 변경
    // (count <= 0 || isNaN(count) || Number.isInteger(count) === false) &&
    //   changeCountObject(props.selectRefText, 1);
  });

  return (
    <div className="product-ordered-list">
      <span className="option-name">{props.selectRefText}</span>
      <div className="option-counter">
        <div
          className="minus-btn"
          onClick={() => changeCountObject(props.selectRefText, count - 1)}></div>
        <div className="count-box">
          <input
            ref={countInputRef}
            className="count-input"
            type="text"
            defaultValue={count}
            onChange={(e) =>
              changeCountObject(props.selectRefText, Number(e.target.value))
            }
          />
        </div>
        <div
          className="plus-btn"
          onClick={() => changeCountObject(props.selectRefText, count + 1)}></div>
      </div>
      <span className="option-price">{price.toLocaleString()}원</span>
      <div className="product-close-btn"></div>
    </div>
  );
}; // const ProductOrderedList
