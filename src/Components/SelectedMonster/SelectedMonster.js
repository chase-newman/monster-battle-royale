import React from 'react';
import './SelectedMonster.css'

const selectedMonster = (props) => {
    return (
        <div className="col col-sm-6">
            <h1>Selected Monster</h1>
            <img src={`https://robohash.org/${props.monster}?set=set2`} alt="monster" />
            <p>Attack: {props.attack}</p>
            <p>Defense: {props.defense}</p>
            <p>Block: {props.block}</p>
        </div>
    );
}

export default selectedMonster;