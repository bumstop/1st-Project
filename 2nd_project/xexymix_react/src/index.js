import React from "react";
import ReactDOM from "react-dom/client";

// Import CSS
import "./css/index_style.css";
import { TopBanner } from "./components/top_banner";
import { Gnb } from "./components/gnb";
import { QuickMenu } from "./components/quick_menu";
import { MainSlideContainer } from "./components/main_slide_container";
import { CircleBannerContainer } from "./components/circle_banner_container";
import { SeasonSlideContainer } from "./components/season_slide_container";
import { SubSlideContainer } from "./components/sub_slide_container";
import { MainItemContainer } from "./components/main_item_container";

function App() {
  <>
    <div id="header">
      <TopBanner />
      <Gnb />
    </div>
    <QuickMenu />
    <div id="main">
      <MainSlideContainer />
      <CircleBannerContainer />
      <SeasonSlideContainer />
      <SubSlideContainer />
      <MainItemContainer />
      <div class="md-pick-container"></div>
    </div>
    <div id="footer"></div>
  </>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
