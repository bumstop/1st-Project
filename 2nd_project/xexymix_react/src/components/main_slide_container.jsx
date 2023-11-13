import { mainSlideInfo } from "../data/main_slide_info";
const mainSlideInfoValues = Object.values(mainSlideInfo);

function SlideEventItem() {
  return (
    <div class="main-slide-item event-item" data-index="">
      <a href="">
        <div class="main-slide-item-img-box">
          <img src="./images/main_slide/banner_0.jpg" />
        </div>
      </a>
    </div>
  );
}
function MainSlideItem() {
  return mainSlideInfoValues.map((v, i) => (
    <div class="main-slide-item" data-index={i}>
      <a href="#">
        <div class="main-slide-item-img-box">
          <img src={v.imgSrc} />
        </div>
        <div class="main-slide-item-txt-box">
          <div class="main-slide-item-category">{v.category}</div>
          <div class="main-slide-item-title">
            {v.title.map((v, i, a) => (
              <>
                {v}
                {a.length == 1 ? "" : !i ? <br /> : ""}
              </>
            ))}
          </div>
          <div class="main-slide-item-desc">{v.desc}</div>
        </div>
      </a>
    </div>
  ));
}

export function MainSlideContainer() {
  return (
    <div class="main-slide-container">
      <div class="main-slide-box-wrap">
        <div class="main-slide-box">
          <MainSlideItem />
        </div>
      </div>
      <div class="main-slide-btn-prev">
        <img src="./images/main_btn_prev.png" alt="btn_prev" />
      </div>
      <div class="main-slide-btn-next">
        <img src="./images/main_btn_next.png" alt="btn_prev" />
      </div>
      <div class="main-slide-pagination">
        <span class="main-slide-pagination-focus">1</span>
        <span> / </span>
        <span class="main-slide-pagination-total">8</span>
      </div>
      <div class="main-slide-btn-pause"></div>
    </div>
  );
}
