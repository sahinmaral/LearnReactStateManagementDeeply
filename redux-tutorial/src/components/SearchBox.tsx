import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/pokemonSlice";
import { getSearch } from "../redux/store";

export const SearchBox: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const search = useSelector(getSearch);

  return (
      <input
        className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
        placeholder="Search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      ></input>
  );
};
