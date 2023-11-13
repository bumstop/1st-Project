import { mainSlideInfo } from "../data/main_slide_info";
const mainSlideInfoValues = Object.values(mainSlideInfo);

// function SlideEventItem() {
//   return (
//     <div className="main-slide-item event-item" data-index="">
//       <a href="#!">
//         <div className="main-slide-item-img-box">
//           <img src="./images/main_slide/banner_0.jpg" />
//         </div>
//       </a>
//     </div>
//   );
// }

function MainSlideItem() {
  return mainSlideInfoValues.map((v, i) => (
    <div className="main-slide-item" data-index={i} key={v.desc}>
      <a href="!#">
        <div className="main-slide-item-img-box">
          <img src={v.imgSrc} alt="이미지" />
        </div>
        <div className="main-slide-item-txt-box">
          <div className="main-slide-item-category">{v.category}</div>
          <div className="main-slide-item-title">
            {v.title.map((v, i, a) => (
              <span key={v}>
                {v}
                {a.length === 1 ? "" : !i ? <br /> : ""}
              </span>
            ))}
          </div>
          <div className="main-slide-item-desc">{v.desc}</div>
        </div>
      </a>
    </div>
  ));
}

export function MainSlideContainer() {
  return (
    <div className="main-slide-container">
      <div className="main-slide-box-wrap">
        <div className="main-slide-box">
          <MainSlideItem />
        </div>
      </div>
      <div className="main-slide-btn-prev">
        <img src="./images/main_btn_prev.png" alt="btn_prev" />
      </div>
      <div className="main-slide-btn-next">
        <img src="./images/main_btn_next.png" alt="btn_prev" />
      </div>
      <div className="main-slide-pagination">
        <span className="main-slide-pagination-focus">1</span>
        <span> / </span>
        <span className="main-slide-pagination-total">8</span>
      </div>
      <div className="main-slide-btn-pause"></div>
    </div>
  );
}
