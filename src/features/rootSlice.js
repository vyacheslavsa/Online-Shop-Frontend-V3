import {createSlice} from "@reduxjs/toolkit";
import {getMenu, getBreads, getFillings, getMarkets, getSauces, getSizes, getVegetables} from '../api/index'

const initialState = {
    menu: [],
    fillings: [],
    breads: [],
    vegetables: [],
    sauces: [],
    sizes: [],
    markets: [],
    loadings: {
        menuLoading: false,
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
        setMenu: (state, action) => {
            state.menu = action.payload
        }
    },
    extraReducers: {
        // getMenu
        [getMenu.pending]: (state) => {
            state.loadings.menuLoading = true;
        },
        [getMenu.fulfilled]: (state, action) => {
            state.loadings.menuLoading = false;
            state.menu = action.payload;
        },
        [getMenu.rejected]: (state, action) => {
            state.errors.push({
                type: action.type,
                error: action.payload,
            });
        },

        // getFillings
        [getFillings.pending]: (state) => {
            state.loadings.fillingsLoading = true;
        },
        [getFillings.fulfilled]: (state, action) => {

            state.loadings.fillingsLoading = false;
            state.fillings = action.payload;
        },
        [getFillings.rejected]: (state, action) => {
            state.errors.push({
                type: action.type,
                error: action.payload,
            });
        },

        //getMarkets
        [getMarkets.pending]: (state) => {
            state.loadings.marketsLoading = true;
        },
        [getMarkets.fulfilled]: (state, action) => {
            state.loadings.marketsLoading = false;
            state.markets = action.payload;
        },
        [getMarkets.rejected]: (state, action) => {
            state.errors.push({
                type: action.type,
                error: action.payload,
            });
        },

        //getBreads
        [getBreads.pending]: (state) => {
            state.loadings.breadsLoading = true;
        },
        [getBreads.fulfilled]: (state, action) => {
            state.loadings.breadsLoading = false;
            state.breads = action.payload;
        },
        [getBreads.rejected]: (state, action) => {
            state.errors.push({
                type: action.type,
                error: action.payload,
            });
        },

        //getSauces
        [getSauces.pending]: (state) => {
            state.loadings.saucesLoading = true;
        },
        [getSauces.fulfilled]: (state, action) => {
            state.loadings.saucesLoading = false;
            state.sauces = action.payload;
        },
        [getSauces.rejected]: (state, action) => {
            state.errors.push({
                type: action.type,
                error: action.payload,
            });
        },

        //getVegetables
        [getVegetables.pending]: (state) => {
            state.loadings.vegetablesLoading = true;
        },
        [getVegetables.fulfilled]: (state, action) => {
            state.loadings.vegetablesLoading = false;
            state.vegetables = action.payload;
        },
        [getVegetables.rejected]: (state, action) => {
            state.errors.push({
                type: action.type,
                error: action.payload,
            });
        },

        //getSizes
        [getSizes.pending]: (state) => {
            state.loadings.sizesLoading = true;
        },
        [getSizes.fulfilled]: (state, action) => {
            state.loadings.sizesLoading = false;
            state.sizes = action.payload;
        },
        [getSizes.rejected]: (state, action) => {
            state.errors.push({
                type: action.type,
                error: action.payload,
            });
        },
    },
});

export const {setTabProducts, setTabModal, setOpenModal, setCustomSandwich, setShoppingCart, setMenu} = rootSlice.actions;
export default rootSlice.reducer;
