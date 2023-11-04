function ItemBox(props) {
    const priceFormat = (sale, price) =>
        sale ? (
            <React.Fragment>
                <span>{Number(sale).toLocaleString()}</span>
                <strike>{Number(price).toLocaleString()}</strike>
            </React.Fragment>
        ) : (
            <span>{Number(price).toLocaleString()}</span>
        );
    return props.info.map((v, i) => (
        <div class="item-box" data-index={i}>
            <a href="#">
                <div class="item-img-box">
                    <img src={v.imgSrc} />

                </div>
                <div class="item-txt-box">
                    <div class="item-name-box">{v.name}</div>
                    <div class="item-price-box">{priceFormat(v.sale, v.price)}</div>
                    <div class="item-icon-box">
                        {v.iconContent.map((v) => {
                            return <span class="item-icon">{v}</span>;
                        })}
                    </div>
                    <div class="item-desc-box">
                        {v.descSub && v.descMain ? (
                            <div class="mb-5">{v.descMain}</div>
                        ) : null}
                        <div>{v.descSub}</div>
                    </div>
                </div>
            </a>
        </div>
    ));
}

export default ItemBox;
