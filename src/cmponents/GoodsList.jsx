import GoodItem from './GoodItem';
import NotFound from './NotFound';

const GoodsList = (props) => {
    const { goodsList = [], addToCart = Function.prototype } = props;
    return (
        <div className='goods'>
            {
                goodsList.length ?
                    goodsList.map(goodsItem => goodsItem.granted.map(grantedGoodsItem => (
                        <GoodItem key={grantedGoodsItem.id} goodsItem={grantedGoodsItem} price={goodsItem.price} addToCart={addToCart} />))
                    ) : (<NotFound />)
            }
        </div>
    )
}

export default GoodsList;