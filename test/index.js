const q = (q) => document.querySelector(q);
const REST_API_KEY = "bc6575d60a8bd35763d387b0e9398187";
const ORIGINAL_URL = new URL(window.location.href).origin;
const REDIRECT_URI = "http://127.0.0.1:5501/test/";
const RESPONSE_TYPE_PARAMS = "response_type=code";
const CLIENT_ID_PARAMS = `client_id=${REST_API_KEY}`;
const REDIRECT_URI_PARAMS = `redirect_uri=${REDIRECT_URI}`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?${CLIENT_ID_PARAMS}&${REDIRECT_URI_PARAMS}&${RESPONSE_TYPE_PARAMS}`;

console.log(kakaoURL);
const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");

const makeFormData = (params) => {
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    searchParams.append(key, params[key]);
  });

  return searchParams;
};
let accessTokenFetching = false;

const getAccessToken = async () => {
  if (accessTokenFetching) return;
  console.log("getAccessToken 호출");
  try {
    console.log("getAccessToken try 호출");
    accessTokenFetching = true;
    // await는 promise의 상태가 바뀌면 실행됨(then 과 비슷함).
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
    console.log(response);

    accessTokenFetching = false;
    getProfile(accessToken);
  } catch (error) {
    console.error("getAccessToken Error:", error);
    accessTokenFetching = false;
  }
};

const getProfile = async (accessToken) => {
  try {
    console.log("getProfile 호출");

    // Check if accessToken is available
    if (accessToken.length > 1) {
      const response = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        url: "https://kapi.kakao.com/v2/user/me",
      });
      console.log(response);

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          accessToken: accessToken,
          id: response.data.id,
          nickname: response.data.kakao_account.profile.nickname,
          profileImage: response.data.kakao_account.profile.profile_image_url,
          thumbnailImage:
            response.data.kakao_account.profile.thumbnail_image_url,
          isLogin: true,
        })
      );
      console.log(JSON.parse(localStorage.userInfo));

      // window.location.href = REDIRECT_URI; // 이렇게 이동시키면 인가코드 쿼리스트링 없어짐
      // navigate("/home");
    } else {
      console.log("No accessToken available");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const codeBtn = q(".kakao-login-btn");
const tokenBtn = q(".kakao-token-btn");

codeBtn.addEventListener("click", () => {
  console.log("클릭");
  location.href = kakaoURL;
});

tokenBtn.addEventListener("click", () => {
  console.log("클릭");
  getAccessToken();
});
