import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

export function Login() {
  const makeMovePlaceholder = (e) => {
    const text = e.target.placeholder;
  };

  return (
    <div className="login-container">
      <div className="kakao-login-box">
        <div>로그인</div>
        <div>
          <p>로그인 아이디와 비밀번호 입력하기 귀찮으시죠?</p>
          <p>카카오로 1초 만에 로그인하세요.</p>
        </div>
        <a className="kakao-login-btn" href="#!">
          <FontAwesomeIcon icon={faComment} />
          카카오 1초 로그인/회원가입
        </a>
        <div className="kakao_benefit">
          <img
            src={`${process.env.PUBLIC_URL}/images/kakao_benefit.jpg`}
            alt="카카오 혜택"
          />
        </div>
      </div>
      <div className="divide-line">또는</div>
      <div className="xexymix-login-box">
        <div className="id-box-wrap">
          <input
            type="text"
            id="id-box"
            name="id"
            placeholder="아이디"
            maxLength="20"
            onFocus={makeMovePlaceholder}
          />
        </div>
        <div className="pwd-box-wrap">
          <input
            type="password"
            id="pwd-box"
            name="password"
            placeholder="비밀번호"
            maxLength="20"
            onFocus={makeMovePlaceholder}
          />
        </div>
        <div className="memorize-id-box">
          <input type="checkbox" name="memorize-id" id="memorize-id" />
          <label for="memorize-id">아이디 저장</label>
        </div>
      </div>
    </div>
  );
}
