import * as yup from "yup";

export const loginSchemaValidation = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6)
        .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
        .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
        .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character'),
})