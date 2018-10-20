import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store';
import { Provider } from 'react-redux';

ReactDOM.render(
    //引入store向下传递，使App成为Provider的子组件
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
