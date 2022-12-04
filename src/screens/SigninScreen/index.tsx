import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchemaValidation } from "../../validation/SignupSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { styles } from "./styles";
import { user } from "../../constants/usersInDatabase";
import { useNavigate } from "react-router-dom";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

interface SignupFormData {
    email: string;
    password: string;
    name: string;
}

const SigninScreen = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: yupResolver(signupSchemaValidation),
        defaultValues: {
            name: localStorage.getItem("inputUserName") || "",
            email: localStorage.getItem("inputUserEmail") || "",
            password: localStorage.getItem("inputUserPassword") || "",
        }
    });

    const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
            await localStorage.setItem("token", "ekjbvhwbgenvwjbtvbklrbeqjb");
            await localStorage.setItem("userName", data.name);
            navigate("/");
    };

    const goToLoginScreen = () => {
        navigate("/login");
    }

    const handleChangeNameField = (e: InputEvent) => {
        localStorage.setItem("inputUserName", e.target.value);
    }

    const handleChangeEmailField = (e: InputEvent) => {
        localStorage.setItem("inputUserEmail", e.target.value);
    }

    const handleChangePasswordField = (e: InputEvent) => {
        localStorage.setItem("inputUserPassword", e.target.value);
    }

    return (
        <Box sx={styles.conteiner}>
            <Box sx={styles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
                <Typography align="center" sx={styles.title} variant="h4">Sign Up</Typography>
                <TextField
                    {...register("name")}
                    sx={styles.input}
                    id="outlined-basic-name"
                    label="Name"
                    variant="outlined"
                    error={!!errors?.name}
                    helperText={errors?.name?.message}
                    onChange={handleChangeNameField}
                />
                <TextField
                    {...register("email")}
                    sx={styles.input}
                    id="outlined-basic-email"
                    label="Email"
                    variant="outlined"
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                    onChange={handleChangeEmailField}
                />
                <TextField
                    {...register("password")}
                    type="password"
                    sx={styles.input}
                    id="outlined-basic-password"
                    label="Password"
                    variant="outlined"
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                    onChange={handleChangePasswordField}
                />
                <Box sx={styles.buttonBox}>
                    <Button type="submit" variant="contained">
                        Sign up
                    </Button>
                    <Button variant="outlined" onClick={goToLoginScreen} >
                        Log in
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default SigninScreen