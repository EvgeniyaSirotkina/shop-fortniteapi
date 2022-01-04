const goodsItem = (props) => {
    const { goodsItem, price, addToCart = Function.prototype } = props;

    return goodsItem && (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img
                    className="activator"
                    src={goodsItem.images.background}
                    alt={goodsItem.name} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{goodsItem.name}</span>
                <p>{goodsItem.description}</p>
            </div>
            <div className="card-action">
                <button
                    className="waves-effect waves-light btn-small"
                    onClick={() => addToCart({
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: price.regularPrice
                    })}
                >
                    <i className="material-icons left">attach_money</i>
                    <span className="good-price">{price.regularPrice}</span>
                </button>
            </div>
        </div>
    )
}

export default goodsItem;