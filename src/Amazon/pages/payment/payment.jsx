import React, { useState, useEffect } from 'react';
import './payment.css';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { useHistory, Link } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { getBasketTotal } from '../../utils/getBasketTotal';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct'
import { useElements, CardElement, useStripe } from '@stripe/react-stripe-js'
import axios from '../../utils/axios';

const Payment = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    const cartData = useSelector((state) => state.cartData)
    const [succeed, setSucceed] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProccessing] = useState('');
    const [clientSecreting, setClientSecreting] = useState(true);
    const [error, setError] = useState(null);
    let stripe = useStripe()
    let element = useElements()
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payments/create?total=${getBasketTotal(cartData.basket) * 1000}`
            })
            setClientSecreting(response.data.clientSecret)
        }
        getClientSecret()
    }, [cartData])

    const user = useSelector((state) => state.data);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProccessing(true)
        const payload = await stripe.confirmCardPayment(clientSecreting, {
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then((payment_intent) => {
            setSucceed(true)
            setProccessing(false)
            setError(null)
            history.push('/orders')

        })
    }
    const handleChange = (e) => {
        setDisabled(null);
        setError(e.error ? e.error.message : '')
    }
    return <div className='payment'>
        <div className='payment-container'>
            <h1>Checkout {<Link to='/checkout'> {cartData.basket.length} items</Link>}</h1>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment-address'>
                    <p>{user && user.email}</p>
                    <p>House no. 230 Near botanical garden</p>
                    <p>Lucknow ,india</p>

                </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment-items'>
                    {cartData.basket.map((item, index) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.img}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='payment-section'>
                <div className='payment-title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment-details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment-priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total:{value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(cartData.basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeed}>
                                <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                            </button>
                        </div>
                        {error && <p>{error}</p>}
                    </form>

                </div>
            </div>
        </div>

    </div>;
};

export default Payment;
