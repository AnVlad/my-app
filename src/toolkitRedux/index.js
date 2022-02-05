import { configureStore, combineReducers } from '@reduxjs/toolkit';
import vocabSlice from './reduxSlice';

const rootReducer = combineReducers({
  vocabSlice,
});

export default configureStore({
  reducer: rootReducer,
});
