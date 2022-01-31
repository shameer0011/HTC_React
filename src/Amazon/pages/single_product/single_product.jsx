import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../utils/ProductsData';
import './single_product.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux'
import { add_to_cart } from '../../redux/actions/cart_actions/add_to_cart';
const Single_product = () => {
    let dispatch = useDispatch();
    let { id } = useParams();
    const Single_product = products.find((item) => item.id === id);
    const state = useSelector((state) => state.cartData);
    console.log(state, "dsatte")

    const addToBasket = (e) => {
        dispatch(add_to_cart(Single_product))
    }
    return <div className="single-product-container">
        <img className='single-product-ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />

        <div>
            <div className='single-product'>
                <img src={Single_product.image} alt="single product" className='single-product-image' />
                <div className="single-product-info">
                    <div className="single-product-title">
                        {Single_product.title}
                    </div>
                    <div className="single-product-rating">
                        {Array(Single_product.title).fill().map((_, index) => <p key={index}>*</p>)}
                    </div>
                    <p className="single-product-price">
                        price :<strong>$</strong>
                        <strong>{Single_product.price}</strong>
                    </p>
                    <div className="single-product-specefication">
                        <h4>Specefication</h4>
                        {Single_product && Single_product.specification.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </div>
                    <div className="single-product-detail">
                        <h4>product description</h4>
                        <p>{Single_product.detail}</p>
                    </div>
                    <button onClick={addToBasket}>
                        <i>
                            <ShoppingCartOutlinedIcon />
                        </i>
                        ADD TO BASKET
                    </button>

                </div>
            </div>
        </div>

    </div>;
};

export default Single_product;
