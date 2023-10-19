import slideInfo from "./main_slide_info.jsx";

const slideInfoValues = Object.values(slideInfo);

function SlideItem() {
    return slideInfoValues.map((v) => (
        <div class="slide-item" data-index={v.index}>
            <a href="#">
                <div class="item-img-box">
                    <img src={v.imgSrc} alt="xexymix" />
                </div>
                <div class="item-txt-box">
                    <div class="category">{v.category}</div>
                    <div class="title">
                        <p>
                            {v.title[0]}
                            <br />
                            {v.title[1]}
                        </p>
                    </div>
                    <div class="desc">{v.desc}</div>
                </div>
            </a>
        </div>
    ));
}

function MainSlideContainer() {
    return (
        <React.Fragment>
            <div class="slide-wrapper">
                <SlideItem />
            </div>
            <div class="slide-btn-prev">
                <img src="./images/main_btn_prev.png" alt="btn_prev" />
            </div>
            <div class="slide-btn-next">
                <img src="./images/main_btn_next.png" alt="btn_prev" />
            </div>
            <div class="slide-pagination">
                <span class="slide-pagination-focus">1</span>
                <span> / </span>
                <span class="slide-pagination-total">8</span>
            </div>
            <div class="slide-btn-pause"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<MainSlideContainer />, document.querySelector(".main-slide-container"));
