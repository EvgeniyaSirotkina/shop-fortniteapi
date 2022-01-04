import GoodItem from './GoodItem';
import NotFound from './NotFound';

const GoodsList = (props) => {
    const { goodsList = [] } = props;
    return (
        <div className='goods'>
            {
                goodsList.length ?
                    goodsList.map(goodsItem => goodsItem.granted.map(grantedGoodsItem => (
                        <GoodItem key={grantedGoodsItem.id} goodsItem={grantedGoodsItem} price={goodsItem.price} />))
                    ) : (<NotFound />)
            }
        </div>
    )
}

export default GoodsList;