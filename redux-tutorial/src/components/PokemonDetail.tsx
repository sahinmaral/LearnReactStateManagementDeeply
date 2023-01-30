import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllPokemons } from "../redux/store";

const PokemonDetail: React.FunctionComponent = () => {
  const { id } = useParams();
  const pokemon = useSelector(getAllPokemons);

  const pokemonData = pokemon.find((p) => p.id === +id!);

  if (!pokemonData) {
    return <div>No pokemon found</div>;
  }

  return (
    <div className="mt-3">
      <Link to="/">
        <h1 className="text-2xl font-bold mb-5">&lt; Home</h1>
      </Link>
      <div className="grid grid-cols-2">
        <img
          className="w-96 h-96 flex-shrink-0 mx-auto bg-black rounded-xl"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
          alt=""
        />
        <div className="ml-3">
          <h2 className="text-2xl font-bold">{pokemonData.name}</h2>
          <div className="mt-3">
            <h3 className="text-xl font-bold">Stats</h3>
            <ul className="mt-3">
              {[
                "hp",
                "attack",
                "defense",
                "special_attack",
                "special_defense",
                "speed",
              ].map((stat) => (
                <li key={stat} className="grid grid-cols-2">
                  <span className="font-bold">{stat}</span>
                  <span>{pokemonData[stat as keyof typeof pokemonData]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
