import seasonSlideInfo from "./item_info/season_slide_info.jsx";

const seasonSlideInfoValues = Object.values(seasonSlideInfo);
const itemImgBox = document.querySelector(".item-img-box");
function ItemBox() {
    // 전체 아이템 박스 컴포넌트로 변경예정
    return seasonSlideInfoValues.map((v, i) => {
        return (
            <div class="item-box" data-index={i}>
                <a href="#">
                    <div class="item-img-box">
                        <img src={v.imgSrc[0]} />
                    </div>
                    <div class="item-txt-box">
                        <div class="item-name-box">
                            {v.name}
                        </div>
                        <div class="item-price-box">
                        {v.sale}
                        {v.price}
                        </div>
                        <div class="item-icon-box">
                            {v.iconContent}
                        </div>
                        <div class="item-desc-box">
                            {v.descMain}
                            <br />
                            {v.descSub}
                        </div>
                    </div>
                </a>
            </div>
        );
    });
}

function SeasonSlideContainer() {
    return (
        <React.Fragment>
            <div class="season-slide-title">
                <p><b>실시간 급상승</b>, 많은 분들이 보고있어요.</p>
            </div>
            <div class="season-slide-box">
                <ItemBox />
            </div>
            <div class="season-slide-scrollbar"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<SeasonSlideContainer />, document.querySelector(".season-slide-container"));
