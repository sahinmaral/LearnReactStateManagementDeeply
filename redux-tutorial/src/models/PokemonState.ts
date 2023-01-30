import { Pokemon } from "./Pokemon";

export interface PokemonState {
  allPokemons: Pokemon[];
  filteredPokemons: Pokemon[];
  search: string;
  error: string | undefined;
  status: string;
}

export enum RequestStatuses {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
}
