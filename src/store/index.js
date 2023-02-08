import {configureStore} from "@reduxjs/toolkit";
import appSlice from '../features/rootSlice'

export default  configureStore({
    reducer: {
        data: appSlice
    }
});