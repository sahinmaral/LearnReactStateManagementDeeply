import { createContext } from "react";
import { Link } from "react-router-dom";
import { usePokemon, PokemonProvider } from "../store";

const SearchBox: React.FunctionComponent = () => {
  const { search, setSearch } = usePokemon();

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
};

const PokemonList: React.FunctionComponent = () => {
  //const theme = useContext(ThemeContext);
  const { pokemon } = usePokemon();
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemon.map((p) => (
        <Link key={p.id} to={`/example-2/${p.id}`}>
          <li
            key={p.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {p.name}
              </h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

const ThemeContext = createContext("light");

const ContextAndCustomHooksExample = () => {
  return (
    <>
      <h1 className="text-center">useContext and Custom Hooks Example</h1>
      <ThemeContext.Provider value="dark">
          <div className="mx-auto max-w-3xl">
            <SearchBox />
            <PokemonList />
          </div>
      </ThemeContext.Provider>
    </>
  );
};

export default ContextAndCustomHooksExample;
