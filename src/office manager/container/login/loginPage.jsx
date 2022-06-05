import React, { useState } from 'react'
import { loginApi } from '../../apis/login/loginApi'
import Login from '../../components/login/login';
import { useHistory } from 'react-router-dom';
const LoginPage = () => {
    const history = useHistory();

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];
        const data = {
            email: email.value,
            password: pass.value
        }
        const result = await loginApi(data);
        console.log(result);
        localStorage.setItem('token', result.user.token);
        // Find user login info
        if (localStorage.getItem('token') === '[]') {
            console.log('Local storage is empty');
        } else {
            console.log("local storage is not empty")
            history.push('/');
        }
        const userData = database.find((user) => user.username === email.value);

        // Compare user info
        // if (userData) {
        //     if (userData.password !== pass.value) {
        //         // Invalid password
        //         setErrorMessages({ name: "pass", message: errors.pass });
        //     } else {
        //         setIsSubmitted(true);
        //     }
        // } else {
        //     // Username not found
        //     setErrorMessages({ name: "email", message: errors.uname });
        // }
    };
    return (
        <>
            <Login
                errorMessages={errorMessages}
                setErrorMessages={setErrorMessages}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default LoginPage