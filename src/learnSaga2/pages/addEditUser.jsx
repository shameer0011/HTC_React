import React, { useState } from 'react'
import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Button,
    Box
} from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { createUserStart, updateUserStart } from '../redux/actions';
import { toast } from 'react-toastify';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AddEditUser = () => {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        address: '',
    }
    const history = useHistory()
    const location = useLocation()
    const [details, setDetails] = useState(initialState)
    const [edit, setEdit] = useState(false)
    console.log(details)
    const dispatch = useDispatch();
    const user = useSelector(state => state.data)
    console.log(user, "user selection")
    const { name, email, phone, address } = details;
    const { id } = useParams();


    const handleSubmit = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    const goBack = () => {
        history.goBack()
    }
    const handlePost = () => {
        if (details.name && details.email && details.phone && details.address) {
            if (edit) {
                dispatch(updateUserStart({ payload: { details, id } }))
                toast.success("User Updated")
                history.push('/')
            } else {
                dispatch(createUserStart(details))
                toast.success("User Added Successfully")
                history.push('/')
            }
        }
    }
    useEffect(() => {
        if (id) {
            setEdit(true)
            const singleUser = user.users.data?.find(user => user.id === Number(id))
            setDetails({ ...singleUser })
        }
    }, [id, user.users.data, location, dispatch])

    return (
        <div>
            <div className="App">
                {/* <AppBar>
                    <toolbar>
                        <h1>ADD FORM</h1>
                    </toolbar>
                </AppBar> */}

                <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
                <form>
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Name"
                        variant="outlined"
                        name="name"
                        onChange={(e) => handleSubmit(e)}
                        value={name || ""}
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Email"
                        variant="outlined"
                        name="email"
                        onChange={(e) => handleSubmit(e)}
                        value={email || ""}
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Phone"
                        variant="outlined"
                        name="phone"
                        onChange={(e) => handleSubmit(e)}
                        value={phone || ""}
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Address"
                        variant="outlined"
                        name="address"
                        onChange={(e) => handleSubmit(e)}
                        value={address || ""}
                    />
                    <br />




                    <Button variant="contained" color="primary" onClick={handlePost}>
                        SAVE
                    </Button>

                    <Button variant="contained" color="primary" onClick={goBack}>
                        GO BACK
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddEditUser