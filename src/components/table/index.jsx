import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function BasicTable(props) {

    const { columnDefinition, body, Rowcount,
        clickToBackandForward, CheckboxDetail,
        clickCheckbox, handleChange, checkedCopy

    } = props;

    const [index, setIndex] = useState(0)


    useEffect(() => {
        setIndex(clickToBackandForward)
    }, [clickToBackandForward, index])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                {columnDefinition.map((name) => {
                    return (
                        <>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Select</TableCell>
                                    <TableCell>{name.waferId}</TableCell>
                                    <TableCell align="right">{name.waferNumber}</TableCell>
                                    <TableCell align="right">{name.lotId}</TableCell>
                                    <TableCell align="right">{name.lotNumber}</TableCell>
                                    <TableCell align="right">{name.testId}</TableCell>
                                    <TableCell align="right">{name.testNumber}</TableCell>
                                    <TableCell align="right">{name.defectId}</TableCell>
                                    <TableCell align="right">{name.defectNumber}</TableCell>
                                </TableRow>
                            </TableHead>
                        </>
                    )
                })
                }
                <TableBody>
                    {body.slice(index, Rowcount + index).map((row, rowIndex) => (//5,5+5
                        <TableRow
                            key={row.waferId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Checkbox
                                    checked={rowIndex[rowIndex]}
                                    onChange={(e) => handleChange(row, rowIndex, e)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.waferId}
                            </TableCell>
                            <TableCell align="right">{row.waferNo}</TableCell>
                            <TableCell align="right">{row.lotId}</TableCell>
                            <TableCell align="right">{row.lotNo}</TableCell>
                            <TableCell align="right">{row.testId}</TableCell>
                            <TableCell align="right">{row.testNo}</TableCell>
                            <TableCell align="right">{row.defectId}</TableCell>
                            <TableCell align="right">{row.defectNo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
