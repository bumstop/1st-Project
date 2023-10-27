import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const subSlideItems = [
    "bikershorts",
    "joggerpants",
    "newyoga",
    "tennislook",
    "windbreaker",
];

function SubSlideItem() {
    return subSlideItems.map((v, i) => (
        <div class="sub-slide-item" data-index={i}>
            <img src={"./images/sub_slide/sub_slide_" + v + ".jpg"} alt="" />
        </div>
    ));
}

function SubSlideContainer() {
    return (
        <div class="sub-slide-box-wrap">
            <div class="sub-slide-box">
                <SubSlideItem />
            </div>
        </div>
    );
}

ReactDOM.render(<SubSlideContainer />, document.querySelector(".sub-slide-container"));
