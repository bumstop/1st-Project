import addressInfo from "./item_info/address_info";
const addressInfoKeys = Object.keys(addressInfo);
// const addressValues = Object.values(addressInfo);
const footerLeftMenus = [
    "브랜드 스토리",
    "회사소개",
    "이용약관",
    "개인정보처리방침",
    "고객센터",
];

function FooterLeft() {
    return (
        <div class="footer-left">
            <div class="footer-left-top">
                <a href="#">
                    <img src="./images/header_logo_bk.png" alt="xexymix" />
                </a>
                <span>
                    애슬레저 1위, 브랜드 고객충성도 애슬레저룩 부문 3년 연속 대상 [2021.
                    2022. 2023]
                </span>
            </div>
            <ul class="footer-left-menu">
                {footerLeftMenus.map((v, i, a) => (
                    <React.Fragment>
                        <li>
                            <a href="#">{v}</a>
                        </li>
                        {i < a.length - 1 && <div class="divide-bar"></div>}
                    </React.Fragment>
                ))}
            </ul>
            <address class="footer-left-info">
                {addressInfoKeys.map((v, i, a) => (
                    <div class="info-box">
                        <div>{v} :</div>
                        <div class="address-value-box">{addressInfo[v]}</div>
                        {i < a.length - 1 && <div class="divide-bar"></div>}
                    </div>
                ))}
                <div class="cr">
                    Copyright 2015 Xexymix All Rights Reserved. Copied 2023 By Me ^^7.
                </div>
            </address>
        </div>
    );
}

function FooterRight() {
    return (
        <div class="footer-right">
            <div class="bank-info-box">
                <span>BANK INFO</span>
                <div>우리은행 &nbsp; 1005-703-294024</div>
                <div>국민은행 &nbsp; 431801-01-213327</div>
                <div>농 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 협 &nbsp; 301-0259-9190-41</div>
                <div>(주)브랜드엑스코퍼레이션</div>
                <div>입금자명 불일치시 자동연동이 되지않습니다.</div>
                <div>고객센터 또는 Q&A 문의주세요.</div>
            </div>
            <div class="sns-box">
                <span>SNS</span>
                
                <div class="sns-icon">
                    <div>
                        <a href="https://www.facebook.com/xexymix/" target="_blank">
                            <img src="./images/footer_fb.png" alt="xexymix-facebook" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/xexymix/" target="_blank">
                            <img src="./images/footer_insta.png" alt="xexymix-instagram" />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.youtube.com/channel/UC24_5gTJkc-hDaEuG4DNbeQ"
                            target="_blank">
                            <img src="./images/footer_youtube.png" alt="xexymix-youtube" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="shop-menu-box">
                <span>SHOP MENU</span>
                <div><a href="#">공지사항</a></div>
                <div><a href="#">회원정책</a></div>
                <div><a href="#">전국매장안내</a></div>
                <div><a href="#">강사회원</a></div>
                <div><a href="#">기업회원</a></div>
            </div>

        </div>
    );
}

function Footer() {
    return (
        <div class="footer">
            <div class="footer-inbox">
                <FooterLeft />
                <FooterRight />
            </div>
        </div>
    );
}

ReactDOM.render(<Footer />, document.querySelector("#footer"));
