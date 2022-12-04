import React from 'react';
import Box from '@mui/material/Box';
import { styles } from "./styles";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/");
    }

    const goToLoginScreen = () => {
        navigate("/login");
    }

    const goToSignupScreen = () => {
        navigate("/signin");
    }

    return (
        <Box sx={styles.container}>
            <Typography onClick={goToHomePage} variant='h4'>Films App</Typography>
            <Box>
                <Button sx={styles.button} type="submit" variant="contained" onClick={goToLoginScreen}>
                    Log in
                </Button>
                <Button sx={styles.button} type="submit" variant="contained" onClick={goToSignupScreen}>
                    Sign up
                </Button>
            </Box>
        </Box>
    )
}

export default Header