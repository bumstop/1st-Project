// Import react
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
// Import react-router
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// Import pages
import { Layout } from "./layout/layout";
import { Home } from "./pages/home";
import { New } from "./pages/new";
import { Best } from "./pages/best";
import { Woman } from "./pages/woman";
import { Man } from "./pages/man";
import { Community } from "./pages/community";
import { Search } from "./pages/search";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    window.onbeforeunload = () => window.scrollTo(0, 0);
  }, []);
  

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* 신상할인 */}
          <Route path="new" element={<New />} />

          {/* 베스트 */}
          <Route path="best" element={<Best />} />

          {/* 우먼즈 */}
          <Route path="woman" element={<Woman />} />

          {/* 맨즈 */}
          <Route path="man" element={<Man />} />

          {/* 커뮤니티 */}
          <Route path="community" element={<Community />} />

          {/* 검색 페이지 */}
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
