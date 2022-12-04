import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styles } from "./styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isContinue, setIsContinue] = useState<boolean>(false);

    const name = localStorage.getItem("inputUserName");
    const email = localStorage.getItem("inputUserEmail");
    const password = localStorage.getItem("inputUserPassword");

    useEffect(() => {
        if (name || email || password) {
            setIsContinue(true);
        } else {
            setIsContinue(false);
        }
    }, [name, email, password]);

    const goToHomePage = () => {
        navigate("/");
    };

    const goToLoginScreen = () => {
        navigate("/login");
    };

    const goToSignupScreen = () => {
        navigate("/signin");
    };

    return (
        <Box sx={styles.container}>
            <Typography sx={styles.title} onClick={goToHomePage} variant="h4">
                Films App
            </Typography>
            <Box>
                <Button
                    sx={styles.button}
                    type="submit"
                    variant="contained"
                    onClick={goToLoginScreen}
                >
                    Log in
                </Button>
                {isContinue && (
                    <Button
                        sx={styles.button}
                        type="submit"
                        variant="contained"
                        onClick={goToSignupScreen}
                    >
                        continue sign up
                    </Button>
                )}

                {!isContinue && (
                    <Button
                        sx={styles.button}
                        type="submit"
                        variant="contained"
                        onClick={goToSignupScreen}
                    >
                        sign up
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default Header;
