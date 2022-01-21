import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {
    const { handleChange, stateValue, label1, label2 } = props;
    const [age, setAge] = React.useState(stateValue);

    const handleChangess = (event) => {
        setAge(event.target.value);
        handleChange(event.target.value, age)
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={age}
                    onChange={(e) => handleChangess(e)}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={label1}>{label1}</MenuItem>
                    <MenuItem value={label2}>{label2}</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}