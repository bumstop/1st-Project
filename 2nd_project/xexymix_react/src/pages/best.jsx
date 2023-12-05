import { CategoryItemContainer } from "../components/category_item_container";
import { MainBannerContainer } from "../components/main_banner_container";

export function Best() {
  return (
    <>
      <MainBannerContainer page="best" />
      <CategoryItemContainer
        condition="주문폭주"
        category="BEST"
        filterType="iconContent"
      />
    </>
  );
}
