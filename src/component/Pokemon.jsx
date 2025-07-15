import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemonCharacters, setPokemonCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemonData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const allPokemonData = data.results.map(async (newData) => {
        const res = await fetch(newData.url);
        const data = await res.json();
        return data;
      });

      const allPokemonRes = await Promise.all(allPokemonData);
      setPokemonCharacters(allPokemonRes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const searchData = pokemonCharacters.filter((charcters) =>
    charcters.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  if (loading) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl font-semibold">Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl font-semibold">{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center">
      <header className="text-center text-5xl font-semibold my-3">
        <h1>Let's catch Pokemon</h1>
      </header>

      <div className=" border-b-2 w-3xs my-5">
        <input
          type="text"
          placeholder="Search pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none p-1 bg-white"
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-5">
        {searchData.map((charactersData) => {
          return <PokemonCard key={charactersData.id} data={charactersData} />;
        })}
      </ul>
    </section>
  );
};

export default Pokemon;
