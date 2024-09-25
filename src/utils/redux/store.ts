import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import authReducer from "@/src/features/authSlice";
import stateReducer from "@/src/features/stateSlice";
import cityReducer from "@/src/features/citySlice";
import registerReducer from "@/src/features/registerSlice";
import flightReducer from "@/src/features/flightSlice"

// Create the root reducer using combineReducers
const rootReducer = combineReducers({
  auth: authReducer,
  stateList: stateReducer,
  districtList: cityReducer,
  register: registerReducer,
  flight: flightReducer,
});

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["auth", "register"], // Only persist auth and register slices (or others if needed)
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== "production", // Enable dev tools in development
});

// Create the persistor
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
