import React, {Component} from 'react';
import './BattleStage.css';

class BattleStage extends Component {
    constructor(props) {
        
        let attack = Math.floor(Math.random() * 10);
        if(attack === 0) {
            attack = Math.floor(Math.random() * 10);
        }
        let defense = Math.floor(Math.random() * 10);
        if(defense === 0) {
            defense = Math.floor(Math.random() * 10); 
        }
        
        super(props);
        this.state = {
            selectedMonster: {
                monsterNum: this.props.monsterNumOne,
                health: 100,
                attack: this.props.attack,
                defense: this.props.defense
            },
            opponentMonster: {
                monsterNum: Math.floor(Math.random() * 10),
                health: 100,
                attack: attack,
                defense: defense
            } 
        }
    }
    
    attack = () => {
        this.setState(prevState => {
            return ({
                opponentMonster: {
                    ...this.state.opponentMonster,
                    health: prevState.opponentMonster.health - this.state.selectedMonster.attack
                }     
            });
        });
    }
    
    render() {
        return(
            <div>
                <div className="row justify-content-center">
                    <div className="col col-sm-5">
                        <h1 id="battle-logo">Battle!</h1>
                    </div>
                </div>
                {this.state.selectedMonster.health > 0 && this.state.opponentMonster.health > 0 ?
                <div className="row justify-content-center">
                    <div className="col col-sm-5">
                        <h1 id="monster-health">Health: {this.state.selectedMonster.health}</h1>
                        <img src={`https://robohash.org/${this.state.selectedMonster.monsterNum}?set=set2`} alt="monster" className="battle-img"/>
                        <p>Attack: {this.props.attack}</p>
                        <p>Defense: {this.props.defense}</p>
                        <button onClick={this.attack} className="btn btn-success">Attack</button>
                    </div>
                    <div className="col col-sm-6 opponent-col">
                        <h1 id="opponent-health">Health: {this.state.opponentMonster.health}</h1>
                        <img src={`https://robohash.org/${this.state.opponentMonster.monsterNum}?set=set2`} alt="monster" className="battle-img"/>
                        <p>Attack: {this.state.opponentMonster.attack}</p>
                        <p>Defense: {this.state.opponentMonster.defense}</p>
                    </div>
                </div> : 
                <div>
                    Battle is Over
                </div>
                }
            </div>
        );
    }
}

export default BattleStage;