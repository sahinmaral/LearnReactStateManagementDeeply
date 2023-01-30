import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../models/Pokemon";
import { PokemonState, RequestStatuses } from "../models/PokemonState";

export const initialState: PokemonState = {
  allPokemons: [],
  filteredPokemons: [],
  search: "",
  error: undefined,
  status: RequestStatuses.IDLE,
};

export const fetchPokemons = createAsyncThunk("pokemons", async () => {
  return await fetch("./data/pokemon.json")
    .then((res) => res.json())
    .then((data) => data as Pokemon[]);
});

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSearch: (state: PokemonState, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.filteredPokemons = state.allPokemons
        .filter((p) =>
          p.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())
        )
        .slice(0, 20)
        .sort((a, b) => a.name.localeCompare(b.name));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPokemons.pending, (state, action) => {
        state.status = RequestStatuses.LOADING;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = RequestStatuses.SUCCEEDED;
        state.allPokemons = action.payload;
        state.filteredPokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = RequestStatuses.FAILED;
        state.error = action.error.message;
      });
  },
});

export const { setSearch } = pokemonSlice.actions;

export default pokemonSlice.reducer;
