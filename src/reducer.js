import {
    GET_GOODS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INC_QUANTITY,
    DEC_QUANTITY,
    CLOSE_ALERT,
    TOGGLE_CART
} from './constants';

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case GET_GOODS: 
                return {
                    ...state,
                    goods: payload.data.shop,
                    isLoaded: true
                }
        case ADD_TO_CART: {
            const itemIndex = state.orderList.findIndex(
                (orderItem) => orderItem.id === payload.item.id
            );

            let newOrderList = [];

            if (itemIndex < 0) {
                const newItem = {
                    ...payload.item,
                    quantity: 1,
                };

                newOrderList = [...state.orderList, newItem];
            } else {
                newOrderList = state.orderList.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                alertName: payload.item.name,
                orderList: newOrderList
            };
        }
        case REMOVE_FROM_CART:
            return {
                ...state,
                orderList: state.orderList.filter(item => item.id !== payload.id)
            };
        case INC_QUANTITY: {
            const newOrderList = state.orderList.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity + 1;
                    return {
                        ...el,
                        quantity: newQuantity,
                    };
                } else {
                    return el;
                }
            });

            return {
                ...state,
                orderList: newOrderList
            };
        }
        case DEC_QUANTITY: {
            const newOrderList = state.orderList.map((el) => {
                if (el.id === payload.id) {
                    const newQuantity = el.quantity - 1;
                    return {
                        ...el,
                        quantity: newQuantity > 0 ? newQuantity : 0,
                    };
                } else {
                    return el;
                }
            });

            return {
                ...state,
                orderList: newOrderList.filter(item => item.quantity > 0)
            };
        }
        case CLOSE_ALERT:
            return {
                ...state,
                alertName: ''
            };
        case TOGGLE_CART:
            return {
                ...state,
                isCartDisplayed: !state.isCartDisplayed
            };
        default:
            return state;
    }
}