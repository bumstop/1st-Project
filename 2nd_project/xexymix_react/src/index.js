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
import { Golf } from "./pages/golf";
import { Community } from "./pages/community";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
          <Route path="best" element={<Best />} />
          <Route path="woman" element={<Woman />} />
          <Route path="man" element={<Man />} />
          <Route path="golf" element={<Golf />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
