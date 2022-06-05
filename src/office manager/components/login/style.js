import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    app: {
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
        height: "100vh",
        fontFamily: "Cambria, Cochin, Georgia, Times, Times New Roman, serif",
        backgroundColor: "#f8f9fd",
    },

    input: {
        height: "25px",
        border: "1px solid rgba(0, 0, 0, 0.2)",
    },

    submit: {
        marginTop: "10px",
        cursor: "pointer",
        fontSize: "15px",
        background: "red",
        border: "1px solid #01d28e",
        color: "#fff",
        padding: "10px 20px",
        "&:hover": {
            cursor: "pointer",
            background: "blue",
        },
    },



    buttonContainer: {
        display: "flex",
        justifyContent: "center"
    },

    loginForm: {
        backgroundColor: "white",
        padding: "2rem",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },

    listContainer: {
        display: "flex",
    },

    error: {
        color: "red",
        fontSize: "12px",
    },

    title: {
        fontSize: "25px",
        marginBottom: "20px",
    },

    inputContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        margin: "10px",
    }
});