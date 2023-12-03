// Import react
import React, { useLayoutEffect } from "react";


// Import CSS
import "../css/index_style.css";

// Import swiper css (기본 스와이퍼 CSS)
import 'swiper/css';

// Import layout
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

// Import components
import { QuickMenu } from "../components/quick_menu";

export function Layout() {
    
    
      return (
        <>
          <Header />
          <QuickMenu />
          <Main />
          <Footer />
        </>
      );
}