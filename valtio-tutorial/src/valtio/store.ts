import { proxy } from "valtio";
import { derive } from "valtio/utils";
import { Pokemon } from "../models/Pokemon";

export const search = proxy({
  query: "",
});

export const allPokemon = proxy({
  list: [] as Pokemon[],
});

export const filteredPokemon = derive({
  list: (get) =>
    get(allPokemon)
      .list.filter((p) =>
        p.name
          .toLocaleLowerCase()
          .includes(get(search).query.toLocaleLowerCase())
      )
      .slice(0, 20)
      .sort((a, b) => a.name.localeCompare(b.name)),
});

fetch("./data/pokemon.json")
  .then((res) => res.json())
  .then((data: Pokemon[]) => {
    allPokemon.list = data;
    filteredPokemon.list = data;
  });
