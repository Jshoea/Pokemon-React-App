/** PokemonGame calcs exp and passes it here
 * show/return the individual pokemon cards
 */

import React from 'react';
import PokemonCard from './PokemonCards';
import "./Pokedex.css";

function Pokedex(props) {
    let winMessage = null;
    if (props.winner) {
        winMessage = <p className="Pokedex-Winner">This team wins</p>;
    }

    return (
        <div className="Pokedex">
            <h2 className="Pokedex-title">Pokedex</h2>
            <div className="Pokedex-cards">
                {props.pokemon.map(p => (
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>
            <h4>Total experience: {props.exp}</h4>
            {winMessage}
        </div>
    );
}

export default Pokedex;
