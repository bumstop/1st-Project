import { CategoryItemContainer } from "../components/category_item_container";
import { MainBannerContainer } from "../components/main_banner_container";
import { manItemInfo } from "../data/man_item_info";
import { womanItemInfo } from "../data/woman_item_info";

export function Best() {
  return (
    <>
      <MainBannerContainer page="best" />
      <CategoryItemContainer
        condition="주문폭주"
        category="BEST"
        filterType="iconContent"
        info={[...manItemInfo, ...womanItemInfo]}
      />
    </>
  );
}
