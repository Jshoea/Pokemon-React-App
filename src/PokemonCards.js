import React from 'react';
import './Pokemoncard.css';

const POKEMON_API = 'https://raw.githubusercontent.com/' + 'PokeAPI/sprites/master/sprites/pokemon/';


/**Use the next function to grab a card */

function PokemonCard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`;
    /**now return the pokemon card name-->img-->type */
    return (
        <div className="PokemonCard">
            <div className="Pokemoncard-name">{props.name}</div>
            <img className="Pokemoncard-img">src={imgSrc}</img>
            <div className="Pokemon-type">Type: {props.type} </div>
            <div className="Pokemon-EXP">EXP: {props.exp}</div>
        </div>

    );
}
export default PokemonCard;