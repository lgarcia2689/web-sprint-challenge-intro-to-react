// Write your Character component 
import React from 'react';


function Character(props) {
    const {character}= props
    return (
        <div>
            <h1>{character.name}</h1>
        </div>
    );
}

export default Character;