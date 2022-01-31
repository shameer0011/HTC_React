import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AmazonLogo from '../../amazon-resource/Amazon_Logo.png';
import { registerInitiate } from '../../redux/actions/authActions';
import './register.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Register = () => {
    let dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useSelector((state) => state.data);
    console.log(user, "userrr")

    useEffect(() => {
        if (user) {
            history.push('/')
        }
    }, [user, history])
    const signIn = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email, password))
        setEmail("");
        setPassword("")
    }
    return <div className='login'>
        <Link to='/'>
            <img src={AmazonLogo} className='login-logo' alt="logo" />
        </Link>
        <div className='login-container'>
            <h1>
                Register
            </h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signIn} className='login-signIn'>Submit</button>
            </form>

        </div>
        <p>You have already account</p>
        <Link to='/register'>
            <button className='login-register'>
                SignIn
            </button>
        </Link>
    </div>
};

export default Register;
