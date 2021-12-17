import React, {useState, useEffect} from 'react'

        function createPokemonObject(result) {
            result.forEach(async (pokemon) => {
              const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
              );
              const data = await res.json();
              setAllPokemons((currentList) => [...currentList, data]);
            });
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
          }, 
        []
    );
    
export default createPokemonObject;