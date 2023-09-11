"use client";
import { configureStore } from "@reduxjs/toolkit";
import swReducer from "./swSlice.js";

export const store = configureStore({
  reducer: {
    app: swReducer,
  },
});
