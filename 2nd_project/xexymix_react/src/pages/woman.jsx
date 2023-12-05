import { MainSlideContainer } from "../components/main_slide_container";
import { CategoryItemContainer } from "../components/category_item_container";
export function Woman() {
  return (
    <>
      <MainSlideContainer category="WOMENS" />
      <CategoryItemContainer
        condition="우먼즈"
        category="WOMENS"
        filterType="type"
      />
    </>
  );
}
