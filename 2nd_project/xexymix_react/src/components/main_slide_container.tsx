import { MainSlideInfo, mainSlideInfo } from "../data/main_slide_info";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { filteredItemSame } from "../func/filter_func";

/** @param props.category mainSlideInfo 에서 category로 가져올 데이터 선별  */
interface MainSlideContainerProps {
  category: string | Array<string>;
}
export function MainSlideContainer(props: MainSlideContainerProps) {

  const [isPlay, setIsPlay] = useState(true);
  const mainSwiperRef = useRef();

  const swiper = useSwiper();
  
  if (!swiper) {
    // swiper가 null인 경우에 대한 처리
    return null; // 또는 다른 로직 수행
  }
  
  const { autoplay } = swiper;
  
  function isPlayToggle() {
    isPlay ? setIsPlay(false) : setIsPlay(true);
    isPlay ? swiper.autoplay.stop() : swiper.autoplay.start();
  }

  const filterData = Array.isArray(props.category)
    ? mainSlideInfo
    : filteredItemSame(mainSlideInfo, "category", props.category);

  const isEventItem = (v: MainSlideInfo): boolean => {
    let bool;
    v.imgSrc === "/images/main_slide/banner_0.jpg"
      ? (bool = true)
      : (bool = false);
    return bool;
  };

  // const swiperSettings = {
  //   slidesPerView: "auto",
  //   centeredSlides: true,
  //   initialSlide: 0,
  //   spaceBetween: 0,
  //   pagination: {
  //     type: "fraction",
  //   },
  //   loop: true,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  //   navigation: true,
  //   modules: [Autoplay, Pagination, Navigation],
  // };

  // 메인페이지 스와이퍼 initialSlide가 인식되지 않는 문제 발생
  // 다른 페이지는 정상인데 이벤트 아이템(크기 다름)이 들어간 스와이퍼에서
  // centeredSlides를 설정하니 이벤트 아이템(크기 다름)이 initialSlide에서 제외당함.
  // 아래 useEffect를 사용해 해결함 (이벤트아이템이 있는 슬라이드면 1번 슬라이드로 이동)
  // useEffect(() => {
  //   if (swiper) {
  //   if (filterData === mainSlideInfo) {
  //     // mainSwiperRef.current.slideTo(2, 0);
  //     swiper.slideTo(2, 0);
  //     // slideTo(index, duration) (1번 슬라이드의 index는 2)
  //   }
  //   }
  // }, [filterData, mainSlideInfo, swiper]);

  return (
    <div className="main-slide-container">
      <Swiper
        // ref={mainSwiperRef}
        slidesPerView={"auto"}
        centeredSlides={true}
        initialSlide={0}
        spaceBetween={0}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="main-slide-container"
      >
        {filterData.map(
          (
            v: any // v 타입지정 뭘로 해야할까?
          ) => (
            <SwiperSlide
              className={
                "main-slide-item" + (isEventItem(v) ? " event-item" : "")
              }
              key={v.imgSrc}
            >
              <img src={process.env.PUBLIC_URL + v.imgSrc} alt="이미지" />
              <div className="main-slide-item-txt-box">
                <div className="main-slide-item-category">{v.category}</div>
                <div className="main-slide-item-title">
                  {v.title.map((v: any, i: number, a: Array<string>) => (
                    <span key={i}>
                      {v}
                      {a.length === 1 ? "" : !i ? <br /> : ""}
                    </span>
                  ))}
                </div>
                <div className="main-slide-item-desc">{v.desc}</div>
              </div>
            </SwiperSlide>
          )
        )}
        <div
          className={"main-slide-btn" + (isPlay ? "" : " on")}
          onClick={isPlayToggle}
        ></div>
      </Swiper>
    </div>
  );
}
