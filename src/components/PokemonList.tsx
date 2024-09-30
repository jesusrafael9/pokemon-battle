import React from 'react';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
    pokemons: any[];
    onAddToCombat: (pokemon: any) => void;
    onViewDetails: (pokemon: any) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, onAddToCombat, onViewDetails }) => {
    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onAddToCombat={() => onAddToCombat(pokemon)}
                    onViewDetails={() => onViewDetails(pokemon)}
                />
            ))}
        </div>
    );
};

export default PokemonList;
