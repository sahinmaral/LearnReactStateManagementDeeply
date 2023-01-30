import "./App.css";
import { Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail";
import { PokemonList } from "./components/PokemonList";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:id" element={<PokemonDetail />} />
        <Route
          path="*"
          element={
            <div
              className="w-100 bg-red-500 text-white p-2"
              style={{ height: "100px" }}
            >
              Wrong Path
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
