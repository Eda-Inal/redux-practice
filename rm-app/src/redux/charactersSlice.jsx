import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const REACT_APP_API_BASE_ENDPOINT = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async () => {
  const res = await axios(`${REACT_APP_API_BASE_ENDPOINT}`);
  return res.data;
});

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.items = action.payload.results;
      });
  }
});

export default charactersSlice.reducer;
