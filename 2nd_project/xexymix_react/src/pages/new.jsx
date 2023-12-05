import { CategoryItemContainer } from "../components/category_item_container";
import { MainBannerContainer } from "../components/main_banner_container";

export function New() {
  return (
    <>
      <MainBannerContainer page="new" />
      <CategoryItemContainer condition="신상" category="NEW" filterType="iconContent" />
    </>
  );
}
