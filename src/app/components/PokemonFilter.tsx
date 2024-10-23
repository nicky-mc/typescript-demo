// app/PokemonFilter.tsx
import React from "react";

const PokemonFilter = ({ search, type }: { search: string; type: string }) => {
  return (
    <form className="mb-6" method="GET">
      <input
        type="text"
        name="search"
        placeholder="Search Pokémon by name"
        defaultValue={search}
        className="border p-2 rounded w-full mb-4"
      />
      <select
        name="type"
        defaultValue={type}
        className="border p-2 rounded w-full"
      >
        <option value="">All Types</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="ice">Ice</option>
        <option value="fighting">Fighting</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="flying">Flying</option>
        <option value="psychic">Psychic</option>
        <option value="bug">Bug</option>
        <option value="rock">Rock</option>
        <option value="ghost">Ghost</option>
        <option value="dark">Dark</option>
        <option value="dragon">Dragon</option>
        <option value="steel">Steel</option>
        <option value="fairy">Fairy</option>
      </select>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors"
      >
        Filter
      </button>
    </form>
  );
};

export default PokemonFilter;
