import React, { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import CartIcon from './CartIcon';
import CartList from './CartList';
import Alert from './Alert';

import { ShopContext } from '../context';

const Shop = () => {

    const { goods, isLoaded, isCartDisplayed, orderList, alertName, getGoods } = useContext(ShopContext);
    const getNumberOfPurchases = () => {
        return orderList.map(item => item.quantity).reduce((acc, el) => acc + el, 0);
    }

    useEffect(function getGoods1() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.shop && getGoods(data);
            })
            .catch(error => {
                console.log(error);
            })
        // eslint-disable-next-line
    }, []);

    return (
        <main className='container content'>
            {alertName && <Alert />}
            {
                !isCartDisplayed
                    ? <CartIcon quantity={getNumberOfPurchases()} />
                    : <CartList orderList={orderList} />
            }
            {!isLoaded ? <Preloader /> : <GoodsList goodsList={goods} />}
        </main>
    );
}

export default Shop;