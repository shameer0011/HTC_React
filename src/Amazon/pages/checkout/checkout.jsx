import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';
import SubTotal from '../../components/subTotal/subTotal';
import './checkout.css'

const Checkout = () => {
    const user = useSelector((state) => state.data);
    const cart = useSelector((state) => state.cartData)
    console.log(cart, "cartttt")
    return <div className="checkout">

        <div className='checkout-left'>
            <img className='checkout-ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />


            <div>
                <h3>Hello,{user?.user.email}</h3>
                <h2 className='checkout-title'>
                    {cart.basket.length === 0 ? 'Your Shopping basket is Empty' : 'Your Shopping Basket'}
                </h2>
                {cart.basket.map((item, index) => (
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        image={item.img}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className="checkout-right">
            <SubTotal />
        </div>
    </div>
};

export default Checkout;
