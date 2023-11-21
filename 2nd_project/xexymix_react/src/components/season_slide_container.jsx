import { Swiper, SwiperSlide } from "swiper/react";
import { seasonSlideInfo } from "../data/season_slide_info";
import { makeItemBox } from "./item_box.jsx"; // props 로 import받은 Object의 value를 넘겨준다
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
const seasonSlideInfoValues = Object.values(seasonSlideInfo);
// props 로 import받은 Object의 value를 넘겨준다

export function SeasonSlideContainer() {
  const scrollbarDragStyle = {
    width: `calc(100% / ${seasonSlideInfoValues.length})`,
    height: "100%",
    backgroundColor: "#000",
  };

  const scrollbarDrag = () => {};

  console.log(scrollbarDragStyle);

  return (
    <div className="season-slide-container">
      <div className="season-slide-title">
        <p>
          <b>실시간 급상승</b>, 많은 분들이 보고있어요.
        </p>
      </div>
      <Swiper
        breakpoints={{
          // 지정 브레이크포인트 px 이상일때 적용
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop={true}
        scrollbar={{
          draggable: true,
          snapOnRelease: true,
        }}
        modules={[Navigation, Scrollbar]}
        className="season-slide-box">
        {seasonSlideInfoValues.map((v, i) => (
          <SwiperSlide className="item-box" data-index={i} key={v.name}>
            {makeItemBox(v)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
