import React from 'react';

interface PokemonCardProps {
    pokemon: any;
    onAddToCombat: () => void;
    onViewDetails: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onAddToCombat, onViewDetails }) => {
    // Genera la URL de la imagen del Pokémon basado en su ID
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    return (
        <div className="pokemon-card">
            <img src={imageUrl} alt={pokemon.name} onClick={onViewDetails} />
            <p>{pokemon.name}</p>
            <button onClick={onAddToCombat}>+</button>
        </div>
    );
};

export default PokemonCard;
