import {createAsyncThunk} from "@reduxjs/toolkit";
import ProductsService from "../services/ProductsService";
import AdditivesService from "../services/AdditivesService";
import AuthService from "../services/AuthService";


const getProducts = createAsyncThunk("getProducts", async ({rejectWithValue}) => {
    try {
        const response = await ProductsService.getProducts();
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        return await response.data;
    } catch (error) {
        return rejectWithValue(error.message);
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
        return rejectWithValue(error.message);
    }
});

const login = createAsyncThunk('login', async (user, {rejectWithValue}) => {

    try {
        const response = await AuthService.login(user.loginField, user.passwordField);
        console.log(response.data)
        // if (response.status !== 200) {
        //     throw new Error(response.statusText);
        // }
        // return await response.data;
    } catch (error) {
        // return rejectWithValue(error.message);
    }
})

export {getProducts, getAdditives, login};
