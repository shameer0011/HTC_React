import React from 'react'
import DenseAppBar from './appbar/appbar';
import SimpleAppBar from '../container/sideAppBar/sideBar'
import { Box } from '@mui/system';
import AppRouter from '../../router/appRouter';
const Index = () => {
    return (
        <>
            <div>
                <DenseAppBar />
            </div>
            <Box >
                {/* <div>
                    <SimpleAppBar />
                </div> */}
                <div>
                    <AppRouter />
                </div>
            </Box>
        </>
    )
}
export default Index;
