// Import react
import ReactDOM from "react-dom/client";
import { useEffect } from "react";
// Import react-router
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from "react-router-dom";
// Import pages
import { Layout } from "./layout/layout";
import { Home } from "./pages/home";
import { New } from "./pages/new";
import { Best } from "./pages/best";
import { Woman } from "./pages/woman";
import { Man } from "./pages/man";
import { Community } from "./pages/community";
import { Search } from "./pages/search";
import { Product } from "./pages/product";

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

  // "homepage": "https://bumstop.github.io/react_xexymix_clone/",
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="home" element={<Home />} />
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

          {/* 상품 상세 페이지 */}
          <Route path="product/:productId" element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
