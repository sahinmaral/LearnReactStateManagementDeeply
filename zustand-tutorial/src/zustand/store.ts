import { create } from "zustand";
import { Pokemon } from "../models/Pokemon";
import { PokemonState } from "../models/PokemonState";

const searchAndSortPokemon = (pokemon: Pokemon[], search: string) => {
  return pokemon
    .filter((p) =>
      p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .slice(0, 20)
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const usePokemon = create<PokemonState>((set, get) => ({
  pokemon: [],
  allPokemon: [],
  search: "",
  setAllPokemon: (pokemon: Pokemon[]) => {
    set((state) => ({
      allPokemon: pokemon,
      pokemon: searchAndSortPokemon(pokemon, get().search),
    }));
  },
  setSearch: (search: string) => {
    set((state) => ({
      search,
      pokemon: searchAndSortPokemon(state.allPokemon, search),
    }));
  },
}));

fetch("./data/pokemon.json")
  .then((res) => res.json())
  .then((data: Pokemon[]) => usePokemon.getState().setAllPokemon(data));
