import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import './product.css';
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart } from '../../redux/actions/cart_actions/add_to_cart';
const Product = ({ id, title, price, rating, img }) => {

    const dispatch = useDispatch();

    const addToCArt = (e) => {
        const items = {
            id,
            title,
            price,
            rating,
            img
        }
        dispatch(add_to_cart(items))
    }
    return (
        <div className='product'>
            <div className='info'>
                <Link to={`product/${id}`} className="title">
                    {title}
                </Link>
                <p className='price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className='rating'>
                    {Array(rating).fill().map((_, index) => <p key={index}>*</p>)}
                </div>
            </div>

            <img src={img} />
            <button onClick={addToCArt}>
                <i>
                    <ShoppingCartOutlinedIcon />
                </i>
                ADD TO BASKET
            </button>
        </div>
    )

};

export default Product;
