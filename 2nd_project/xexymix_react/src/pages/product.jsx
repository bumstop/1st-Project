import React, { useRef, useState } from "react";
import { useDidMountEffect } from "../func/useDidMountEffect";
import { useParams } from "react-router-dom";
import { itemInfo } from "../data/item_info";
import { descText, itemIcon } from "../components/item_box_detail";

export function Product() {
  const params = useParams();
  const product = itemInfo.filter((v) => v.id === params.productId)[0];
  const productOrderedBoxRef = useRef();
  const counterRef = useRef();
  const [selectText, setSelectText] = useState();
  const selectProductOptionRef = useRef();

  /** 가격/할인/콤마 출력 */
  const priceFormat = product.sale ? (
    <>
      <strike>{Number(product.price).toLocaleString()}원</strike>
      <span>{Number(product.sale).toLocaleString()}원</span>
    </>
  ) : (
    <span>{Number(product.price).toLocaleString()}원</span>
  );
  /** 상품 옵션 선택 출력 */
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
  );

  const ProductOrderedList = () => {
    const countInputValueRef = useRef(1);
    console.log(countInputValueRef.current)
    return (
      <div className="product-ordered-list">
        <span className="option-name">{selectText}</span>
        <div className="option-counter">
          <div className="minus-btn" onClick={() => countInputValueRef.current = countInputValueRef.current -1}></div>
          <div className="count-box">
            <input className="count-input" type="text" defaultValue={countInputValueRef.current} />
          </div>
          <div className="plus-btn"></div>
        </div>
        <span className="option-price">
          {product.sale
            ? Number(product.sale).toLocaleString()
            : Number(product.price).toLocaleString()}
          원
        </span>
      </div>
    );
  };

  // const totalOrderedList = () => `<div class="total-price-box">${1}</div>`;

  const resetSelectText = () => {
    setSelectText(
      selectProductOptionRef.current.options[selectProductOptionRef.current.selectedIndex]
        .text
    );
    selectProductOptionRef.current.options[0].selected = true; // select "옵션 선택" 으로 초기화
  };

  // custom useEffect (첫 렌더링시 이벤트 발생 안함)
  useDidMountEffect(() => {
    console.log(selectText);
    console.log("추가된 선택 옵션 구역", productOrderedBoxRef.current);
  }, [selectText]);

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
                onChange={resetSelectText}>
                {makeProductOption}
              </select>
            </div>
            <div className="fit-size-btn">
              <span>고객님의 사이즈를 찾아보세요!</span>
            </div>
          </div>
          <div ref={productOrderedBoxRef} className="product-ordered-box">
            {/* 상품 옵션 선택시 박스 추가 */}
            {<ProductOrderedList />}
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
