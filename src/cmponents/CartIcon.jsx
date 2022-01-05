const CartIcon = (props) => {
    const { quantity, handleCartDisplayed = Function.prototype } = props;

    return (
        <div className="cart-icon circle orange accent-4" onClick={handleCartDisplayed}>
            <i className="material-icons">shopping_cart</i>
            {
                quantity ? <span className="cart-quantity-value">{quantity}</span> : null
            }

        </div>
    );
}

export default CartIcon;