import mainSlideInfo from "./item_info/main_slide_info.js";

const mainSlideInfoValues = Object.values(mainSlideInfo);

function SlideEventItem() {
    return (
        <div class="main-slide-item event-item" data-index={i}>
            <a href="">
                <div class="main-slide-item-img-box">
                    <img src="./images/main_slide/banner_0.jpg" />
                </div>
            </a>
        </div>
    );
}

function SlideItem() {
    return mainSlideInfoValues.map((v, i) => (
        <div class="main-slide-item" data-index={i}>
            <a href="#">
                <div class="main-slide-item-img-box">
                    <img src={v.imgSrc} />
                </div>
                <div class="main-slide-item-txt-box">
                    <div class="main-slide-item-category">{v.category}</div>
                    <div class="main-slide-item-title">
                        {v.title.map((v, i, a) => (
                            <React.Fragment>
                                {v}
                                {a.length == 1 ? "" : !i ? <br /> : ""}
                            </React.Fragment>
                        ))}
                    </div>
                    <div class="main-slide-item-desc">{v.desc}</div>
                </div>
            </a>
        </div>
    ));
}

function MainSlideContainer() {
    return (
        <React.Fragment>
            <div class="main-slide-box-wrap">
                <div class="main-slide-box">
                    <SlideItem />
                </div>
            </div>
            <div class="main-slide-btn-prev">
                <img src="./images/main_btn_prev.png" alt="btn_prev" />
            </div>
            <div class="main-slide-btn-next">
                <img src="./images/main_btn_next.png" alt="btn_prev" />
            </div>
            <div class="main-slide-pagination">
                <span class="main-slide-pagination-focus">1</span>
                <span> / </span>
                <span class="main-slide-pagination-total">8</span>
            </div>
            <div class="main-slide-btn-pause"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<MainSlideContainer />, document.querySelector(".main-slide-container"));
