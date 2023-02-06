import {configureStore} from "@reduxjs/toolkit";
import appSlice from '../features/root-slice'

export default  configureStore({
    reducer: {
        root: appSlice
    }
});