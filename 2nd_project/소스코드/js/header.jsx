function Header() {
    return (
        <div class="gnb">
            <div class="hamburger">
                <span class="petty"></span>
            </div>
            <div class="top-logo">
                <a href="#">xexymix</a>
            </div>
        </div>
    );
}

ReactDOM.render(<Header />, document.querySelector('#header'));