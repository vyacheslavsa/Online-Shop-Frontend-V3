import {createAsyncThunk} from "@reduxjs/toolkit";

const BASE_URL = process.env.REACT_APP_BASEURL;

const getData = (url, path) =>
    createAsyncThunk(path, async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`${url}/${path}`);
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

const getMenu = getData(BASE_URL, "products");
const getBreads = getData(BASE_URL, "breads");
const getFillings = getData(BASE_URL, "fillings");
const getSauces = getData(BASE_URL, "sauces");
const getSizes = getData(BASE_URL, "sizes");
const getVegetables = getData(BASE_URL, "vegetables");
const getMarkets = getData(BASE_URL, "markets");

export {
    getMenu,
    getBreads,
    getFillings,
    getSauces,
    getSizes,
    getVegetables,
    getMarkets,
};
