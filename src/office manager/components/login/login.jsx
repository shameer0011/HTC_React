import React, { useState } from "react";

import { useStyles } from './style'
function Login(props) {
    const { handleSubmit, errorMessages, isSubmitted } = props;
    // React States

    const classes = useStyles();
    // User Login info


    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className={classes.inputContainer}>
                    <label>Username </label>
                    <input type="text" name="email" required className={classes.input} />
                    {renderErrorMessage("email")}
                </div>
                <div className={classes.inputContainer}>
                    <label>Password </label>
                    <input type="password" name="pass" required className={classes.input} />
                    {renderErrorMessage("pass")}
                </div>
                <div className={classes.buttoContainer}>
                    <input type="submit" className={classes.submit} />
                </div>
            </form>
        </div>
    );

    return (
        <div className={classes.app}>
            <div className={classes.loginForm}>
                <div className={classes.title}>Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default Login;