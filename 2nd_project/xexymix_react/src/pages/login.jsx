import React, { useRef, useState } from "react";
import axios from "axios";

export function KakaoLogin() {
  const REST_API_KEY = "bc6575d60a8bd35763d387b0e9398187";
  const REDIRECT_URI = "http://localhost:3000";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  // Access Token 받아오기
  // async 를 함수 앞에 선언해주면 비동기 함수가 됨. 
  // (promise 객체를 반환하지 않아도 자동으로 반환함)
  const getAccessToken = async () => {
    if (accessTokenFetching) return; // Return early if fetching

    console.log("getAccessToken 호출");

    try {
      setAccessTokenFetching(true); // Set fetching to true

      // await는 promise를 반환하는
      const response = await axios.post(
        "~~~/api/auth/kakao",
        {
          authorizationCode: KAKAO_CODE,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const accessToken = response.data.accessToken;
      console.log("accessToken:", accessToken);

      // setUserInfo({
      //   ...userInfo,
      //   accessToken: accessToken,
      // });

      setAccessTokenFetching(false); // Reset fetching to false
      // getProfile();
    } catch (error) {
      console.error("Error:", error);
      setAccessTokenFetching(false); // Reset fetching even in case of error
    }
  };

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };



  return (
    <div className="kakao-login-btn" onClick={handleLogin}>
      <img
        src={`${process.env.PUBLIC_URL}/images/kakao_logo.svg`}
        alt="카카오 로고"
      />
      카카오 로그인
    </div>
  );
}

export function Login() {
  const idPlaceholderRef = useRef();
  const pwdPlaceholderRef = useRef();

  const togglePlaceholder = (e) => {
    const isTyped = e.target.value.length > 0;
    const text = e.target.name;
    const event = e.type;
    let placeholderCss;

    text === "id"
      ? (placeholderCss = idPlaceholderRef.current)
      : (placeholderCss = pwdPlaceholderRef.current);

    if (event === "focus") {
      placeholderCss.style.cssText = `
        top: 0;
        left: 5px;
        font-size: 12px;
      `;
    }

    if (event === "blur") {
      isTyped
        ? (placeholderCss.style.cssText = `display:none;`)
        : (placeholderCss.style.cssText = "");
    }
  };

  return (
    <div className="login-container">
      <div className="kakao-login-box">
        <div>로그인</div>
        <div>
          <p>로그인 아이디와 비밀번호 입력하기 귀찮으시죠?</p>
          <p>카카오로 1초 만에 로그인하세요.</p>
        </div>
        <KakaoLogin />
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
            maxLength="20"
            onFocus={togglePlaceholder}
            onBlur={togglePlaceholder}
          />
          <div className="id-placeholder" ref={idPlaceholderRef}>
            아이디
          </div>
        </div>
        <div className="pwd-box-wrap">
          <input
            type="password"
            id="pwd-box"
            name="password"
            maxLength="20"
            onFocus={togglePlaceholder}
            onBlur={togglePlaceholder}
          />
          <div className="pwd-placeholder" ref={pwdPlaceholderRef}>
            비밀번호
          </div>
        </div>
        <div className="memorize-id-box">
          <input type="checkbox" name="memorize-id" id="memorize-id" />
          <label htmlFor="memorize-id">아이디 저장</label>
        </div>
        <div className="xexymix-login-btn">로그인</div>
        <div className="login-bottom">
          <div className="find-id">아이디/비밀번호 찾기</div>
          <div className="sign-up">회원가입</div>
        </div>
      </div>
    </div>
  );
}
