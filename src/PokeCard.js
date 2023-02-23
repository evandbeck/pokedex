import React from 'react';
import PokeCardCSS from './PokeCard.css'

function PokeCard({pokeCard}) {
    const { id, name, type, base_experience } = pokeCard;

    const pokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
    const pokeID = String(id).padStart(3, '0')
    let imgSrc = `${pokeAPI}${pokeID}.png`
    
  return (
    <div className="PokeCard">
        <h3>{name}</h3>
        <img src={imgSrc} alt={name}/>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
  )
}

export default PokeCard