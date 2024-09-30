import React from 'react';

interface CombatPokemonDetailsModalProps {
    pokemon: any;
    isOpen: boolean;
    onClose: () => void;
    onRemoveFromCombat: () => void;
}

const CombatPokemonDetailsModal: React.FC<CombatPokemonDetailsModalProps> = ({
                                                                                 pokemon,
                                                                                 isOpen,
                                                                                 onClose,
                                                                                 onRemoveFromCombat,
                                                                             }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>Volver</button>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    alt={pokemon.name}
                />
                <h2>{pokemon.name}</h2>
                <p>Número: {pokemon.id}</p>
                <p>Altura: {pokemon.height ? `${pokemon.height} dm` : 'No disponible'}</p>
                <p>Tipo: {pokemon.types ? pokemon.types.join(', ') : 'No disponible'}</p>
                <div className="stats">
                    <p>Ataque: {pokemon.stats?.attack ?? 'No disponible'}</p>
                    <p>Defensa: {pokemon.stats?.defense ?? 'No disponible'}</p>
                    <p>Ataque Especial: {pokemon.stats?.specialAttack ?? 'No disponible'}</p>
                    <p>Defensa Especial: {pokemon.stats?.specialDefense ?? 'No disponible'}</p>
                    <p>Velocidad: {pokemon.stats?.speed ?? 'No disponible'}</p>
                </div>
                <button onClick={onRemoveFromCombat} style={{ backgroundColor: 'red', color: 'white' }}>
                    Eliminar de la lista
                </button>
            </div>
        </div>
    );
};

export default CombatPokemonDetailsModal;
