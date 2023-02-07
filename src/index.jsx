import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App.jsx";
import {Provider} from "react-redux";
import store from './store/index'
import '/index.css'

// render(<App/>, document.querySelector('#root'))

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);