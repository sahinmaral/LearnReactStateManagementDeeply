import React, {
  useEffect,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";

import { useQuery } from "@tanstack/react-query";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

interface PokemonState {
  search: string;
}

enum PokemonActionKind {
  SET_POKEMON = "SET_POKEMON",
  SET_SEARCH = "SET_SEARCH",
}

export function usePokemonSource(): {
  search: string;
  pokemon: Pokemon[];
  setSearch: (search: string) => void;
} {
  const { data: pokemon } = useQuery<Pokemon[]>(
    ["pokemon"],
    () => fetch("./data/pokemon.json").then((res) => res.json()),
    { initialData: [] }
  );

  const pokemonReducer = (
    state: PokemonState,
    action: { type: PokemonActionKind.SET_SEARCH; payload: string }
  ) => {
    switch (action.type) {
      case PokemonActionKind.SET_SEARCH:
        return { ...state, search: action.payload };
    }
  };

  const [state, dispatch] = useReducer(pokemonReducer, {
    search: "",
  });

  const setSearch = useCallback((search: string) => {
    dispatch({ type: PokemonActionKind.SET_SEARCH, payload: search });
  }, []);

  const filteredPokemon = useMemo(() => {
    return pokemon
      .filter((p) =>
        p.name.toLocaleLowerCase().includes(state.search.toLocaleLowerCase())
      )
      .slice(0, 20);
  }, [state.search, pokemon]);

  const sortedPokemon = useMemo(() => {
    return [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredPokemon]);

  return { pokemon: sortedPokemon, search: state.search, setSearch };
}

export function usePokemon() {
  return useContext(PokemonContext)!;
}

export const PokemonContext = createContext<
  ReturnType<typeof usePokemonSource> | undefined
>(undefined);

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
};
