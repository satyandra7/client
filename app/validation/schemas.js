import * as Yup from "yup"
export const registerSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    password_confirmation : Yup.string().required().oneOf([Yup.ref("password"), null], "Password and Confirm Password does not match")

})

export const loginSchema = Yup.object({

    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),

})