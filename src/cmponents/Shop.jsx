import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config'
import Preloader from './Preloader'
import GoodsList from './GoodsList'

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

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
                !isLoaded ? <Preloader /> : <GoodsList goodsList={goods} />
            }
        </main>
    );
}

export default Shop;