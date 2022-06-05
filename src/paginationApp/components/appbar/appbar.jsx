import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import memories from "../../images/memories.png";
import memoriesLogo from "../../images/memoriesLogo.png";
import memoriesText from "../../images/memoriesText.png";
import { Avatar, Button, Container, Toolbar, Typography } from "@mui/material";
import { useEffect } from 'react'
import useStyles from "./style";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logoutAction } from "../../redux/actions/logoutAction";
import { useHistory } from 'react-router-dom';
import decode from 'jwt-decode';
const Appbar = () => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = React.useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const logout = () => {
        try {
            dispatch(logoutAction());
            history.push("/");
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp < Date.now() / 1000) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location])
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Link to="/" className={classes.brandContainer}>
                <img component={Link} to="/" src={memoriesText} alt="icon" height="45px" />
                <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
            </Link>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.purple}
                            alt={user.user?.name}
                            src={user.user?.imageUrl}
                        >
                            {user.user?.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user.user?.name}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                            onClick={logout}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};
export default Appbar;
