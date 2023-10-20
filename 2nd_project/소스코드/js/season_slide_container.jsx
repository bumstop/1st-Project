import slideInfo from "./item_info/season_slide_info.jsx";

function ItemBox() { // 전체 아이템 박스 컴포넌트로 변경예정
    return (
        <div class="item-box">
            <a href="#">
                <div class="item-img-box">
                    <img src="" />
                </div>
                <div class="item-txt-box">
                    <div class="item-name-box"></div>
                    <div class="item-price-box"></div>
                    <div class="item-icon-box"></div>
                    <div class="item-desc-box"></div>
                </div>
            </a>
        </div>
    );
}

function SeasonSlideContainer() {
    return (
        <React.Fragment>
            <div class="season-slide-title"></div>
            <div class="season-slide-box">{/* <SlideItem /> */}</div>
            <div class="season-slide-scrollbar"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<SeasonSlideContainer />, document.querySelector(".season-slide-container"));
