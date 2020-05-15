import React from 'react';
import Monster from './Monster/Monster';
import './MonsterList.css'

const monsterList = (props) => {
    let monsters = props.monsters.map(monster => {
        return <Monster 
                    monster={monster} 
                    key={monster}
                    parentCallback={props.parentCallback}/>
    })
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col col-sm-8">
                    <h1 id="choose-monster-title">Choose Your Monster</h1>
                </div>
            </div>
            <div className="row">
                {monsters}
            </div>
        </div>
    );
}

export default monsterList;