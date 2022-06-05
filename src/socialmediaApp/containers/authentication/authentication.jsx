import React, { useState } from 'react'
import useStyles from "./authStyle";
import AuthForm from '../../components/authForm/authForm';
import { login, signUpStart, StartLogin } from '../../redux/actions/Auth/user'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Authentication = () => {
  const [isSignup, setIsSignup] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e, formData) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUpStart(formData, history))
    } else {
      dispatch(StartLogin(formData, history))
    }
  }
  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch(login(result, token));
      history.push("/");
    } catch (error) {
      // console.log(error)
    }
  }
  const googleError = () => {
    // console.log("error")
  }
  return (
    <>
      <AuthForm handleSubmit={handleSubmit}
        googleSuccess={googleSuccess}
        googleError={googleError}
        setIsSignup={setIsSignup}
        isSignup={isSignup}
      />
    </>
  )
}
export default Authentication;

