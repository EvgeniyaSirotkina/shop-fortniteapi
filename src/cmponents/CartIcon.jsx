import { useContext } from 'react';
import { ShopContext } from '../context';

const CartIcon = (props) => {
    const { quantity } = props;

    const { handleCartDisplayed } = useContext(ShopContext);

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