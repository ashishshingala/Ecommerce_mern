import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userInfo: null,
    loading: false,
    error: null,
};

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData) => {
        console.log('userData', userData)
        const response = await axios.post('http://localhost:5000/api/user/register', userData);
        console.log('response', response)
        return response.data;
    }
);
export const loginUser = createAsyncThunk(
    'user/login',
    async (userData) => {
        console.log('userData', userData)
        const response = await axios.post('http://localhost:5000/api/user/login', userData);
        console.log('response', response)
        return response.data;
    }
);
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload.user;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload.user;
                
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;