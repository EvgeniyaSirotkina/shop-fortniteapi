import { createContext, useReducer } from "react";
import { reducer } from './reducer';
import { 
    GET_GOODS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INC_QUANTITY,
    DEC_QUANTITY,
    CLOSE_ALERT,
    TOGGLE_CART
} from './constants';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    isLoaded: false,
    orderList: [],
    isCartDisplayed: false,
    alertName: '',
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.getGoods = (data) => {
        dispatch({ type: GET_GOODS, payload: { data } });
    }

    value.addToCart = (item) => {
        dispatch({ type: ADD_TO_CART, payload: { item } });
    }
    
    value.removeFromCart = (id) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { id } });
    }
    
    value.incQuantity = (id) => {
        dispatch({ type: INC_QUANTITY, payload: { id } });
    }
    
    value.decQuantity = (id) => {
        dispatch({ type: DEC_QUANTITY, payload: { id } });
    }
    
    value.closeAlert = () => {
        dispatch({ type: CLOSE_ALERT });
    }
    
    value.handleCartDisplayed = () => {
        dispatch({ type: TOGGLE_CART });
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}