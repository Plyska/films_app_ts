import * as yup from "yup";

export const signupSchemaValidation = yup.object({
    email: yup.string().email().required(),
    name: yup.string().min(2).required(),
    password: yup.string().min(6)
        .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
        .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
        .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character'),
})