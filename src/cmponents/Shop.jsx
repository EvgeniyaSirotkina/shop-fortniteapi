import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import CartIcon from './CartIcon';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [orderList, setOrderList] = useState([]);

    const addToCart = (item) => {
        const itemIndex = orderList.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrderList([...orderList, newItem]);
        } else {
            const newOrder = orderList.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrderList(newOrder);
        }
    }

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
                !isLoaded ? <Preloader /> : <GoodsList goodsList={goods} addToCart={addToCart} />
            }
        </main>
    );
}

export default Shop;