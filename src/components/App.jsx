import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { getMenu} from "../features/root-slice";

const App = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getMenu())
    },[dispatch])

    console.log(data)

    return (
        <div>
            React App
        </div>
    );
};

export default App;