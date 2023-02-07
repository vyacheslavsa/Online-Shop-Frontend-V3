import { createSlice } from "@reduxjs/toolkit";
import {getMenu, getBreads, getFillings, getMarkets, getSauces, getSizes, getVegetables} from '../api/index'

const initialState = {
  menu: [],
  fillings: [],
  breads: [],
  vegetables: [],
  souces: [],
  sizes: [],
  markets: [],
  loadings: {
    menuLoading: false,
    fillingsLoading: false,
    breadLoading: false,
    vegetablesloading: false,
    saucesLoading: false,
    sizesLoading: false,
    marketsLoading: false,
  },
  errors: [],
};

const rootSlice = createSlice({
  name: "root",
  initialState,
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
        console.log(state, action)
      state.loadings.breadsLoading = false;
      state.breads = action.payload;
    },
    [getBreads.rejected]: (state, action) => {
      state.errors.push({
        type: action.type,
        error: action.payload,
      });
    },

    //getSouces
    [getSauces.pending]: (state) => {
      state.loadings.soucesLoading = true;
    },
    [getSauces.fulfilled]: (state, action) => {
      state.loadings.soucesLoading = false;
      state.souces = action.payload;
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

// export const { inc } = rootSlice.actions;
export default rootSlice.reducer;
