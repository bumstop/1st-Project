import { useLocation } from "react-router-dom";
import { MainSlideContainer } from "../components/main_slide_container";
import { CategoryItemContainer } from "../components/category_item_container";
import { useEffect, useState } from "react";

export function Woman() {
  const location = useLocation();
  const keyword = location.state?.keyword || "전체";
  const [itemCategory, setItemCategory] = useState(keyword);
  const [filterState, setFilterState] = useState("all");

  // location이 변경됐을때만 실행
  useEffect(() => {
    setItemCategory(keyword);
  }, [keyword]);

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
