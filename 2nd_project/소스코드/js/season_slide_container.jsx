import seasonSlideInfo from "./item_info/season_slide_info.js";
import ItemBox from "./item_box.jsx"; // props 로 import받은 Object의 value를 넘겨준다

const seasonSlideInfoValues = Object.values(seasonSlideInfo); 
// props 로 import받은 Object의 value를 넘겨준다

function SeasonSlideContainer() {
    return (
        <React.Fragment>
            <div class="season-slide-title">
                <p>
                    <b>실시간 급상승</b>, 많은 분들이 보고있어요.
                </p>
            </div>
            <div class="season-slide-box-wrap">
                <div class="season-slide-box">
                    <ItemBox info={seasonSlideInfoValues} width={'calc(96% / 5)'}/>
                </div>
            </div>
            <div class="season-slide-scrollbar"></div>
        </React.Fragment>
    );
}

ReactDOM.render(
    <SeasonSlideContainer />,
    document.querySelector(".season-slide-container")
);
