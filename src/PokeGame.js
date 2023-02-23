import React from 'react';
import Pokedex from './Pokedex';


function PokeGame() {
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

    let hand1 = [];
    let hand2 = [...availablePokemon];
    while (hand1.length < hand2.length) {
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
    }

  return (
    <div>
        <div>PokeGame</div>
        <Pokedex pokemon={hand1} />
        <Pokedex pokemon={hand2} />
    </div>
  )
}

export default PokeGame