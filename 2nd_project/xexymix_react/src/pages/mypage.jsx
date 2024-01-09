import React from "react";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../recoil/atoms";

export function MyPage() {
  const userInfo = JSON.parse(localStorage.userInfo);
  const userThumbnailImage = userInfo.thumbnailImage;
  const userNickname = userInfo.nickname;
  

  return (
    <>
      <div className="mypage-container">
        <h2 className="mypage-title">마이페이지</h2>
        <div className="profile-container">
          <div className="profile-image-box" style={{
            background: `url(${userThumbnailImage}) no-repeat center/cover`
          }}>
          </div>
          <div className="nickname-box">{userNickname}</div>
        </div>
      </div>
    </>
  );
}
