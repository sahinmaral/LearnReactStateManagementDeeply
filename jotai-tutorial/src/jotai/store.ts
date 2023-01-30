import { Pokemon } from "../models/Pokemon";
import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

export const searchAtom = atom("");

export const [allPokemon] = atomsWithQuery<Pokemon[]>(() => ({
  queryKey: ["allPokemon"],
  queryFn: async () => {
    const res = await fetch(`./data/pokemon.json`);
    return res.json();
  },
}));

export const filteredPokemon = atom((get) => {
  return get<Pokemon[]>(allPokemon)
    .filter((p: Pokemon) =>
      p.name.toLocaleLowerCase().includes(get(searchAtom).toLocaleLowerCase())
    )
    .slice(0, 20)
    .sort((a: Pokemon, b: Pokemon) => a.name.localeCompare(b.name));
});
