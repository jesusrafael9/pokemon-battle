import React from 'react';

interface CombatListProps {
    combatPokemons: any[];
    onRemoveFromCombat: (pokemon: any) => void;
    onViewDetails: (pokemon: any) => void;  // Nueva prop para ver los detalles
}

const CombatList: React.FC<CombatListProps> = ({ combatPokemons, onRemoveFromCombat, onViewDetails }) => {
    return (
        <div className="combat-list">
            <h3>Listos para el combate</h3>
            {combatPokemons.length === 0 ? (
                <p>Lista vacía, no hay ningún Pokémon listo</p>
            ) : (
                combatPokemons.map((pokemon) => (
                    <div key={pokemon.id} className="combat-pokemon" onClick={() => onViewDetails(pokemon)}>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            alt={pokemon.name}
                        />
                        <p>{pokemon.name}</p>
                        <button onClick={(e) => { e.stopPropagation(); onRemoveFromCombat(pokemon); }}>🗑</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default CombatList;
