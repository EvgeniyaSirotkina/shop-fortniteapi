import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import CartIcon from './CartIcon';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [orderList, setOrderList] = useState([]);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop);
                setIsLoaded(true);
            })
            .catch(error => {
                console.log(error);
                setGoods([]);
                setIsLoaded(false);
            })
    }, []);

    return (
        <main className='container content'>
            <CartIcon quantity={orderList.length} />
            {
                !isLoaded ? <Preloader /> : <GoodsList goodsList={goods} />
            }
        </main>
    );
}

export default Shop;