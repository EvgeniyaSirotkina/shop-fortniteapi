import { useContext } from 'react';
import { ShopContext } from '../context';

import GoodItem from './GoodItem';
import NotFound from './NotFound';

const GoodsList = () => {
    const { goods = [] } = useContext(ShopContext);;

    return (
        <div className='goods'>
            {
                goods.length ?
                    goods.map(goodsItem => goodsItem.granted.map(grantedGoodsItem => (
                        <GoodItem key={grantedGoodsItem.id} goodsItem={grantedGoodsItem} price={goodsItem.price} />))
                    ) : (<NotFound />)
            }
        </div>
    )
}

export default GoodsList;