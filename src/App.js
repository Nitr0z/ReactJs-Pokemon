import React, { useState, useEffect } from 'react';
import Pokemon from './composants/Pokemon';

const App = () => {

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

    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        setAllPokemons(pokemons);
    }, []);

    function deleteRow(id) {
        console.log(id);
        const newList = allPokemons.filter((item) => item.id !== id);
        setAllPokemons(newList);
    }

    return ( < div className = "application" >


        <
        ul className = " poke-container" > {
            allPokemons.map((item) =>
                <
                Pokemon id = { item.id }
                name = { item.name }
                type = { item.type }
                />
            )
        } < /ul>

        <
        /div>
    );
};

export default App;