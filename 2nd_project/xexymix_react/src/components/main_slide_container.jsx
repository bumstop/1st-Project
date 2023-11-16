import { mainSlideInfo } from "../data/main_slide_info";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
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

export function MainSlideContainer() {
  let [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    const mainSlideSwiper = document.querySelector(".main-slide-container");
    console.log(mainSlideSwiper);
  }, [isPlay]);

  function toggleIsPlay() {
    isPlay ? setIsPlay(false) : setIsPlay(true);
    // console.log(mainSlideSwiper);
    // mainSlideSwiper.autoplay.stop();
    console.log(isPlay);
  }
  

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="main-slide-container">
        {mainSlideInfoValues.map((v, i) => (
          <SwiperSlide className="main-slide-item" data-index={i} key={v.desc}>
            <a href="#!">
              <img src={v.imgSrc} alt="이미지" />
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
          </SwiperSlide>
        ))}
        <div
          className={"main-slide-btn" + (isPlay ? "" : " on")}
          onClick={toggleIsPlay}></div>
      </Swiper>
    </>
  );
}
