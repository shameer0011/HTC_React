import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Avatar, Button, Paper, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input";
import useStyles from "./authFormStyle";
import Icon from './icon'

const AuthForm = (props) => {
    const { handleSubmit, googleSuccess, googleError, setIsSignup, isSignup } = props;
    const classes = useStyles();
    // const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
    const [formData, setFormData] = useState(initialState)


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    };
    const switchMode = () => {
        setIsSignup((prev) => !prev);
    };
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)

    };
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={(e) => handleSubmit(e, formData)}>
                        <Grid container spacing={2}>

                            {isSignup && (
                                <>
                                    <Input
                                        name="firstName"
                                        label="First Name"
                                        handleChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name="lastName"
                                        label="Last Name"
                                        handleChange={handleChange}
                                        half
                                    />

                                </>
                            )
                            }
                            <Input
                                name="email"
                                label="Email Address"
                                handleChange={handleChange}
                                type="email"
                            />
                            <Input
                                name="password"
                                label="Password"
                                handleChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                handleShowPassword={handleShowPassword}
                            />
                            {isSignup && (
                                <>
                                    <Input
                                        name="confirmPassword"
                                        label="Repeat Password"
                                        handleChange={handleChange}
                                        type="password"
                                    />
                                </>
                            )
                            }
                        </Grid>
                        <GoogleLogin
                            clientId="659197113280-9rkmb51pabuaanqqr99ri062d7gff4dn.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton}
                                    color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Button>

                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>

                                    {isSignup ? "Already have an account? Sign in"
                                        : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default AuthForm;
