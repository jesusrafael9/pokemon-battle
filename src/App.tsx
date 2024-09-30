import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import CombatList from './components/CombatList';
import PokemonDetailsModal from './components/PokemonDetailsModal';
import CombatPokemonDetailsModal from './components/CombatPokemonDetailsModal';  // Importamos la nueva modal
import { useSelector, useDispatch } from 'react-redux';
import { setPokemons, addToCombatList, removeFromCombatList } from './store/pokemonSlice';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null);
  const [pokemonDetails, setPokemonDetails] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCombatModalOpen, setIsCombatModalOpen] = useState(false);  // Estado para la nueva modal
  const [selectedCombatPokemon, setSelectedCombatPokemon] = useState<any | null>(null);  // Pokémon seleccionado en la lista de combate
  const pokemons = useSelector((state: any) => state.pokemon.pokemons);
  const combatPokemons = useSelector((state: any) => state.pokemon.combatList);
  const dispatch = useDispatch();

  useEffect(() => {
    // Llamada a la API para obtener los primeros 151 Pokémon
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((response) => response.json())
        .then((data) => {
          const pokemonsWithId = data.results.map((pokemon: any, index: number) => {
            const id = pokemon.url.split('/').filter(Boolean).pop();
            return { ...pokemon, id };  // Añadir el ID al objeto del Pokémon
          });
          dispatch(setPokemons(pokemonsWithId));
        });
  }, [dispatch]);

  const handleAddToCombat = (pokemon: any) => {
    const isAlreadyInCombatList = combatPokemons.some((p: any) => p.id === pokemon.id);

    if (!isAlreadyInCombatList) {
      // Obtener los detalles completos del Pokémon antes de agregarlo
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
          .then((response) => response.json())
          .then((data) => {
            const pokemonWithDetails = {
              id: data.id,
              name: data.name,
              height: data.height,
              types: data.types.map((typeInfo: any) => typeInfo.type.name),
              stats: {
                attack: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
                defense: data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
                specialAttack: data.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
                specialDefense: data.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat,
                speed: data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
              },
            };
            // Agregar a la lista de combate solo si no está duplicado
            // Evitar duplicados con un control adicional antes del dispatch
            if (!combatPokemons.some((p: any) => p.id === pokemonWithDetails.id)) {
              dispatch(addToCombatList(pokemonWithDetails));
            }
          });
    }
  };

  const handleRemoveFromCombat = (pokemon: any) => {
    dispatch(removeFromCombatList(pokemon));
  };

  const handleViewDetails = (pokemon: any) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemonDetails({
            id: data.id,
            name: data.name,
            height: data.height,
            types: data.types.map((typeInfo: any) => typeInfo.type.name),
            stats: {
              attack: data.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
              defense: data.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
              specialAttack: data.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
              specialDefense: data.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat,
              speed: data.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
            },
          });
        });
  };

  // Nueva función para abrir la modal al hacer clic en un Pokémon en la lista de combate
  const handleViewCombatPokemonDetails = (pokemon: any) => {
    setSelectedCombatPokemon(pokemon);
    setIsCombatModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

  const handleCloseCombatModal = () => {
    setIsCombatModalOpen(false);
    setSelectedCombatPokemon(null);
  };

  // Filtrar Pokémon por nombre o número
  const filteredPokemons = pokemons.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString().includes(searchTerm)
  );

  return (
      <div className="App">
        <header className="App-header">
          <h1>Pokémon Battle App</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="main-content">
            <PokemonList
                pokemons={filteredPokemons}
                onAddToCombat={handleAddToCombat}
                onViewDetails={handleViewDetails}
            />
            <CombatList
                combatPokemons={combatPokemons}
                onRemoveFromCombat={handleRemoveFromCombat}
                onViewDetails={handleViewCombatPokemonDetails}  // Pasamos la nueva función aquí
            />
          </div>
        </header>
        {pokemonDetails && (
            <PokemonDetailsModal
                pokemon={pokemonDetails}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onAddToCombat={() => handleAddToCombat(selectedPokemon)}
            />
        )}
        {selectedCombatPokemon && (
            <CombatPokemonDetailsModal
                pokemon={selectedCombatPokemon}
                isOpen={isCombatModalOpen}
                onClose={handleCloseCombatModal}
                onRemoveFromCombat={() => handleRemoveFromCombat(selectedCombatPokemon)}
            />
        )}
      </div>
  );
}

export default App;
