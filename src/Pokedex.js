import React from 'react';
import PokeCard from './PokeCard';
import PokedexCSS from './Pokedex.css';

function Pokedex(pokemon) {
  let pokeHand = pokemon.pokemon;
  const pokeHands = pokeHand.map(pokeCard => <PokeCard key={pokeCard.id} pokeCard={pokeCard}/>)

  return (
    <div>
        <h1>Pokedex</h1>
        <div className="Pokedex-cards">
            {pokeHands}
        </div>
    </div>
  )
}

export default Pokedex