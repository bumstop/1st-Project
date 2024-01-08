import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../recoil/atoms";
import axios from "axios";
import { Navigate } from "react-router-dom";

export function KakaoLogin() {
  const userInfo = useRef();
  const REST_API_KEY = "bc6575d60a8bd35763d387b0e9398187";
  // const REDIRECT_URI = "http://localhost:3000"; //${process.env.PUBLIC_URL}
  // const REDIRECT_URI = `${process.env.PUBLIC_URL}`;
  const REDIRECT_URI = `https://bumstop.github.io/${process.env.PUBLIC_URL}`;
  const RESPONSE_TYPE_PARAMS = "response_type=code";
  const CLIENT_ID_PARAMS = `client_id=${REST_API_KEY}`;
  const REDIRECT_URI_PARAMS = `redirect_uri=${REDIRECT_URI}`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?${CLIENT_ID_PARAMS}&${REDIRECT_URI_PARAMS}&${RESPONSE_TYPE_PARAMS}`;

  const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  const makeFormData = (params) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);


    });

    return searchParams;
  };

  // Access Token 받아오기
  // async 를 함수 앞에 선언해주면 비동기 함수가 됨.
  // (promise 객체를 반환하지 않아도 자동으로 반환함)
  const getAccessToken = async () => {
    // if (accessTokenFetching) return;

    console.log("getAccessToken 호출");

    try {
      setAccessTokenFetching(true);

      // await는 promise의 상태가 바뀌면 실행됨(then 과 비슷함).

      // 여기서 오류발생 400 (Bad Request)
      const response = await axios({
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        url: "https://kauth.kakao.com/oauth/token",
        data: makeFormData({
          grant_type: "authorization_code",
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code: KAKAO_CODE,
        }),
      });

      const accessToken = response.data.access_token;
      const idToken = response.data.id_token;
      console.log(response);
      console.log(idToken);
      console.log(decodeURIComponent(idToken));

      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("idToken", idToken);

      userInfo.current = {
        accessToken: accessToken,
        idToken: idToken,
      };

      setAccessTokenFetching(false);
      getProfile();
    } catch (error) {
      console.error("Error:", error);
      setAccessTokenFetching(false);
    }
  };

  const getProfile = async () => {
    try {
      console.log("getProfile 호출");

      // Check if accessToken is available
      if (userInfo.current.accessToken) {
        console.log("accessToken:", userInfo.current.accessToken);
        console.log("idToken:", userInfo.current.idToken);

        // 여기서 두번째 에러 발생 (Access-Control-Allow-Origin ?)
        const response = await axios({
          method: "GET",
          headers: {
            Authorization: `Bearer ${userInfo.current.accessToken}`,
          },
          url: "https://kapi.kakao.com/v2/user/me",
        });
        console.log(response)
        // setUserInfo({
        //   ...userInfo,
        //   id: response.data.id,
        //   name: response.data.name,
        //   nickname: response.data.nickname,
        //   profileImage: response.data.profile_image_url,
        //   isLogin: true,
        // });
        // userInfo.current = {
        //   ...userInfo,
        //   id: response.data.result.id,
        //   name: response.data.result.name,
        //   nickname: response.data.result.nickname,
        //   profileImage: response.data.result.profile_image_url,
        //   isLogin: true,
        // };

        // Navigate("/");
      } else {
        console.log("No accessToken available");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const handleLogin = () => {
  //   window.location.href = kakaoURL;
  // };

  useEffect(() => {
    if (KAKAO_CODE && !userInfo.accessToken) {
      getAccessToken();
    }
  }, [KAKAO_CODE, userInfo]);

  useEffect(() => {
    if (userInfo.accessToken) {
      getProfile();
    }
  }, [userInfo]);

  return (
    <a className="kakao-login-btn" href={kakaoURL}>
      <img
        src={`${process.env.PUBLIC_URL}/images/kakao_logo.svg`}
        alt="카카오 로고"
      />
      카카오 로그인
    </a>
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
