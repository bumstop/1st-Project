import manInfo from "./item_info/item_info.js";
import ItemBox from "./item_box.jsx"; // props 로 import받은 Object의 value를 넘겨준다

const manInfoValues = Object.values(manInfo); 
// props 로 import받은 Object의 value를 넘겨준다
{/* <ItemBox info={manInfoValues}/> */}

function MainItemContainer() {
    return (
        <React.Fragment>
            <div class="seeing-box"></div>
            <div class="main-item-box">
                <div class="man-item">
                    <ItemBox info={manInfoValues} width={'calc(95% / 4)'}/>
                </div>
                <div class="top-item"></div>
                <div class="bottom-item"></div>
            </div>
        </React.Fragment>
    );
}

ReactDOM.render(
    <MainItemContainer />,
    document.querySelector(".main-item-container")
);