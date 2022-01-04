import React, {useEffect} from "react";

const Alert = (props) => {
    const { name, closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">'{name}' added to the cart</div>
        </div>
    )
}

export default Alert;