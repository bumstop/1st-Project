import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Gnb } from "../components/gnb";
import { TopBanner } from "../components/top_banner";

export function Header() {
  const headerRef = useRef();

  const [isScrollTop, setIsScrollTop] = useState(true);

  const checkTop = () => {
    let scTop = window.scrollY;
    if (scTop >= 100 && isScrollTop) {
      setIsScrollTop(false);
      console.log("함수구역 Y값:", window.scrollY, "100 미만이냐? ", isScrollTop);
    } else if(scTop < 100 && !isScrollTop) {
      setIsScrollTop(true);
      console.log("함수구역 Y값:", window.scrollY, "100 미만이냐? ", isScrollTop);
    }
  };

  useEffect(() => {
    console.log("USE구역 Y값:", window.scrollY, "100 미만이냐? ", isScrollTop);

    window.addEventListener("scroll", checkTop);
    return () => {
      window.removeEventListener("scroll", checkTop);
    };
  });
  return (
    <header id="header" className={isScrollTop ? "" : "non-top"} ref={headerRef}>
      <TopBanner />
      <Gnb />
    </header>
  );
}
