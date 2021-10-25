import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton } from '@mui/material';
import Box from '../box/box'
const pagination = ({ leftIcon, RightIcon, clickToBackandForward,
    arrayLength, page, Rowcount, pageNumberClick
}) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={leftIcon} disabled={clickToBackandForward <= 0} >
                <ChevronLeftIcon />
            </IconButton>

            <Box
                width={40}
                height={30}
                data={page} pageNumberClick={pageNumberClick} />
            <IconButton onClick={RightIcon} disabled={arrayLength - Rowcount === clickToBackandForward} >
                <ChevronRightIcon />
            </IconButton>
        </div>
    )
}
export default pagination;
