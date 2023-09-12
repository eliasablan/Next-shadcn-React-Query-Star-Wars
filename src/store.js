"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import starWarsReducer from "./reducers/starWarsSlice";

const rootReducer = combineReducers({
  //add all your reducers here
  starWars: starWarsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
