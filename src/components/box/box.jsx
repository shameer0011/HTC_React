import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx(props) {
    const { data, pageNumberClick, width, height } = props;
    return (
        <>
            {data.map((pages) => {
                return (
                    <>
                        <Box
                            sx={{
                                border: "1px solid",
                                width: { width },
                                height: { height },
                                bgcolor: 'primary.dark',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                            onClick={() => pageNumberClick(pages)}>
                            {pages}
                        </Box>
                    </>
                )
            })}

        </>
    );
}