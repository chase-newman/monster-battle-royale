import React from 'react';
import Monster from './Monster/Monster';

const monsterList = (props) => {
    
    console.log(props);
    
    let monsters = props.monsters.map(monster => {
        return <Monster 
                    monster={monster} 
                    key={monster}
                    parentCallback={props.parentCallback}/>
    })
    return (
        <div className="row">
            {monsters}
        </div>
    );
}

export default monsterList;