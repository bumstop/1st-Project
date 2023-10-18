import slideInfo from "./main_slide_info.jsx";

// function SlideItem() {
//     Object.keys(slideInfo).map((v) => {
//         console.log(slideInfo[v].index);
//             <div class="slide-item" data-index={slideInfo[v].index}>
//                 <a href="#">
//                     <div class="item-img-box">
//                         <img src={slideInfo[v].imgSrc} alt="xexymix" />
//                     </div>
//                     <div class="item-txt-box">
//                         <div class="category">{slideInfo[v].category}</div>
//                         <div class="title">
//                             <p>
//                                 {slideInfo[v].title[0]}
//                                 <br />
//                                 {slideInfo[v].title[1]}
//                             </p>
//                         </div>
//                         <div class="desc">{slideInfo[v].desc}</div>
//                     </div>
//                 </a>
//             </div>
//     });
// }

// Object.keys(slideInfo).map((v) => {
//         <SlideItem
//             index={slideInfo[v].index}
//             imgSrc={slideInfo[v].imgSrc}
//             category={slideInfo[v].category}
//             title1={slideInfo[v].title[0]}
//             title2={slideInfo[v].title[1]}
//             desc={slideInfo[v].desc}
//         />
//         console.log(slideInfo[v]);
// });


let slideInfoKeys = Object.keys(slideInfo);
console.log(slideInfo[slideInfoKeys[0]].index)
function MainSlideContainer() {
    return (
        <React.Fragment>
            <div class="slide-wrapper">
                {/* <SlideItem /> */}
                <div class="slide-item" data-index={slideInfo[slideInfoKeys[0]].index}>
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
            </div>
            <div class="slide-btn-prev"></div>
            <div class="slide-btn-next"></div>
            <div class="slide-pagination"></div>
            <div class="slide-btn-pause"></div>
        </React.Fragment>
    );
}

ReactDOM.render(<MainSlideContainer />, document.querySelector(".main-slide-container"));
