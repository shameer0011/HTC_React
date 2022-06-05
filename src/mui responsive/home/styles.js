import { makeStyles } from '@material-ui/core/styles';
import { red, green, blue } from '@mui/material/colors';
import { styled, alpha } from '@mui/material/styles';

export const useStyles = makeStyles((theme) => ({
    logoLg: {
        [theme.breakpoints.up('sm')]: { // md de adiyilek red  0-960px //SMR
            display: "none"
        },

    },
    rightbar: {
        [theme.breakpoints.down('sm')]: { // md de adiyilek red  0-960px // Shameer
            display: "none"
        },
    },
    logoSm: {
        display: "none",
        [theme.breakpoints.up('sm')]: { // md de adiyilek red  0-960px // Shameer
            display: "block"
        },

    },
    search: {
        display: 'flex',
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.open ? "flex" : "none",
            width: '70%',
        },
    },
    input: {
        marginLeft: theme.spacing(1),
        color: "white"
    },
    icons: {
        alignItems: "center",
        display: (props) => props.open ? "none" : "flex",
    },
    badge: {
        color: "white",
        marginRight: theme.spacing(2),
    },
    searchButton: {
        marginRight: theme.spacing(2),

    },
    hideSearchbar: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    },
    cancel: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
    }

}))