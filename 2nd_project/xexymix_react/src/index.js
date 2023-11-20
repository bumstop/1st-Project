import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";

// Import CSS
import "./css/index_style.css";
// Import swiper css (기본 스와이퍼 CSS)
import 'swiper/css';

// Import layout
import { Header } from "./layout/header";
import { Main } from "./layout/main";
import { Footer } from "./layout/footer";

// Import components
import { QuickMenu } from "./components/quick_menu";

function App() {
  useLayoutEffect(() => {
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <QuickMenu />
      <Main />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
