import { useContext } from 'react';
import { ShopContext } from '../context';

import CartItem from './CartItem'

const CartList = () => {
    const {
        orderList = [],
        toggleCart,
    } = useContext(ShopContext);

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
                onClick={toggleCart}
            >
                close
            </i>
        </ul>
    );
}

export default CartList;