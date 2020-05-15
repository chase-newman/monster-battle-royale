import React from 'react';
import './Monster.css';

const monster = (props) => {
    let attack = Math.floor(Math.random() * 10);
    if(attack === 0) {
        attack = Math.floor(Math.random() * 10);   
    }
    let defense = Math.floor(Math.random() * 10);
    if(defense === 0) {
        defense = Math.floor(Math.random() * 10); 
    }
    
    let sendData = () => {
        console.log(props.monster);
        props.parentCallback(props.monster, attack, defense)
    }
    return (

        <div className="col col-sm-3 monster-card" onClick={sendData}>
            <h1>{props.monster}.</h1>
            <img src={`https://robohash.org/${props.monster}?set=set2`} alt="monster" />
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
        </div>
    );
}

export default monster;