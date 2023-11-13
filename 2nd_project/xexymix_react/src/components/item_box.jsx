/** 
 * props.info : 불러올 info.js 데이터 파일의 values
 */
export function ItemBox(props) {
    const priceFormat = (sale, price) =>
        sale ? (
            <>
                <span>{Number(sale).toLocaleString()}</span>
                <strike>{Number(price).toLocaleString()}</strike>
            </>
        ) : (
            <span>{Number(price).toLocaleString()}</span>
        );
    return props.info.map((v, i) => (
        <div className="item-box" data-index={i} key={v.name}>
            <a href="#!">
                <div className="item-img-box">
                    <img src={v.imgSrc} alt="이미지"/>

                </div>
                <div className="item-txt-box">
                    <div className="item-name-box">{v.name}</div>
                    <div className="item-price-box">{priceFormat(v.sale, v.price)}</div>
                    <div className="item-icon-box">
                        {v.iconContent.map((v) => {
                            return <span className="item-icon" key={v}>{v}</span>;
                        })}
                    </div>
                    <div className="item-desc-box">
                        {v.descSub && v.descMain ? (
                            <div className="mb-5">{v.descMain}</div>
                        ) : null}
                        <div>{v.descSub}</div>
                    </div>
                </div>
            </a>
        </div>
    ));
}
