

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { loadUserStart, deleteUserStart } from '../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Home = () => {
    const users = useSelector(state => state.data)
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()
    useEffect(() => {
        dispatch(loadUserStart())
    }, [dispatch, location])

    const handleDelete = useCallback((id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            dispatch(deleteUserStart(id))
            toast.success('User deleted successfully')
            history.push('/')
        }

    }, [dispatch, history, location])
    const handleEdit = (id) => {
        console.log("edit actions")
        history.push(`/editUser/${id}`)
    }
    const handleView = (id) => {
        console.log("view actions")
        history.push(`/userinfo/${id}`)
    }
    return (
        <TableContainer component={Paper}>
            {users.users.loading ? <Box display="flex" justifyContent="center" alignItems="center" mt={10}><CircularProgress /></Box> :
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Email&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Phone&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Address&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Actions&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.users.data?.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                <StyledTableCell align="right">{row.address}</StyledTableCell>
                                <StyledTableCell align="right" style={{ cursor: "pointer" }}>
                                    <DeleteIcon onClick={() => handleDelete(row.id)} />
                                    <ModeEditIcon onClick={() => handleEdit(row.id)} />
                                    <VisibilityIcon onClick={() => handleView(row.id)} />
                                </StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            }
        </TableContainer>
    );
}
export default Home;
