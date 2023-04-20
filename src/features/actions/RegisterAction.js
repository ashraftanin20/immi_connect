import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios-client";

export const registerUser = createAsyncThunk("auth/registerUser", 
                            async (values, {rejectWithValue}) => {
    try {
      
        //const response = await axiosClient.get('http://localhost:8000/sanctum/csrf-cookie');
        const { data } = await axiosClient.post("http://localhost:8000/api/signup", {
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirmation: values.password_confirmation,
            //_token: '{!! csrf_token() !!}'
        });
        // axiosClient.get('/sanctum/csrf-cookie')
        // .then(response => {
        // axiosClient.post('/api/signup', {
        //     name: values.name,
        //     email: values.email,
        //     password: values.password,
        //     password_confirmation: values.password_confirmation,
        // }).then(response => {
        //         //props.login();
        //         localStorage.setItem("userInfo", JSON.stringify(response.data));
        //         return JSON.stringify(response.data);
        // })
    
        //localStorage.setItem("userInfo", JSON.stringify(data));
        return JSON.stringify(data);
        
        
    } catch(error){
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
});