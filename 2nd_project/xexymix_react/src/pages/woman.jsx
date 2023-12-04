import { MainSlideContainer } from "../components/main_slide_container";
import { CategoryItemContainer } from "../components/category_item_container";
import { womanItemInfo } from "../data/woman_item_info";
export function Woman() {
  return (
    <>
      <MainSlideContainer category="WOMENS" />

      <CategoryItemContainer
        page="우먼즈"
        category="WOMENS"
        filterType="type"
        info={womanItemInfo}
      />
    </>
  );
}
