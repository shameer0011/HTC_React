import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect, useCallback, useRef } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { RowingSharp } from '@mui/icons-material';
import { columnDefinition } from './columnDefinition'

export default function BasicTable(props) {
    const { handleChange, body, defaultData, xAxis } = props;
    const [bodyState, setBodyState] = useState([])
    const ref = useRef('')
    useEffect(() => {
        if (body.length) {
            ref.current = body
            setBodyState(body)
        } else {
            ref.current = defaultData
            setBodyState(defaultData)
        }
    }, [defaultData, body])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
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
                                    <TableCell align="right">{name.x}</TableCell>
                                    <TableCell align="right">{name.y}</TableCell>
                                </TableRow>
                            </TableHead>
                        </>
                    )
                })
                }
                {bodyState.map((row) => (
                    <>
                        <TableBody>
                            <TableRow
                                key={"10"}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Checkbox
                                        checked={""}
                                        onChange={(e) => handleChange(e)}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.waferId}
                                </TableCell>
                                <TableCell align="right">{row.waferNumber}</TableCell>
                                <TableCell align="right">{row.lotId}</TableCell>
                                <TableCell align="right">{row.lotNumber}</TableCell>
                                <TableCell align="right">{row.testId}</TableCell>
                                <TableCell align="right">{row.testNumber}</TableCell>
                                <TableCell align="right">{row.defectId}</TableCell>
                                <TableCell align="right">{row.defectNumber}</TableCell>
                                <TableCell align="right">{xAxis == '' || null || undefined ? row.x : xAxis}</TableCell>
                                <TableCell align="right">{row.y}</TableCell>
                            </TableRow>
                        </TableBody>
                    </>
                ))}
            </Table>
        </TableContainer>
    );
}
