import {createSlice} from "@reduxjs/toolkit";
import {getData} from '../api/index'

const initialState = {
    products: [],
    fillings: [],
    breads: [],
    vegetables: [],
    sauces: [],
    sizes: [],
    markets: [],
    loadings: {
        productsLoading: false,
        fillingsLoading: false,
        breadsLoading: false,
        vegetablesLoading: false,
        saucesLoading: false,
        sizesLoading: false,
        marketsLoading: false,
    },
    errors: [],
    activeTabProducts: 'sandwiches',
    activeTabModal: 'sizes',
    openModal: false,
    customSandwich: {},
    shoppingCart: []
};

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        setTabProducts: (state, action) => {
            state.activeTabProducts = action.payload
        },
        setTabModal: (state, action) => {
            state.activeTabModal = action.payload
        },
        setOpenModal: (state, action) => {
            state.openModal = action.payload
        },
        setCustomSandwich: (state, action) => {
            state.customSandwich = action.payload
        },
        setShoppingCart: (state, action) => {
            state.shoppingCart = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        }
    },
    extraReducers: {

        // getData
        [getData.pending]: (state, action) => {
            state.loadings[`${action.meta.arg}Loading`] = true;
            
        },
        [getData.fulfilled]: (state, action) => {

            state.loadings[`${action.meta.arg}Loading`] = false;
            state[action.meta.arg] = action.payload;
           
        },
        [getData.rejected]: (state, action) => {
            state.errors.push({
                type: action.meta.arg,
                error: action.payload,
            });
        },
    },
});

export const {setTabProducts, setTabModal, setOpenModal, setCustomSandwich, setShoppingCart, setProducts} = rootSlice.actions;
export default rootSlice.reducer;
