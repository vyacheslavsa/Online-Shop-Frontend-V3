import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getAdditives, login, registration, logout, checkAuth } from "../api/index";

const initialState = {
  auth: {
    isAuth: false,
    user: {},
    token: {},
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
      state.loadings[`${action.meta.arg}Loading`] = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loadings[`${action.meta.arg}Loading`] = false;
      state[action.meta.arg] = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.errors.push({
        type: action.meta.arg,
        error: action.payload,
      });
    },

    // getAdditives
    [getAdditives.pending]: (state, action) => {
      state.loadings[`${action.meta.arg}Loading`] = true;
    },
    [getAdditives.fulfilled]: (state, action) => {
      state.loadings[`${action.meta.arg}Loading`] = false;
      state[action.meta.arg] = action.payload;
    },
    [getAdditives.rejected]: (state, action) => {
      state.errors.push({
        type: action.meta.arg,
        error: action.payload,
      });
    },

    //login
    [login.pending]: (state, action) => {
        state.loadings.authLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.loadings.authLoading = false
      state.auth.user.login = action.payload.user.login;
      state.auth.user.id = action.payload.user.id;
      state.auth.token.access = action.payload.accessToken;
      state.auth.token.refresh = action.payload.refreshToken;
      localStorage.setItem("token", action.payload.accessToken);
      state.auth.isAuth = true;
    },
    [login.rejected]: (state, action) => {
      console.log("login.rejected");
    },

    //registration
    [registration.pending]: (state, action) => {
        state.loadings.authLoading = true
    },
    [registration.fulfilled]: (state, action) => {
      state.loadings.authLoading = false
      state.auth.user.login = action.payload.user.login;
      state.auth.user.id = action.payload.user.id;
      state.auth.token.access = action.payload.accessToken;
      state.auth.token.refresh = action.payload.refreshToken;
      localStorage.setItem("token", action.payload.accessToken);
      state.auth.isAuth = true;
    },
    [registration.rejected]: (state, action) => {
      console.log("registration.rejected");
    },

    //logOut
    [logout.fulfilled]: (state, action) => {
      localStorage.removeItem('token', action.payload.accessToken)
      state.auth.isAuth = false
      state.auth.user = {}
      state.auth.token = {}
    },
    [logout.rejected]: (state, action) => {
      
    },

    //checkAuth
    [checkAuth.fulfilled]: (state, action) => {
        state.auth.user.login = action.payload.user.login
        state.auth.user.id = action.payload.user.id
        state.auth.token.access = action.payload.accessToken
        state.auth.token.refresh = action.payload.refreshToken
        localStorage.setItem('token',action.payload.accessToken)
        state.auth.isAuth = true
    },
    [checkAuth.rejected]: (state, action) => {
        console.log('checkAuth.rejected')
    },
  },
});

export const { setTabProducts, setTabModal, setOpenModal, setCustomSandwich, setShoppingCart, setProducts } =
  rootSlice.actions;
export default rootSlice.reducer;
