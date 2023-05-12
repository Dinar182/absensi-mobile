import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AbsenState from './slicer/AbsenState';
import LoginState from './slicer/LoginState';
import HomeSlicer from './slicer/HomeSlicer';
import IzinState from './slicer/IzinState';
import CutiState from './slicer/CutiState';
import HistoryState from './slicer/HistoryState';

const rootReducer = combineReducers({
  AbsenState: AbsenState,
  LoginState: LoginState,
  HistoryState: HistoryState,
  HomeState: HomeSlicer,
  IzinState: IzinState,
  CutiState: CutiState,
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
