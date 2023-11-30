// Import react
import ReactDOM from "react-dom/client";
// Import react-router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import pages
import { Layout } from "./layout/layout";
import { Home } from "./pages/home";
import { New } from "./pages/new";
import { Best } from "./pages/best";
import { Woman } from "./pages/woman";
import { Man } from "./pages/man";
import { Community } from "./pages/community";
// Import sub pages
import { WomanOuter } from "./pages/woman_outer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* 신상할인 */}
          <Route path="new" element={<New />} />

          {/* 베스트 */}
          <Route path="best" element={<Best />} />

          {/* 우먼즈 */}
          <Route path="woman" element={<Woman />} />
          <Route path="woman/outer" element={<WomanOuter />} />

          {/* 맨즈 */}
          <Route path="man" element={<Man />} />

          {/* 커뮤니티 */}
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
