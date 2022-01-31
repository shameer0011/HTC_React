import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AmazonLogo from '../../amazon-resource/Amazon_Logo.png';
import './login.css';
import { useSelector, useDispatch } from 'react-redux';
import { loginInitiate } from '../../redux/actions/authActions';
import { useEffect } from 'react';
const Login = () => {
    let dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.data)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const signIn = (e) => {
        e.preventDefault();
        dispatch(loginInitiate(email, password))
    }
    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [user, history])
    return <div className='login'>
        <Link to='/'>
            <img src={AmazonLogo} className='login-logo' alt="logo" />
        </Link>
        <div className='login-container'>
            <h1>
                Sign in
            </h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signIn} className='login-signIn'>SignIn</button>
            </form>
            <p>
                By continueing you agree to amazon condition of use and privacy Notice
            </p>
        </div>
        <p>New to amzon</p>
        <Link to='/register'>
            <button className='login-register'>
                Create your amazon account
            </button>
        </Link>
    </div>
};

export default Login;
