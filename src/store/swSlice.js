"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starWarsCharacters: [],
};

export const swSlice = createSlice({
  name: "starWars",
  initialState,
  reducers: {
    updateStarWarsCharacters: (state, action) => {
      console.log(action);
      state.starWarsCharacters = action.payload;
    },
  },
});

export const { updateStarWarsCharacters } = swSlice.actions;

export default swSlice.reducer;
