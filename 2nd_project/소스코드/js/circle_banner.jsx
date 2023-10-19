function CircleBanner() {
    return (
        <React.Fragment>
            <div class="circle-item"><img src="./images/circle_banner/slide_yoga.png" alt="" /></div>
            <div class="circle-item"><img src="./images/circle_banner/slide_cacaopay.png" alt="" /></div>
            <div class="circle-item"><img src="./images/circle_banner/slide_tosspay.png" alt="" /></div>
            <div class="circle-item"><img src="./images/circle_banner/slide_present.png" alt="" /></div>
            <div class="circle-item"><img src="./images/circle_banner/slide_notice.png" alt="" /></div>
        </React.Fragment>
    );
}

ReactDOM.render(<CircleBanner />, document.querySelector('.circle-banner-container'));