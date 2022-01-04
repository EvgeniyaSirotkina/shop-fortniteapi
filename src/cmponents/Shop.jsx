import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import CartIcon from './CartIcon';
import CartList from './CartList';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [orderList, setOrderList] = useState([]);
    const [isCartDisplayed, setIsCartDisplayed] = useState(false);

    const handleCartDisplayed = () => {
        setIsCartDisplayed(!isCartDisplayed);
    }

    const getNumberOfPurchases = () => {
        return orderList.map(item => item.quantity).reduce((acc, el) => acc + el, 0);
    }

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

    const removeFromCart = (id) => {
        setOrderList(orderList.filter(item => item.id !== id));
    }

    const incQuantity = (id) => {
        const newOrder = orderList.map((el) => {
            if (el.id === id) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrderList(newOrder);
    }

    const decQuantity = (id) => {
        const newOrder = orderList.map((el) => {
            if (el.id === id) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity > 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrderList(newOrder.filter(item => item.quantity > 0));
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
            {
                !isCartDisplayed
                    ? <CartIcon quantity={getNumberOfPurchases()} handleCartDisplayed={handleCartDisplayed} />
                    : <CartList
                        orderList={orderList}
                        handleCartDisplayed={handleCartDisplayed}
                        removeFromCart={removeFromCart}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
            }

            {
                !isLoaded ? <Preloader /> : <GoodsList goodsList={goods} addToCart={addToCart} />
            }
        </main>
    );
}

export default Shop;