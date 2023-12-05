import { CategoryItemContainer } from "../components/category_item_container";
import { MainBannerContainer } from "../components/main_banner_container";
import { manItemInfo } from "../data/man_item_info";
import { womanItemInfo } from "../data/woman_item_info";

export function New() {
  return (
    <>
      <MainBannerContainer page="new" />
      <CategoryItemContainer
        condition="신상"
        category="NEW"
        filterType="iconContent"
        info={[...manItemInfo, ...womanItemInfo]}
      />
    </>
  );
}
