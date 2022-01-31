import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './checkoutProduct.css';
import { remove_from_cart } from '../../redux/actions/cart_actions/remove_from_cart';
const CheckoutProduct = ({ image, title, price, rating, id }) => {
    let dispatch = useDispatch();
    const removeFromBasket = () => {
        dispatch(remove_from_cart(id))

    }
    return <div className='checkout-product'>
        <img src={image} alt="not image" className="checkout-product-image" />
        <div class="checkout-product-info">
            <p className="checkout-product-title">{title}</p>
            <p className="checkout-product-price">
                price:<strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className='checkout-product-rating'>
                {Array(rating).fill().map((_, index) => <p key={index}>*</p>)}
            </div>
            <button onClick={removeFromBasket}>
                <i>
                    <ShoppingCartOutlinedIcon />
                </i>
                Remove from basket
            </button>
        </div>
    </div>;
};

export default CheckoutProduct;
