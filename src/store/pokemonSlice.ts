import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface PokemonState {
    pokemons: Array<any>;
    combatList: Array<any>;
}

const initialState: PokemonState = {
    pokemons: [],
    combatList: [],
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        // Acción para establecer la lista de Pokémon
        setPokemons: (state, action: PayloadAction<Array<any>>) => {
            state.pokemons = action.payload;
        },
        // Acción para agregar un Pokémon a la lista de combate
        addToCombatList: (state, action: PayloadAction<any>) => {
            if (state.combatList.length < 6) {
                state.combatList.push(action.payload);
            }
        },
        // Acción para eliminar un Pokémon de la lista de combate
        removeFromCombatList: (state, action: PayloadAction<any>) => {
            state.combatList = state.combatList.filter(
                (pokemon) => pokemon.id !== action.payload.id
            );
        },
    },
});

// Exporta las acciones
export const { setPokemons, addToCombatList, removeFromCombatList } =
    pokemonSlice.actions;

// Exporta el reducer
export default pokemonSlice.reducer;
