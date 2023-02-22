import React from 'react';
import PokeCard from './PokeCard';
import PokedexCSS from './Pokedex.css';

function Pokedex() {
    const availablePokemon = [
        {id: 4, name: 'Charmander', type: 'Fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'Water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'Bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'Fairy', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'Ghost', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'Normal', base_experience: 65}
    ]

    const pokeCards = availablePokemon.map(pokeCard => <PokeCard key={pokeCard.id} pokeCard={pokeCard}/>)

  return (
    <div>
        <h1>Pokedex</h1>
        <div className="Pokedex-cards">
            {pokeCards}
        </div>
    </div>
  )
}

export default Pokedex