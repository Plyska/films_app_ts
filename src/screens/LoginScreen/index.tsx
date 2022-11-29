import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchemaValidation } from "../../validation/LoginSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { styles } from "./styles";
import { user } from "../../constants/usersInDatabase";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
    email: string;
    password: string;
}

const LoginScreen = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchemaValidation),
    });

    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        if (data.email === user.email && data.password === user.password) {
            await localStorage.setItem("token", "ekjbvhwbgenvwjbtvbklrbeqjb");
            navigate(0);
        } else {
            setError('email', { type: 'custom', message: 'invalid email' });
            setError('password', { type: 'custom', message: 'invalid password' });
        }
    };

    return (
        <Box sx={styles.conteiner}>
            <Typography variant="h4">Log in</Typography>

            <Box sx={styles.form} component="form" onSubmit={handleSubmit(onSubmit)}>

                <TextField
                    {...register("email")}
                    sx={styles.input}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                />
                <TextField
                    {...register("password")}
                    type="password"
                    sx={styles.input}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                />
                <Box sx={styles.buttonBox}>
                    <Button type="submit" variant="contained">
                        Log in
                    </Button>
                    <Button variant="outlined">
                        Sign in
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginScreen;
