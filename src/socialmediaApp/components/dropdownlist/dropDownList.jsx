import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    const { handleChange, age } = props;
    const { Ascending, Descending } = props.data;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={(e) => handleChange(e.target.value)}
                >
                    <MenuItem value={Ascending}>Ascending</MenuItem>
                    <MenuItem value={Descending}>Descending</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}