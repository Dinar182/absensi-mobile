import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AbsenState from './slicer/AbsenState';
import LoginState from './slicer/LoginState';
import HistoryAbsenState from './slicer/HistoryAbsenState';
import HomeSlicer from './slicer/HomeSlicer';

const rootReducer = combineReducers({
  AbsenState: AbsenState,
  LoginState: LoginState,
  HistoryState: HistoryAbsenState,
  HomeState: HomeSlicer,
});

const logger = createLogger();

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(thunk),
});

export default Store;
