import React from 'react';
import Pokemon from './Pokemon';

const DataPokemon = () => {
    var pokemons = [
        { id: 1, name: "Bulbizarre", type: "Plante" },
        { id: 2, name: "Herbizarre", type: "Plante" },
        { id: 3, name: "Florizarre", type: "Plante" },
        { id: 4, name: "Salamèche", type: "Feu" },
        { id: 5, name: "Reptincel", type: "Feu" },
        { id: 6, name: "Dracaufeu", type: "Feu" },
        { id: 7, name: "Carapuce", type: "Eau" },
        { id: 8, name: "Carabaffe", type: "Eau" },
        { id: 9, name: "Tortank", type: "Eau" },
        { id: 10, name: "Chenipan", type: "Insecte" },
        { id: 11, name: "Chrysacier", type: "Insecte" },
        { id: 12, name: "Papilusion", type: "Insecte" },
        { id: 13, name: "Aspicot", type: "Insecte" },
        { id: 14, name: "Coconfort", type: "Insecte" },
        { id: 15, name: "Dardargnan", type: "Insecte" },
    ];

    return ( <div className = "application" >
        
        <ul className = " poke-container" > {
            pokemons.map((item) =>
                <
                Pokemon id = { item.id }
                name = { item.name }
                type = { item.type }
                />
            )} 
        </ul>

        </div>
    );
};

export default DataPokemon;