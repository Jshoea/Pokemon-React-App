import React from "react";
import Pokedex from "./Pokedex";

function Pokemongame(props) {
    let team1 = [];
    let team2 = [...props.pokemon]
    /**use spread 
     * we'll be using the team 2 to add all the pokemon, then take half and distributing it to team 1
     * so we dont need 2 different functions to randomly put into each team
    */

    while (team1.length < team2.length) {
        let randIdx = Math.floor(Math.random() * team2.length);
        let randPkmn = team2.splice(randIdx, 1)[0];
        team1.push(randPkmn);

    }
    let exp1 = team1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = team2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    /** now return the two entries to see whose exp bar is higher */
    return (
        <div>
            <Pokedex pokemon={team1} exp={exp1} winner={exp1 > exp2} />
            <Pokedex pokemon={team2} exp={exp1} winner={exp2 > exp1} />
        </div>
    );

}


/** Put down a few pokemon cards to start via defaultprops of Pokedex */
Pokegame.defaultProps = {
    pokemon: [
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
};

export default Pokemongame;