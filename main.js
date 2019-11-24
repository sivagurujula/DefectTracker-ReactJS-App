import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import FilterDefectsContainer from './src/container/FilterDefectsContainer'
import VisibleDefectsListis from './src/container/VisibleDefectsList'
import Header from './src/Components/Header';
import filterDefectsReducer from './src/reducers/FilterDefectsActionReducer'

const middleware = applyMiddleware(thunk,createLogger)
const store = createStore(filterDefectsReducer,middleware)

ReactDOM.render(
            <Provider store={store}>
            < Header />
            <FilterDefectsContainer />
            <VisibleDefectsListis />
            </Provider>, document.getElementById('app'));
