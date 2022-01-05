import React, { useEffect, useContext } from "react";
import { ShopContext } from '../context';

const Alert = () => {
    const { alertName, closeAlert } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">'{alertName}' added to the cart</div>
        </div>
    )
}

export default Alert;