import { useEffect, useRef, useState } from "react";
import { useDidMountEffect } from "../func/useDidMountEffect";

/** 상품 수량 및 가격 표시 박스 컴포넌트 */
export const ProductOrderedList = (props) => {
  console.log(props.value + "번째 ProductOrderedList 랜더링됨");

  const countInputRef = useRef();
  const count = props.countArr[props.selectRefText];
  const price = props.price * count;
  useEffect(() => {
    // props.changeCountArr(props.selectRefText, 1);
  });

  useDidMountEffect(() => {
    countInputRef.current.value = count;
    // count가 0보다 작거나 숫자가 아니거나 정수가 아니면 1로 변경
    (count <= 0 || isNaN(count) || Number.isInteger(count) === false) &&
      props.changeCountArr(props.selectRefText, 1);
  });

  return (
    <div className="product-ordered-list">
      <span className="option-name">{props.selectRefText}</span>
      <div className="option-counter">
        <div
          className="minus-btn"
          onClick={() => props.changeCountArr(props.selectRefText, count - 1)}></div>
        <div className="count-box">
          <input
            ref={countInputRef}
            className="count-input"
            type="text"
            defaultValue={count}
            onChange={(e) =>
              props.changeCountArr(props.selectRefText, Number(e.target.value))
            }
          />
        </div>
        <div
          className="plus-btn"
          onClick={() => props.changeCountArr(props.selectRefText, count + 1)}></div>
      </div>
      <span className="option-price">{price.toLocaleString()}원</span>
      <div className="product-close-btn"></div>
    </div>
  );
}; // const ProductOrderedList
