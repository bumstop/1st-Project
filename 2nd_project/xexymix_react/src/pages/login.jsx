import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";

export function Login() {
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
      </div>
    </div>
  );
}
