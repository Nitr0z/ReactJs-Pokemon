import React, { useEffect, useState } from 'react'
import DataApi from './DataApi'
import "../styles/Api.css";

const Api = () => {

    function createPokemonObject(results)  {
        results.forEach( async pokemon => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data =  await res.json()
          setAllPokemons( currentList => [...currentList, data])
        })
      }

      const [allPokemons, setAllPokemons] = useState([]);
      const loadPoke = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
  
      const getAllPokemons = async () => {
        const res = await fetch(loadPoke);
        const data = await res.json();
        createPokemonObject(data.results);
      };
  
      useEffect(() => {
        getAllPokemons();
      }, []);

  return (
    <div>
      <div className="poke-container">
        <div className="container">
          {allPokemons.map( (pokemonStats, index) => 
            <DataApi
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
        </div>
      </div>
    </div>
  );
}

export default Api;
