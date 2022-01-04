import CartItem from './CartItem'

const CartList = (props) => {
    const {
        orderList = [],
        handleCartDisplayed = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;

    const totalPrice = orderList.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>Cart</li>
            {orderList.length ? (
                orderList.map((item) => (
                    <CartItem
                        key={item.id}
                        removeFromCart={removeFromCart}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className='collection-item'>Cart is empty</li>
            )}
            <li className='collection-item active'>
                Total: $ {totalPrice}
            </li>
            <li className='collection-item'>
                <button className='btn btn-small' disabled>Order</button>
            </li>
            <i
                className='material-icons cart-close'
                onClick={handleCartDisplayed}
            >
                close
            </i>
        </ul>
    );
}

export default CartList;