import React from "react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import store from './app/store.js'
//import './antd/dist/antd.css';
import 'antd/dist/reset.css'
import { Provider } from "react-redux";


ReactDOM.render(
<Router>
    <Provider store={store}>
         <App/>
    </Provider>
</Router>
,document.getElementById('root'));