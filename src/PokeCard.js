import React from 'react'

function PokeCard({pokeCard}) {
    const { id, name, type, base_experience } = pokeCard;
    
  return (
    <div>
        <h3>{name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
  )
}

export default PokeCard