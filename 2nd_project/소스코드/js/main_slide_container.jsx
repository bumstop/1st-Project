import slideInfo from "./main_slide_info.jsx";

let slideInfoKeys = Object.keys(slideInfo);
console.log(slideInfo[slideInfoKeys[0]].category)

function  InnerTxtBox(){
    <div class="item-txt-box">
        <div class="category">
            {slideInfo[slideInfoKeys[0]].category}
        </div>
        <div class="title">
            {slideInfo[slideInfoKeys[0]].title}
        </div>
        <div class="desc">
            {slideInfo[slideInfoKeys[0]].desc}
        </div>  
    </div>
}


function MainSlideContainer() {
    return (
        <React.Fragment>
            <div class="slide-wrapper">
                <div class="slide-item">
                    <a href="#">
                        <img src="./images/productimg.gif" alt="xexymix" />
                        <InnerTxtBox />
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
