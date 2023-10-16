function MainSlideContainer() {
    return (
        <React.Fragment>
            <div class="slide-wrapper">
                <div class="slide-item">
                    <a href="#">
                        <img src="./images/productimg.gif" alt="xexymix" />
                        <div class="item-txt-box">
                            <div class="category">[category]</div>
                            <div class="title">[title]</div>
                            <div class="desc">[desc]</div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="slide-btn-prev"></div>
            <div class="slide-btn-next"></div>
            <div class="slide-pagination"></div>
            <div class="slide-btn-pause"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<MainSlideContainer />, document.querySelector(".main-slide-container"));
