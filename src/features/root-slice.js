import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getMenu = createAsyncThunk('/getmenu', async function () {
    try {
        const response = await fetch('http://localhost:8000/producs')
        return await response.json()
    } catch (e) {

    }

})

const rootSlice = createSlice({
    name: 'test', initialState: {
        // value: 0,
        loading: false,
        menu: []
    }, // reducers: {
    //     inc(state, action) {
    //         state.value++
    //     },
    // },

    extraReducers: {
        [getMenu.pending]: (state) => {
            state.loading = true
        },
        [getMenu.fulfilled]: (state, action) => {
            state.loading = false
            state.menu = action.payload
        },
        // [getMenu.rejected]: (state, action) => {},
    }
});

export const {inc} = rootSlice.actions;
export default rootSlice.reducer;