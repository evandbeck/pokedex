import React from 'react';
import PokeCard from './PokeCard';
import PokedexCSS from './Pokedex.css';

function Pokedex({pokemon, exp, isWinner}) {
  const pokeHands = pokemon.map(pokeCard => <PokeCard key={pokeCard.id} pokeCard={pokeCard}/>)

  return (
    <div>
        <h1>Pokedex</h1>
        <p>Total Experience: {exp}</p>
        <p>{isWinner ? "WINNER!" : "LOSER!"}</p>
        <div className="Pokedex-cards">
            {pokeHands}
        </div>
    </div>
  )
}

export default Pokedex