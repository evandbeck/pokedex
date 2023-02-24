import React from 'react';
import PokeCard from './PokeCard';
import PokedexCSS from './Pokedex.css';

function Pokedex({pokemon, exp}) {
  const pokeHands = pokemon.map(pokeCard => <PokeCard key={pokeCard.id} pokeCard={pokeCard}/>)

  return (
    <div>
        <h1>Pokedex</h1>
        <p>Total Experience: {exp}</p>
        <div className="Pokedex-cards">
            {pokeHands}
        </div>
    </div>
  )
}

export default Pokedex