import React from "react";

export function MyPage() {
  const userInfo = JSON.parse(localStorage.userInfo);
  const userThumbnailImage = userInfo.thumbnailImage;
  const userNickname = userInfo.nickname;
  const myMenuList = [
    "주문내역",
    "쿠폰내역",
    "적립금내역",
    "예치금내역",
    "받은 선물함",
    "관심상품",
    "내 게시글 보기",
    "상품리뷰",
    "반품문의",
    "교환문의",
    "회원정보",
    "회원탈퇴",
  ];

  return (
    <>
      <h2 className="mypage-title">마이페이지</h2>
      <div className="mypage-container">
        <div className="my-menu">
          {myMenuList.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </div>
        <div className="profile-container">
          <div className="profile-box">
            <div
              className="profile-image-box"
              style={{
                background: `url(${userThumbnailImage}) no-repeat center/cover`,
              }}
            ></div>
            <div className="nickname-box">
              {userNickname}
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  marginLeft: "5px",
                }}
              >
                회원님
              </span>
            </div>
            <div className="grade-view-btn">등급혜택 보기</div>
          </div>
          <div className="coupon-box profile-container__box">
            <p>쿠폰</p>
            <span>0</span>
          </div>
          <div className="point-box profile-container__box">
            <p>적립금</p>
            <span>0</span>
          </div>
          <div className="review-box profile-container__box">
            <p>작성 가능 리뷰</p>
            <span>0</span>
          </div>
        </div>
      </div>
    </>
  );
}
