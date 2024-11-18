import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

const Pokemon = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );
  const pokemon = await response.json();

  // Capitalize the first letter of the Pokémon name or stats
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="p-6">
      {/* Back to List Link */}
      <div className="mb-4">
        <Link href="/Pokemon">
          <a className="text-blue-500 underline">← Back to Pokédex</a>
        </Link>
      </div>

      {/* Pokémon Name */}
      <h1 className="text-4xl font-bold text-center capitalize">
        {capitalize(pokemon.name)}
      </h1>

      {/* Pokémon Image */}
      <div className="flex justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${params.id}.png`}
          alt={pokemon.name}
          width={300}
          height={300}
          className="my-4"
        />
      </div>

      {/* Basic Information (Types, Abilities, Height, Weight) */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Types */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Types</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {pokemon.types.map((type: { type: { name: string } }) => (
              <span
                key={type.type.name}
                className="inline-block bg-blue-200 text-black p-2 rounded-full mr-2"
              >
                {capitalize(type.type.name)}
              </span>
            ))}
          </div>
        </div>

        {/* Abilities */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Abilities</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {pokemon.abilities.map((ability: { ability: { name: string } }) => (
              <span
                key={ability.ability.name}
                className="inline-block bg-green-200 text-black p-2 rounded-full mr-2"
              >
                {capitalize(ability.ability.name)}
              </span>
            ))}
          </div>
        </div>

        {/* Height and Weight */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Physical Attributes</h2>
          <div className="bg-gray-100 p-4 rounded-lg text-black">
            <p>
              <strong>Height:</strong> {pokemon.height / 10} m
            </p>
            <p>
              <strong>Weight:</strong> {pokemon.weight / 10} kg
            </p>
          </div>
        </div>

        {/* Base Experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Base Experience</h2>
          <div className="bg-gray-100 p-4 rounded-lg text-black">
            <p>
              <strong>Base Experience:</strong> {pokemon.base_experience}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Base Stats</h2>
        <table className="w-full bg-gray-100 rounded-lg text-left">
          <thead>
            <tr>
              <th className="p-2 font-semibold">Stat</th>
              <th className="p-2 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            {pokemon.stats.map(
              (stat: { stat: { name: string }; base_stat: number }) => (
                <tr key={stat.stat.name} className="border-b">
                  <td className="p-2 capitalize text-black">
                    {stat.stat.name}
                  </td>
                  <td className="p-2 text-black">{stat.base_stat}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Moves Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Moves</h2>
        <div className="flex flex-wrap">
          {pokemon.moves.map((move: { move: { name: string } }) => (
            <span
              key={move.move.name}
              className="inline-block bg-yellow-200 text-black p-2 rounded-full mr-2 mb-2"
            >
              {capitalize(move.move.name)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;