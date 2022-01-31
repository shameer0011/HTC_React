import React from 'react';
import { Link } from 'react-router-dom';
import SerachIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import './header.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInitiate } from '../../redux/actions/authActions';
const Header = () => {
    let dispatch = useDispatch();
    const { user } = useSelector((state) => state.data)
    const cartItems = useSelector((state) => state.cartData);
    const handleAuth = (e) => {
        dispatch(logoutInitiate())
    }
    return (
        <nav className='header'>
            <Link to='/'>
                <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="image alto" />
            </Link>
            <div className='header-option'>
                <LocationOnOutlinedIcon />
            </div>
            <div className='header-option'>
                <span className='header-option1'>Hello</span>
                <span className='header-option2'>Select your address</span>
            </div>
            <div className='search'>
                <select>
                    <option>ALL</option>
                </select>
                <input type="text" className='searchInput'></input>
                <SerachIcon className="searchIcon" />
            </div>

            <div className='header-nav'>

                <Link to={`${user ? '/' : '/login'}`} className='header-link'>
                    <span className='header-option1'>
                        Hello {`${user ? user.email : 'Guest'}`}
                    </span>
                    <div onClick={handleAuth} className='header-option2'>
                        {user ? 'Signout' : 'SignIn'}
                    </div>

                </Link>
                <Link to='/orders' className='header-link'>
                    <span className='header-option1'>
                        returns
                    </span>
                    <div className='header-option2'>
                        & Order
                    </div>
                </Link>
                <Link to='/checkout' className='header-link'>
                    <div className='header-basket'>
                        <ShoppingCartOutlinedIcon />
                        <span className='header-option2 basket-count'>{cartItems.basket.length}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
};

export default Header;



