import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getAdditives, login, registration, logout, checkAuth } from "../api/index";

const initialState = {
  auth: {
    isAuth: false,
    user: {},
  },
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
    authLoading:false
  },
  errors: [],
  activeTabProducts: "sandwiches",
  activeTabModal: "sizes",
  openModal: false,
  customSandwich: {},
  shoppingCart: [],
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setTabProducts: (state, action) => {
      state.activeTabProducts = action.payload;
    },
    setTabModal: (state, action) => {
      state.activeTabModal = action.payload;
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload;
    },
    setCustomSandwich: (state, action) => {
      state.customSandwich = action.payload;
    },
    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    // getProducts
    [getProducts.pending]: (state, action) => {
        state.errors = [];
      state.loadings[`${action.meta.arg}Loading`] = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state[action.meta.arg] = action.payload;
      state.loadings[`${action.meta.arg}Loading`] = false;
    },
    [getProducts.rejected]: (state, action) => {
        state.errors.push(action.payload);
      state.loadings[`${action.meta.arg}Loading`] = false;
    },

    // getAdditives
    [getAdditives.pending]: (state, action) => {
        state.errors = [];
      state.loadings[`${action.meta.arg}Loading`] = true;
    },
    [getAdditives.fulfilled]: (state, action) => {
      state[action.meta.arg] = action.payload;
      state.loadings[`${action.meta.arg}Loading`] = false;
    },
    [getAdditives.rejected]: (state, action) => {
        state.errors.push(action.payload);
      state.loadings[`${action.meta.arg}Loading`] = false;
    },

    //login
    [login.pending]: (state) => {
        state.errors = [];
        state.loadings.authLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.auth.user.login = action.payload.user.login;
      state.auth.user.id = action.payload.user.id;
      localStorage.setItem("token", action.payload.accessToken);
      state.auth.isAuth = true;
      state.loadings.authLoading = false
    },
    [login.rejected]: (state, action) => {
        state.errors.push(action.payload);
        state.loadings.authLoading = false
    },

    //registration
    [registration.pending]: (state) => {
        state.errors = [];
        state.loadings.authLoading = true
    },
    [registration.fulfilled]: (state, action) => {
      state.auth.user.login = action.payload.user.login;
      state.auth.user.id = action.payload.user.id;
      localStorage.setItem("token", action.payload.accessToken);
      state.auth.isAuth = true;
      state.loadings.authLoading = false
    },
    [registration.rejected]: (state, action) => {
        state.loadings.authLoading = false
        state.errors.push(action.payload);
    },

    //logOut
    [logout.pending]: (state) => {
        state.errors = [];
        state.loadings.authLoading = true
    },
    [logout.fulfilled]: (state, action) => {
      localStorage.removeItem('token', action.payload.accessToken)
      state.auth.isAuth = false
      state.auth.user = {}
      state.auth.token = {}
      state.loadings.authLoading = false
    },
    [logout.rejected]: (state) => {
        state.errors.push(action.payload);
        state.loadings.authLoading = false
    },

    //checkAuth
    [checkAuth.pending]: (state) => {
        state.errors = [];
        state.loadings.authLoading = true
    },
    [checkAuth.fulfilled]: (state, action) => {
        state.auth.user.login = action.payload.user.login
        state.auth.user.id = action.payload.user.id
        localStorage.setItem('token',action.payload.accessToken)
        state.auth.isAuth = true
        state.loadings.authLoading = false
    },
    [checkAuth.rejected]: (state, action) => {
        state.errors.push(action.payload);
        state.loadings.authLoading = false
    },
  },
});

export const { setTabProducts, setTabModal, setOpenModal, setCustomSandwich, setShoppingCart, setProducts } =
  rootSlice.actions;
export default rootSlice.reducer;
