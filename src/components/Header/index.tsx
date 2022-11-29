import React from 'react';
import Box from '@mui/material/Box';
import { styles } from "./styles";
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
    return (
        <Box sx={styles.container}>
            <Typography variant='h4'>Films App</Typography>
        </Box>
    )
}

export default Header