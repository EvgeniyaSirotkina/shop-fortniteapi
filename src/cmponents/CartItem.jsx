import { useContext } from 'react';
import { ShopContext } from '../context';

const CartItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
    } = props;

    const {
        removeFromCart,
        incQuantity,
        decQuantity
    } = useContext(ShopContext);

    return (
        <li className='collection-item'>
            {name}{' '}
            <i
                className='material-icons cart-quantity'
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{' '}
            x{quantity}{' '}
            <i
                className='material-icons cart-quantity'
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = $ {price * quantity}
            <span
                className='secondary-content'
                onClick={() => removeFromCart(id)}
            >
                <i className='material-icons cart-delete'>close</i>
            </span>
        </li>
    );
}

export default CartItem;