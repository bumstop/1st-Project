import slideInfo from "./season_slide_info.jsx";

function SlideItem() {
    return 
        <div class></div>
}


function SeasonSlideContainer() {
    return (
        <React.Fragment>
            <div class="season-slide-title"></div>
            <div class="season-slide-box">
                {/* <SlideItem /> */}
            </div>
            <div class="season-slide-scrollbar"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<SeasonItemContainer />, document.querySelector(".season-item-container"));
