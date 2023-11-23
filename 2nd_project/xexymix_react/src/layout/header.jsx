import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Gnb } from "../components/gnb";
import { TopBanner } from "../components/top_banner";

export function Header() {
  const [isScrollTop, setIsScrollTop] = useState(true);
  const headerRef = useRef();
  
  useLayoutEffect(() => { 

    const checkTop = () => {
      console.log(window.scrollY);
      if (window.scrollY > 150) {
        setIsScrollTop(false);
        console.log('false');
      } else {
        setIsScrollTop(true);
        console.log('true');
      }
      console.log(window.scrollY);
    }

    window.addEventListener("wheel", checkTop);

    return () => {
      window.removeEventListener("wheel", checkTop);
    };
  }, []);

  return (
    <header id="header" ref={headerRef}>
      <TopBanner />
      <Gnb />
    </header>
  );
}
