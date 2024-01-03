import { mainSlideInfo } from "../data/main_slide_info";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { filteredItemSame } from "../func/filter_func";
import { Link } from "react-router-dom";
/** @param props.category mainSlideInfo 에서 category로 가져올 데이터 선별  */
export function MainSlideContainer(props) {
  const [isPlay, setIsPlay] = useState(true);
  const mainSwiperRef = useRef(null);

  function isPlayToggle() {
    const mainSwiperAutoPlay = mainSwiperRef.current.swiper.autoplay;

    isPlay ? setIsPlay(false) : setIsPlay(true);
    isPlay ? mainSwiperAutoPlay.stop() : mainSwiperAutoPlay.start();
  }

  const filterData = Array.isArray(props.category)
    ? mainSlideInfo
    : filteredItemSame(mainSlideInfo, "category", props.category);


  return (
    <div className="main-slide-container">
      <Swiper
        ref={mainSwiperRef}
        slidesPerView={"auto"}
        // slidesPerView={'auto'} 사용시 CSS width 지정해줘야함
        centeredSlides={true}
        initialSlide={0}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="main-slide-container"
      >
        {/* {Array.isArray(props.category) && (
          <SwiperSlide className="main-slide-item event-item">
            <Link to={"/"}></Link>
          </SwiperSlide>
        )} */}

        {filterData.map((v) => (
          <SwiperSlide className="main-slide-item" key={v.imgSrc}>
            <img src={process.env.PUBLIC_URL + v.imgSrc} alt="이미지" />
            <div className="main-slide-item-txt-box">
              <div className="main-slide-item-category">{v.category}</div>
              <div className="main-slide-item-title">
                {v.title.map((v, i, a) => (
                  <span key={i}>
                    {v}
                    {a.length === 1 ? "" : !i ? <br /> : ""}
                  </span>
                ))}
              </div>
              <div className="main-slide-item-desc">{v.desc}</div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className={"main-slide-btn" + (isPlay ? "" : " on")}
          onClick={isPlayToggle}
        ></div>
      </Swiper>
    </div>
  );
}
