import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDidMountEffect } from "../func/useDidMountEffect";
import { useParams } from "react-router-dom";
import { itemInfo } from "../data/item_info";
import { seasonSlideInfo } from "../data/season_slide_info";
import { descText, itemIcon } from "../components/item_box_detail";
import { ProductOrderedList } from "../components/product_ordered_list";
export function Product() {
  console.log("Product 컴포넌트 랜더링됨");

  const params = useParams();
  const product = [...itemInfo, ...seasonSlideInfo].filter(
    (v) => v.id === params.productId
  )[0];
  const price = product.sale ? Number(product.sale) : Number(product.price);
  let initCountArr = [];
  product.option.forEach((v,i) => initCountArr[i] = [v,0]);
  console.log(initCountArr)
  const [countArr, setCountArr] = useState([]);

  const changeCountArr = (key, value) => {
    setCountArr((countArr[key] = value));
  };

  // product.option.map((v) => (countArr[v] = 0))

  // const totalPrice = countArr.reduce((acc, cur) => acc + cur, 0);

  useEffect(() => {
    // product.option.map((v) => changeCountArr(v, 0));
    // setCountArr(countArr.push({...optionCount}));
  }, []);

  useEffect(() => {
    console.log(countArr, initCountArr);
  });

  const selectProductOptionRef = useRef();
  const [productOrderedListArr, setProductOrderedListArr] = useState([]);

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

  // const totalOrderedList = () => `<div class="total-price-box">${1}</div>`; 최종 계산 컴포넌트 필요함

  /**
   * 1. ProductOrderedListArr에 선택한 옵션을 추가함
   * 2. selectProductOptionRef를 "옵션 선택" 으로 초기화함
   */
  const addProductOrderedList = () => {
    const selectRefText =
      selectProductOptionRef.current.options[selectProductOptionRef.current.selectedIndex]
        .text;
    const alreadySelected =
      productOrderedListArr.find((v) => v.selectRefText === selectRefText) !== undefined;

    // 1. ProductOrderedListArr에 선택한 옵션을 추가함
    if (alreadySelected) {
      window.alert("이미 추가된 상품입니다.");
    } else {
      changeCountArr(selectRefText, 1);

      setProductOrderedListArr([
        ...productOrderedListArr,
        {
          selectRefText: selectRefText,
          price: price,
          countArr: countArr,
          changeCountArr: changeCountArr,
        },
      ]);
    }
    // 2. selectProductOptionRef를 "옵션 선택" 으로 초기화함
    selectProductOptionRef.current.options[0].selected = true;
  };

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
            {productOrderedListArr.map((v, i) => (
              <ProductOrderedList
                selectRefText={v.selectRefText}
                key={v.selectRefText}
                price={v.price}
                countArr={v.countArr}
                changeCountArr={v.changeCountArr}
              />
            ))}
          </div>
          <div className="total-price-box">
            <span>총 합계</span>
            <span>
              {/* {totalPrice} */}
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
