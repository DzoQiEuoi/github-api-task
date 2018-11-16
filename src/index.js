import './utils/objectEntriesPolyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import App from './components/app';

const EntryPoint = () => (
    <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <App />
    </Provider>
);

const root = document.getElementById('root');

render(<EntryPoint />, root);