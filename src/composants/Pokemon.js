import React from 'react';

const Pokemon = (pokemon) => {

    function deleteRow(id) {
        pokemon._handleDelete(id);
    }
    return ( <
        li className = { "id " + pokemon.id }
        li className = { "pokemon " + pokemon.type } >
        <
        div className = 'id' > #{ pokemon.id } <
        /div>  <
        div className = 'name' > { pokemon.name } <
        /div>  <
        div className = 'type' > Type: { pokemon.type } <
        /div>  < /
        li >
    );
};

export default Pokemon;