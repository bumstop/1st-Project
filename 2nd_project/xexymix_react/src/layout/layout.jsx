// Import react
import React, { useEffect } from "react";

// Import CSS
import "../css/index_style.css";

// Import swiper css (기본 스와이퍼 CSS)
import "swiper/css";

// Import layout
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

// Import components
import { QuickMenu } from "../components/quick_menu";
import { useNavigate } from "react-router-dom";
import { userInfoState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

export function Layout() {
  const navigate = useNavigate();
  // const userInfo = useRecoilValue(userInfoState);
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code?.length > 1 && localStorage.userInfo === undefined) {
      navigate("login");
    }
  }, []);

  return (
    <>
      <Header />
      <QuickMenu />
      <Main />
      <Footer />
    </>
  );
}
