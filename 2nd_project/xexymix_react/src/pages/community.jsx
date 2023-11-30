import { Link } from "react-router-dom";
import { gnbMenu } from "../data/gnb";
import { faqList } from "../data/faq_list";
export function Community() {
  const CommuSub = gnbMenu.gnbCategory.filter((v) => v.txt === "커뮤니티")[0].sub;

  const makeCommuCate = CommuSub.map((v) => (
    <li key={v.txt}>
      <Link to={v.link}>{v.txt}</Link>
    </li>
  ));

  console.log(
    faqList["주문/결제"].map((v) => (
      <>
        
        <li>
          <div></div>
          <div>{v.q}</div>
        </li>
      </>
    ))
  );

  const makeFaqList1 = faqList["주문/결제"].map((v) => (
    <li>
      <div className="faq-list-category">주문/결제</div>
      <div className="faq-list-question">{v.q}</div>
    </li>
  ));

  return (
    <>
      <h2 className="commu-title">커뮤니티</h2>
      <ul className="commu-category">{makeCommuCate}</ul>
      <div className="commu-top">
        <div className="faq-search-box">
          <fieldset>
            <label htmlFor="faq-search">
              FAQ
              <br />
              SEARCH
            </label>
            <select>
              <option defaultValue="1">전체검색</option>
              <option defaultValue="2">주문/결제</option>
              <option defaultValue="3">배송</option>
              <option defaultValue="4">교환/반품</option>
            </select>
            <input id="faq-search" type="text"></input>
            <button></button>
          </fieldset>
        </div>
        <div className="cs-info">
          <p>고객센터 운영안내</p>
          <p>1661-2811</p>
          <p>
            평일 10:00 ~ 17:00 / 점심 12:30 ~ 14:00
            <br />
            토/일요일 및 공휴일 휴무
          </p>
        </div>
      </div>
      <div className="commu-bottom">
        <div className="faq-box">
          <div className="faq-box-title">자주 찾는 질문</div>
          <ul className="faq-category">
            <li>전체보기</li>
            <li>주문/결제</li>
            <li>배송</li>
            <li>교환/반품</li>
          </ul>
          <ul className="faq-list">
						{makeFaqList1}
					</ul>
        </div>
        <div className="right-box">
          <div className="notice-box">
            <div className="notice-box-title">공지사항</div>
            <div className="notice-list">{}</div>
          </div>
          <div className="event-box">
            <div className="event-box-title">이벤트</div>
            <div className="event-list">{}</div>
          </div>
        </div>
      </div>
    </>
  );
}
