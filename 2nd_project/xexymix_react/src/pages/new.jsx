import { useLocation } from "react-router-dom";
import { CategoryItemContainer } from "../components/category_item_container";
import { MainBannerContainer } from "../components/main_banner_container";
import { useEffect, useState } from "react";

export function New() {
  const location = useLocation();
  const keyword = location.state?.keyword || "전체";

  const [itemCategory, setItemCategory] = useState(keyword);

  // location(keyword)이 변경됐을때만 실행
  useEffect(() => {
    setItemCategory(keyword);
  }, [keyword]);
  return (
    <>
      <MainBannerContainer page="new" />
      <CategoryItemContainer
        condition="신상"
        category="NEW"
        itemCategory={itemCategory}
        setItemCategory={setItemCategory}
        filterType="iconContent"
      />
    </>
  );
}
