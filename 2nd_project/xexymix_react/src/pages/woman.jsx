import { useLocation } from "react-router-dom";
import { MainSlideContainer } from "../components/main_slide_container";
import { CategoryItemContainer } from "../components/category_item_container";
import { useEffect, useState } from "react";

export function Woman() {
  const location = useLocation();
  const keyword = location.state?.keyword || "전체";
  const [itemCategory, setItemCategory] = useState(keyword);
  const [filterState, setFilterState] = useState("all");

  // keyword가 변경됐을때만 실행
  useEffect(() => {
    setItemCategory(keyword);
    console.log(keyword, location);
  }, [location, keyword]);
  // React Hook useEffect has a missing dependency: 'keyword'.
  // Either include it or remove the dependency array
  // 위 오류문구 공부하기 keyword로만 감시하면 gnb메뉴로 들어올시 가끔씩 안바뀌는 문제 있음.
  return (
    <>
      <MainSlideContainer category="WOMENS" />
      <CategoryItemContainer
        condition="우먼즈"
        category="WOMENS"
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        filterState={filterState}
        setFilterState={setFilterState}
        filterType="type"
      />
    </>
  );
}
