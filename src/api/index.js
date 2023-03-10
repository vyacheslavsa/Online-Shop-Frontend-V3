import {createAsyncThunk} from "@reduxjs/toolkit";
import ProductsService from "../services/ProductsService";
import AdditivesService from "../services/AdditivesService";
import AuthService from "../services/AuthService";
import axios from "axios";

const getProducts = createAsyncThunk("getProducts", async (_,{rejectWithValue}) => {
    try {
        const response = await ProductsService.getProducts();
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return await response.data;
    } catch (error) {
      return rejectWithValue({
        message:error.response.data.message,
        validationErrors: error.response.data.errors,
        status: error.response.status
       });
    }
});

const getAdditives = createAsyncThunk("getAdditives", async (path, {rejectWithValue}) => {
    try {
        const response = await AdditivesService.getAdditives(path);
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return await response.data;
    } catch (error) {
      return rejectWithValue({
        message:error.response.data.message,
        validationErrors: error.response.data.errors,
        status: error.response.status
       });
    }
});

const login = createAsyncThunk('login', async (user, {rejectWithValue}) => {

    try {
        const response = await AuthService.login(user.loginField, user.passwordField);
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return await response.data;
    } catch (error) {
      return rejectWithValue({
        message:error.response.data.message,
        validationErrors: error.response.data.errors,
        status: error.response.status
       });
    }
})

const registration = createAsyncThunk('registration', async (user, {rejectWithValue}) => {

    try {
        const response = await AuthService.registration(user.loginField, user.passwordField);
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return await response.data;
    } catch (error) {
      return rejectWithValue({
        message:error.response.data.message,
        validationErrors: error.response.data.errors,
        status: error.response.status
       });
    }
})

const logout = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
    try {
        const response = await AuthService.logout();
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    } catch (error) {
      return rejectWithValue({
        message:error.response.data.message,
        validationErrors: error.response.data.errors,
        status: error.response.status
       });
    }
});


const checkAuth = createAsyncThunk('checkAuth', async (_,{rejectWithValue}) => {
    const BASE_URL = process.env.REACT_APP_BASEURL
    try {
        const response = await axios.get(`${BASE_URL}/refresh`, {withCredentials: true});
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return await response.data;
    } catch (error) {
      return rejectWithValue({
        message:error.response.data.message,
        validationErrors: error.response.data.errors,
        status: error.response.status
       });
    }
})



export {logout, getProducts, getAdditives, login, registration, checkAuth};
