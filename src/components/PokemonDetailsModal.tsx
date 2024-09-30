import React from 'react';

interface PokemonDetailsModalProps {
    pokemon: any;
    isOpen: boolean;
    onClose: () => void;
    onAddToCombat: () => void;
}

const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({ pokemon, isOpen, onClose, onAddToCombat }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>Volver</button>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
                <p>Número: {pokemon.id}</p>
                <p>Altura: {pokemon.height} dm</p>
                <p>Tipo: {pokemon.types.join(', ')}</p>
                <div className="stats">
                    <p>Ataque: {pokemon.stats.attack}</p>
                    <p>Defensa: {pokemon.stats.defense}</p>
                    <p>Ataque Especial: {pokemon.stats.specialAttack}</p>
                    <p>Defensa Especial: {pokemon.stats.specialDefense}</p>
                    <p>Velocidad: {pokemon.stats.speed}</p>
                </div>
                <button onClick={onAddToCombat}>Agregar a la lista</button>
            </div>
        </div>
    );
};

export default PokemonDetailsModal;
