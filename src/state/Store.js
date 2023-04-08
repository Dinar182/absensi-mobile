import {configureStore, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AbsenState from './slicer/AbsenState';

const rootReducer = combineReducers({
  AbsenState: AbsenState,
});

const logger = createLogger();

const Store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
    }).concat(thunk, logger),
});

export default Store;
