import manInfo from "./item_info/item_info.js";
import ItemBox from "./item_box.jsx"; // props 로 import받은 Object의 value를 넘겨준다

const manInfoValues = Object.values(manInfo);
// props 로 import받은 Object의 value를 넘겨준다
{
  /* <ItemBox info={manInfoValues}/> */
}

export function MainItemContainer() {
  return (
    <div class="main-item-container">
      <div class="seeing-box"></div>
      <div class="main-item-box">
        <div class="item-box-wrap man-item-box-wrap">
          <ItemBox info={manInfoValues} />
        </div>
        <div class="top-item"></div>
        <div class="bottom-item"></div>
      </div>
    </div>
  );
}
