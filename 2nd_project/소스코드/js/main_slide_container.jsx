import slideInfo from "./main_slide_info.jsx";

const newData = Object.values(slideInfo);
const newData2 = Object.keys(slideInfo).map(v=>slideInfo[v]);
console.log(slideInfo);
console.log(newData);
console.log(newData2.map((v) => <div>{v}</div>));
console.log(newData.map((v) => <div>{v}</div>));

function SlideItem() {
  return newData.map((v) => <div>{v}</div>);
  // <div class="slide-item" data-index={props.index}>
  //     <a href="#">
  //         <div class="item-img-box">
  //             <img src={props.imgSrc} alt="xexymix" />
  //         </div>
  //         <div class="item-txt-box">
  //             <div class="category">{props.category}</div>
  //             <div class="title">
  //                 <p>
  //                     {props.title[0]}
  //                     <br />
  //                     {props.title[1]}
  //                 </p>
  //             </div>
  //             <div class="desc">{props.desc}</div>
  //         </div>
  //     </a>
  // </div>
  //     );
}

// Object.keys(slideInfo).map((v) =>
//         <SlideItem
//             index={slideInfo[v].index}
//             imgSrc={slideInfo[v].imgSrc}
//             category={slideInfo[v].category}
//             title1={slideInfo[v].title[0]}
//             title2={slideInfo[v].title[1]}
//             desc={slideInfo[v].desc}
//         />
//         // console.log(slideInfo[v]);
// );

function MyFn(){
    return (
        newData2.map((v) => (
        <div class="slide-item" data-index={v.index}>
          <a href="#">
            <div class="item-img-box">
              <img src={v.imgSrc} alt="xexymix" />
            </div>
            <div class="item-txt-box">
              <div class="category">{v.category}</div>
              <div class="title">
                <p>
                  {v.title[0]}
                  <br />
                  {v.title[1]}
                </p>
              </div>
              <div class="desc">{v.desc}</div>
            </div>
          </a>
        </div>
      ))
    )
}

let slideInfoKeys = Object.keys(slideInfo);
console.log(slideInfo[slideInfoKeys[0]].index);
function MainSlideContainer() {
  return (
    <React.Fragment>
        <div class="slide-wrapper">
      <MyFn />
      </div>
      {/* <div class="slide-wrapper">
                <SlideItem 
                    index={slideInfo[v].index}
                    imgSrc={slideInfo[v].imgSrc}
                    category={slideInfo[v].category}
                    title1={slideInfo[v].title[0]}
                    title2={slideInfo[v].title[1]}
                    desc={slideInfo[v].desc}
                />
            </div> */}
      {/* <div class="slide-item" data-index={slideInfo[slideInfoKeys[0]].index}>
                    <a href="#">
                        <div class="item-img-box">
                            <img src={slideInfo[slideInfoKeys[0]].imgSrc} alt="xexymix" />
                        </div>
                        <div class="item-txt-box">
                            <div class="category">{slideInfo[slideInfoKeys[0]].category}</div>
                            <div class="title">
                                <p>
                                    {slideInfo[slideInfoKeys[0]].title[0]}
                                    <br />
                                    {slideInfo[slideInfoKeys[0]].title[1]}
                                </p>
                            </div>
                            <div class="desc">{slideInfo[slideInfoKeys[0]].desc}</div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-index={slideInfo[slideInfoKeys[1]].index}>
                    <a href="#">
                        <div class="item-img-box">
                            <img src={slideInfo[slideInfoKeys[1]].imgSrc} alt="xexymix" />
                        </div>
                        <div class="item-txt-box">
                            <div class="category">{slideInfo[slideInfoKeys[1]].category}</div>
                            <div class="title">
                                <p>
                                    {slideInfo[slideInfoKeys[1]].title[0]}
                                    <br />
                                    {slideInfo[slideInfoKeys[1]].title[1]}
                                </p>
                            </div>
                            <div class="desc">{slideInfo[slideInfoKeys[1]].desc}</div>
                        </div>
                    </a>
                </div>
                <div class="slide-item" data-index={slideInfo[slideInfoKeys[2]].index}>
                    <a href="#">
                        <div class="item-img-box">
                            <img src={slideInfo[slideInfoKeys[2]].imgSrc} alt="xexymix" />
                        </div>
                        <div class="item-txt-box">
                            <div class="category">{slideInfo[slideInfoKeys[2]].category}</div>
                            <div class="title">
                                <p>
                                    {slideInfo[slideInfoKeys[2]].title[0]}
                                    <br />
                                    {slideInfo[slideInfoKeys[2]].title[1]}
                                </p>
                            </div>
                            <div class="desc">{slideInfo[slideInfoKeys[2]].desc}</div>
                        </div>
                    </a>
                </div>
            </div> */}

      <div class="slide-btn-prev">
        <img src="./images/main_btn_prev.png" alt="btn_prev" />
      </div>
      <div class="slide-btn-next">
        <img src="./images/main_btn_next.png" alt="btn_prev" />
      </div>
      <div class="slide-pagination">
        <span class="slide-pagination-focus">1</span>
        <span> / </span>
        <span class="slide-pagination-total">8</span>
      </div>
      <div class="slide-btn-pause"></div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <MainSlideContainer />,
  document.querySelector(".main-slide-container")
);
