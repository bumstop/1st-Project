import { MainSlideContainer } from "../components/main_slide_container";
import { gnbMenu } from "../data/gnb";

export function Man() {
    const manData = gnbMenu.gnbCategory.filter(v => v.txt === "맨즈")
    const
    // const makeCategoryList = gnbMenu.gnbCategory..map((v) => (
    //     <li key={v.txt}>
    //       <div className="category-head">
    //         <Link to={v.link}>{v.txt}</Link>
    //       </div>
    //       {v.sub && (
    //         <ul>
    //           {v.sub.map((subV) => (
    //             <li className="category-sub" key={subV.txt}>
    //               <Link to={subV.link}>{subV.txt}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //       )}
    //     </li>
    //   ));
    return <>
        <MainSlideContainer category="MENS" />
        <h2 className="category-title">MENS</h2>
        <div className="category-list-container">a</div>
    </>
}