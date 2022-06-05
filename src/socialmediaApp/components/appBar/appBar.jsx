import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DrawerContent from '../../containers/drawerContent/drawerContent';
export default function Header(props) {
    const { login, logout } = props;
    let location = useLocation();

    const [open, setOpen] = React.useState(false);

    const homePage = () => {
        window.location.href = '/';
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const [user, setUser] = useState(localStorage.getItem('profile'));
    useEffect(() => {
        setUser(localStorage.getItem('profile'));
    }, [location])
    const data = { "Ascending": "Ascending", "Descending": "Descending" }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ cursor: "pointer" }} onClick={homePage}>
                        App
                    </Typography>
                    {!user ? <Button color="inherit" onClick={login}>Login</Button> : <Button color="inherit" onClick={logout}>Logout</Button>}
                </Toolbar>
            </AppBar>
            <DrawerContent
                open={open}
                handleDrawerClose={handleDrawerClose}
                data={data}
            />
        </Box>
    );
}
