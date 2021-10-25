import React from 'react'
import DenseAppBar from './appbar/appbar';
import SimpleAppBar from '../container/sideAppBar/sideBar'
import { Box } from '@mui/system';
import AppRouter from '../../router/appRouter';
const Index = () => {
    return (
        <Box>
            <div>
                <DenseAppBar />
            </div>
            <Box display="flex">
                <div>
                    <SimpleAppBar />
                </div>
                <div>
                    <AppRouter />
                </div>
            </Box>
        </Box>
    )
}
export default Index;
