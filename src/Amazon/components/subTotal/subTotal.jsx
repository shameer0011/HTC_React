import React from 'react';
import './subTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../utils/getBasketTotal';
const SubTotal = () => {
    let history = useHistory();
    const cart = useSelector((state) => state.cartData);
    const user = useSelector((state) => state.data);
    const handleCheckout = (e) => {
        console.log("in handle checkout")
        if (user) {
            console.log("in user section")
            history.push('/payment')
        } else {
            history.push('/login')
        }
    }

    return <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Sub total ({cart.basket.length} items) : <strong>{value}</strong>
                    </p>
                    <small className='subtotal-gift'>
                        <input type="checkbox" />
                        This orders contain a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(cart.basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}

        />

        <button onClick={handleCheckout}>
            Proceed to checkout
        </button>
    </div>;
};

export default SubTotal;
