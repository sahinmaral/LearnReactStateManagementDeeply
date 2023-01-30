import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice, { fetchPokemons } from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

store.dispatch(fetchPokemons());

export const getSearch = (state: RootState) => state.pokemon.search;
export const getAPIResults = (state: RootState) => {
  return { error: state.pokemon.error, status: state.pokemon.status };
};

export const getFilteredPokemons = (state: RootState) =>
  state.pokemon.allPokemons.filter((p) =>
  p.name
    .toLocaleLowerCase()
    .includes(state.pokemon.search.toLocaleLowerCase())
)
.slice(0, 20)
.sort((a, b) => a.name.localeCompare(b.name));

export const getAllPokemons = (state: RootState) => state.pokemon.allPokemons;

