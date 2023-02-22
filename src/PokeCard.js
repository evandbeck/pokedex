import React from 'react';
import PokeCardCSS from './PokeCard.css'

function PokeCard({pokeCard}) {
    const { id, name, type, base_experience } = pokeCard;
    
  return (
    <div className="PokeCard">
        <h3>{name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
  )
}

export default PokeCard