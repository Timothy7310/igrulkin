import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gamesAPI } from 'app/services';

const rootReducer = combineReducers({
  [gamesAPI.reducerPath]: gamesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
