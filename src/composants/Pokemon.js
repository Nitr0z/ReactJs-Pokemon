import React from 'react';

const Pokemon = (pokemon) => {

    return ( 
        <li className = { "pokemon " + pokemon.type }>
        <div className = { "id " + pokemon.id }></div>
        <div className = 'id' > #{ pokemon.id } </div>   
        <img className = 'image'
        src = { 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + pokemon.id + '.svg' } alt=" "/>   
        <div className = 'name' > { pokemon.name } </div>   
        <div className = 'type' > Type: { pokemon.type } </div>  
        </li>
        
    );
};

export default Pokemon;