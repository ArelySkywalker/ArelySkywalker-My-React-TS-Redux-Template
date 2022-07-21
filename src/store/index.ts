import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const reducer = combineReducers({
    // Add your reducers here
});

const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store; 

export default store;