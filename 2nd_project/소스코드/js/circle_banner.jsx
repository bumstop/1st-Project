const circleBannerItems = ["yoga", "cacaopay", "tosspay", "present", "notice"];

function CircleBanner() {
    return circleBannerItems.map((v) => (
        <div class="circle-item">
            <img src={"./images/circle_banner/slide_" + v + ".png"} alt="" />
        </div>
    ));
}

ReactDOM.render(<CircleBanner />, document.querySelector(".circle-banner-container"));
