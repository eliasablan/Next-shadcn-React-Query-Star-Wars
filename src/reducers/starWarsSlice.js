"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

export const starWarsSlice = createSlice({
  name: "starWars",
  initialState,
  reducers: {
    updateCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { updateCharacters } = starWarsSlice.actions;

export default starWarsSlice.reducer;
