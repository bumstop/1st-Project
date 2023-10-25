let myarr = [1, 2, 3, 4];

function SubSlideItem() {
    return myarr.map((v, i) => (
        <div class="sub-slide-item" data-index={i}>
            {v}
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
