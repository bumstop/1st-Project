import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Gnb } from "../components/gnb";
import { TopBanner } from "../components/top_banner";

export function Header() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const headerRef = useRef();

  useEffect(() => { 

    const checkTop = () => {
      if (window.scrollY > 100) {
        setIsScrollTop(false);
        console.log('false');
      } else {
        setIsScrollTop(true);
        console.log('true');
      }
      console.log(window.scrollY, isScrollTop);
    }

    window.addEventListener("wheel", checkTop);

    return () => {
      window.removeEventListener("wheel", checkTop);
    };
  }, [isScrollTop]); // 감시변수 빼면 왜 동작안하는지, 그리고 왜 동작 한번씩 밀리는지

  return (
    <header id="header" ref={headerRef}>
      <TopBanner />
      <Gnb />
    </header>
  );
}
