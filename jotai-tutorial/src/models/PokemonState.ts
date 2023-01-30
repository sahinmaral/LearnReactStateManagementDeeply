import { Pokemon } from "./Pokemon";

export interface PokemonState {
  pokemon: Pokemon[];
  search: string;
  allPokemon: Pokemon[];
  setAllPokemon: (pokemon: Pokemon[]) => void;
  setSearch: (search: string) => void;
}
