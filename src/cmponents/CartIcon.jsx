const CartIcon = (props) => {
    const { quantity } = props;

    return (
        <div className="cart-icon circle orange accent-4">
            <i className="material-icons">shopping_cart</i>
            {
                quantity ? <span className="cart-quantity">{quantity}</span> : null
            }
            
        </div>
    );
}

export default CartIcon;