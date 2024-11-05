import React from "react";
import Link from "next/link";
import Image from "next/image";
import PokemonFilter from "../components/PokemonFilter";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonPageProps {
  searchParams: {
    search?: string;
    type?: string;
  };
}

async function fetchPokemonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000");
  const data = await response.json();
  return data.results;
}

async function fetchPokemonByType(type: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  return data.pokemon.map(
    (p: { pokemon: { name: string; url: string } }) => p.pokemon
  );
}

const getPokemonIdFromUrl = (url: string) => {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1]; // The ID is the last part of the URL
};

const PokemonPage = async ({ searchParams }: PokemonPageProps) => {
  const { search = "", type = "" } = searchParams;

  // Fetch all Pokémon
  const allPokemon = await fetchPokemonList();
  let filteredPokemon = allPokemon;

  // Apply search filter
  if (search) {
    filteredPokemon = filteredPokemon.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Apply type filter if specified
  if (type) {
    const pokemonOfType = await fetchPokemonByType(type);
    filteredPokemon = filteredPokemon.filter((pokemon: Pokemon) =>
      pokemonOfType.some(
        (typePokemon: Pokemon) => typePokemon.name === pokemon.name
      )
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1
        className="text-4xl font-extrabold text-center text-red-600 mb-6"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Pokédex
      </h1>

      {/* Return to Home Button */}
      <div className="mb-6">
        <Link href="/">
          <button className="btn btn-primary hover:bg-gray-700 text-white px-4 py-2 rounded">
            Return to Home
          </button>
        </Link>
      </div>

      {/* Filter Component */}
      <PokemonFilter search={search} type={type} />

      {/* Pokémon List */}
      <div className="grid grid-cols-3 gap-4">
        {filteredPokemon.map((pokemon: Pokemon) => {
          const pokemonId = getPokemonIdFromUrl(pokemon.url);

          return (
            <Link key={pokemonId} href={`/Pokemon/${pokemonId}`}>
              <div className="block p-2 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-200 ease-in-out">
                <h2 className="text-lg font-semibold text-center text-gray-700">
                  {pokemon.name}
                </h2>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                  alt={pokemon.name}
                  width={150}
                  height={150}
                  className="mx-auto my-2 w-24 h-24 object-contain bg-gray-200 rounded-full border border-gray-300"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonPage;