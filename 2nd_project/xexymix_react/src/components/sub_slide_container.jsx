const subSlideItems = [
  "bikershorts",
  "joggerpants",
  "newyoga",
  "tennislook",
  "windbreaker",
];

function SubSlideItem() {
  return subSlideItems.map((v, i) => (
    <div className="sub-slide-item" data-index={i} key={v}>
      <img src={"./images/sub_slide/sub_slide_" + v + ".jpg"} alt="" />
    </div>
  ));
}

export function SubSlideContainer() {
  return (
    <div className="sub-slide-container">
      <div className="sub-slide-box-wrap">
        <div className="sub-slide-box">
          <SubSlideItem />
        </div>
      </div>
    </div>
  );
}
