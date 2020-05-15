import React from 'react';


const selectedMonster = (props) => {
    return (
        <div className="col col-sm-3 monster-card">
            <h1>Selected Monster</h1>
            <img src={`https://robohash.org/${props.monster}?set=set2`} alt="monster" />
            <p>Attack: </p>
            <p>Defense: </p>
        </div>
    );
}

export default selectedMonster;