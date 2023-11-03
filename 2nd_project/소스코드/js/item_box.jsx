const toPriceForm = (v) => Number(v).toLocaleString();
// 문자형 -> 정수형 -> 가격표시된 문자형 순으로 변환

function ItemBox(props) {
    return props.info.map((v, i) => {
        return (
            <div class="item-box" data-index={i}>
                <a href="#">
                    <div class="item-img-box">
                        <img src={v.imgSrc[0]} />
                    </div>
                    <div class="item-txt-box">
                        <div class="item-name-box">{v.name}</div>
                        <div class="item-price-box">
                            {v.sale && toPriceForm(v.sale)}
                            {v.sale 
                                ? <strike>{toPriceForm(v.price)}</strike>
                                : toPriceForm(v.price)}
                        </div>
                        <div class="item-icon-box">
                            {v.iconContent.map((v) => {
                                return <span class="item-icon">{v}</span>;
                            })}
                        </div>
                        <div class="item-desc-box">
                            {(v.descSub && v.descMain) 
                                ? <div class="mb-5">{v.descMain}</div> 
                                : null}
                            <div>{v.descSub}</div>
                        </div>
                    </div>
                </a>
            </div>
        );
    });
}

export default ItemBox;
