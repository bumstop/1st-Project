import { MainSlideContainer } from "../components/main_slide_container";
import { CategoryItemContainer } from "../components/category_item_container";
export function Man() {
  return (
    <>
      <MainSlideContainer category="MENS" />
      <CategoryItemContainer
        condition="맨즈"
        category="MENS"
        filterType="type"
      />
    </>
  );
}
