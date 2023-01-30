import { Route, Routes } from "react-router-dom";
import ContextAndCustomHooksExample from "./components/ContextAndCustomHooksExample";
import ExamplePage1 from "./components/ExamplePage1";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mb-3">
        <Routes>
          <Route path="/" element={<div>Homepage</div>} />
          <Route path="/example-1" element={<ExamplePage1 />} />
          <Route path="/example-2" element={<ContextAndCustomHooksExample />} />
          <Route path="/example-2/:id" element={<PokemonDetail />} />
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
    </>
  );
}

export default App;
