import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDidMountEffect } from "../func/useDidMountEffect";
import { useParams } from "react-router-dom";
import { itemInfo } from "../data/item_info";
import { descText, itemIcon } from "../components/item_box_detail";

export function Product() {
  console.log("Product 컴포넌트 랜더링됨");

  const params = useParams();
  const product = itemInfo.filter((v) => v.id === params.productId)[0];
  const selectProductOptionRef = useRef();
  const [productOrderedListArr, setProductOrderedListArr] = useState([]);
  const [priceArr, setPriceArr] = useState([]);
  const totalPrice = priceArr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  /** 가격/할인/콤마 출력 함수 */
  const priceFormat = product.sale ? (
    <>
      <strike>{Number(product.price).toLocaleString()}원</strike>
      <span>{Number(product.sale).toLocaleString()}원</span>
    </>
  ) : (
    <span>{Number(product.price).toLocaleString()}원</span>
  ); // const priceFormat

  /** 상품 옵션 선택 출력 함수 */
  const makeProductOption = (
    <>
      <option value={0} key={0}>
        옵션 선택
      </option>
      {product.option.map((v, i) => (
        <option value={i + 1} key={i + 1}>
          {v}
        </option>
      ))}
    </>
  ); // const makeProductOption

  /** 가격 모음 배열 업데이트 함수 */
  function addPriceArr(arr) {
    setPriceArr(arr);
  }; // const addPriceArr

  /** 상품 수량 및 가격 표시 박스 컴포넌트 */
  const ProductOrderedList = (props) => {
    console.log(props.value + "번째 ProductOrderedList 랜더링됨");

    const countInputRef = useRef();
    const price = product.sale ? Number(product.sale) : Number(product.price);
    const [count, setCount] = useState(1);
    const optionPrice = price * count;
    let addOptionPriceArr = priceArr; // 원본 옵션가격모음 배열 State 복사
    addOptionPriceArr[props.value] = optionPrice; // 업데이트

    // setPriceArr을 담은 함수를 복사한 함수
    const copiedAddPriceArr = () => {
      props.addPriceArr(addOptionPriceArr);
    };
    useEffect(() => {
      copiedAddPriceArr(); // 원본 State 업데이트(복사한 함수를 통해 업데이트)
      console.log("자식컴포넌트", priceArr)
    }); 

    useDidMountEffect(() => {
      countInputRef.current.value = count;
      // count가 0보다 작거나 숫자가 아니거나 정수가 아니면 1로 변경
      (count <= 0 || isNaN(count) || Number.isInteger(count) === false) && setCount(1);
    });

    return (
      <div className="product-ordered-list">
        <span className="option-name">{props.selectRefText}</span>
        <div className="option-counter">
          <div className="minus-btn" onClick={() => setCount(count - 1)}></div>
          <div className="count-box">
            <input
              ref={countInputRef}
              className="count-input"
              type="text"
              defaultValue={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>
          <div className="plus-btn" onClick={() => setCount(count + 1)}></div>
        </div>
        <span className="option-price">{optionPrice.toLocaleString()}원</span>
        <div className="product-close-btn"></div>
      </div>
    );
  }; // const ProductOrderedList

  // const totalOrderedList = () => `<div class="total-price-box">${1}</div>`; 최종 계산 컴포넌트 필요함

  /**
   * 1. ProductOrderedListArr에 선택한 옵션을 추가함
   * 2. selectProductOptionRef를 "옵션 선택" 으로 초기화함
   */
  const addProductOrderedList = () => {
    const selectRefText =
      selectProductOptionRef.current.options[selectProductOptionRef.current.selectedIndex]
        .text;

    // 1. ProductOrderedListArr에 선택한 옵션을 추가함
    setProductOrderedListArr([
      ...productOrderedListArr,
      <ProductOrderedList
        selectRefText={selectRefText}
        key={productOrderedListArr.length}
        value={productOrderedListArr.length}
        addPriceArr={addPriceArr}
      />,
    ]);

    // 2. selectProductOptionRef를 "옵션 선택" 으로 초기화함
    selectProductOptionRef.current.options[0].selected = true;
  };

  // custom useEffect (첫 렌더링시 이벤트 발생 안함)
  useDidMountEffect(() => {
    console.log("옵션가격모음 배열", priceArr);
  });

  return (
    <div className="product-container">
      <div className="product-top">
        <div
          className="thumbnail-box"
          style={{
            background: `url(${
              process.env.PUBLIC_URL + product.imgSrc
            }) center/cover no-repeat`,
          }}>
          <img src={process.env.PUBLIC_URL + product.imgSrc} alt="thumbnail image" />
        </div>
        <div className="product-box">
          <div className="product-tit-box">
            <div className="product-name">{product.name}</div>
            <div className="product-icon">{itemIcon(product)}</div>
            <div className="product-desc">{descText(product)}</div>
          </div>
          <div className="product-order-box">
            <div className="product-order-list product-price">
              <span>판매가</span>
              <span className="price-right">{priceFormat}</span>
            </div>
            <div className="product-order-list product-point">
              <span>포인트 적립</span>
              <span className="point-right">1% ~ 최대 5%</span>
            </div>
            <div className="product-order-list product-option">
              <span>사이즈 , 색상</span>
              <select
                ref={selectProductOptionRef}
                name="product-option"
                id="select-product-option"
                onChange={addProductOrderedList}>
                {makeProductOption}
              </select>
            </div>
            <div className="fit-size-btn">
              <span>고객님의 사이즈를 찾아보세요!</span>
            </div>
          </div>
          <div className="product-ordered-box">
            {/* 상품 옵션 선택시 박스 추가 */}
            {productOrderedListArr.map((v) => v)}
          </div>
          <div className="total-price-box">
            <span>총 합계</span>
            <span>
              {totalPrice}
              <span style={{ fontSize: "14px", fontWeight: "400", paddingLeft: "5px" }}>
                원
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <div className="detail-box"></div>
        <div className="size-recommended-box"></div>
        <div className="review-box"></div>
      </div>
    </div>
  );
}
