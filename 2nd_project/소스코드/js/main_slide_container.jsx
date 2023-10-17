import slideInfo from "./main_slide_info.jsx";

function SlideItem(val) {
    return (
        <div class="slide-item" data-index={val.index}>
            <a href="#">
                <div class="item-img-box">
                    <img src={val.src} alt="xexymix" />
                </div>
                <div class="item-txt-box">
                    <div class="category">{val.category}</div>
                    <div class="title">
                        <p>
                            {val.title1}
                            <br />
                            {val.title2}
                        </p>
                    </div>
                    <div class="desc">{val.desc}</div>
                </div>
            </a>
        </div>
    );
}

Object.keys(slideInfo).map((v) => {
    <SlideItem
        index={slideInfo[v].index}
        src={slideInfo[v].src}
        category={slideInfo[v].category}
        title1={slideInfo[v].title[0]}
        title2={slideInfo[v].title[1]}
        desc={slideInfo[v].desc}
    />
    console.log(slideInfo[v].index);
});

function MainSlideContainer() {
    return (
        <React.Fragment>
            <div class="slide-wrapper">
                {Object.keys(slideInfo).map((v) => {
                    <SlideItem
                        index={slideInfo[v].index}
                        src={slideInfo[v].src}
                        category={slideInfo[v].category}
                        title1={slideInfo[v].title[0]}
                        title2={slideInfo[v].title[1]}
                        desc={slideInfo[v].desc}
                    />
                })}

                {/* <SlideItem
                    index={slideInfoArray[1].index}
                    src={slideInfoArray[1].src}
                    category={slideInfoArray[1].category}
                    title1={slideInfoArray[1].title[0]}
                    title2={slideInfoArray[1].title[1]}
                    desc={slideInfoArray[1].desc}
                />
                <SlideItem
                    index={slideInfoArray[2].index}
                    src={slideInfoArray[2].src}
                    category={slideInfoArray[2].category}
                    title1={slideInfoArray[2].title[0]}
                    title2={slideInfoArray[2].title[1]}
                    desc={slideInfoArray[2].desc}
                /> */}
            </div>
            <div class="slide-btn-prev"></div>
            <div class="slide-btn-next"></div>
            <div class="slide-pagination"></div>
            <div class="slide-btn-pause"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<MainSlideContainer />, document.querySelector(".main-slide-container"));
