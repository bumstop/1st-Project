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
                            {v.sale.toLocaleString()}
                            {v.sale 
                                ? <strike>{v.price.toLocaleString()}</strike>
                                : v.price.toLocaleString()}
                        </div>
                        <div class="item-icon-box">
                            {v.iconContent.map((v) => {
                                return <span class="item-icon">{v}</span>;
                            })}
                        </div>
                        <div class="item-desc-box">
                            <div class="desc-main">{v.descMain}</div>
                            <div>{v.descSub}</div>
                        </div>
                    </div>
                </a>
            </div>
        );
    });
}

export default ItemBox;
