import { useAtom } from "jotai";
import { searchAtom } from "../jotai/store";

export const SearchBox: React.FunctionComponent = () => {
  const [search, setSearch] = useAtom(searchAtom);

  return (
    <input
      className="mt-3 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    ></input>
  );
};
