export function Gnb() {
  return (
    <div class="gnb-wrapper">
      <div class="gnb">
        <div class="hamburger">
          <span class="petty"></span>
        </div>
        <div class="top-logo">
          <a href="#">
            <img src="./images/header_logo_bk.png" alt="xexymix" />
          </a>
        </div>
        <ul class="gnb-category">
          <li>
            <a href="#">신상할인</a>
          </li>
          <li>
            <a href="#">베스트</a>
          </li>
          <li>
            <a href="#">우먼즈</a>
          </li>
          <li>
            <a href="#">맨즈</a>
          </li>
          <li>
            <a href="#">골프</a>
          </li>
          <li>
            <a href="#">커뮤니티</a>
          </li>
        </ul>
        <ul class="right-btn-wrap">
          <li>
            <a href="#">
              <img src="./images/menu_view.png" alt="menu_view" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/menu_cart.png" alt="menu_cart" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/menu_mypage.png" alt="menu_mypage" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
