import slideInfo from "./season_slide_info.jsx";

function SlideItem() {
    return (
        <div class="season-slide-item">
            <a href="#">
                <div class="season-slide-item-img-box">
                    <img src="" />
                </div>
                <div class="season-slide-item-txt-box">
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

ReactDOM.render(<SeasonSlideContainer />, document.querySelector(".season-item-container"));
