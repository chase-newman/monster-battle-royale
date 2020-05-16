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
        let block = Math.floor(Math.random() * 10);
        if(block === 0) {
            block = Math.floor(Math.random() * 10)
        }
        
        super(props);
        this.state = {
            selectedMonster: {
                monsterNum: this.props.monsterNumOne,
                health: 100,
                attack: this.props.attack,
                defense: this.props.defense,
                block: this.props.block
            },
            opponentMonster: {
                monsterNum: Math.floor(Math.random() * 10),
                health: 100,
                attack: attack,
                defense: defense,
                block: block
            },
            userTurn: true,
            opponentTurn: false,
            attackConfirmed: false,
            monsterStyle: null,
            opponentStyle: null,
            action: null
        }
    }
 
    
    attack = () => {
        
        let blockChance = Math.floor(Math.random() * 10);
        if(blockChance === 0) {
            Math.floor(Math.random() * 10);
        }
        
        console.log(`BlockChance: ${blockChance}`);
        console.log(`UserBlock: ${this.state.selectedMonster.block}`)
        
        if(blockChance < this.state.selectedMonster.block) {
            this.setState({
                ...this.state,
                action: "attack was blocked"
            }, () => {
                        setTimeout(() => {
            this.setState(prevState => {
                return ({
                    ...this.state,
                    selectedMonster: {
                        monsterNum: this.props.monsterNumOne,
                        health: prevState.selectedMonster.health - this.state.opponentMonster.attack,
                        attack: this.props.attack,
                        defense: this.props.defense,
                        block: this.props.block
                    },
                    userTurn: true,
                    opponentTurn: false,
                    opponentStyle: null,
                    monsterStyle: {
                        border: "2px solid red",
                        padding: "10px"
                    },
                    action: "Opponent Attacks, User's Turn"
                    })
                });  
            }, 2000)
            });
        }
        
        else {
            this.setState(prevState => {
                return ({
                    ...this.state,
                    opponentMonster: {
                        ...this.state.opponentMonster,
                        health: prevState.opponentMonster.health - this.state.selectedMonster.attack
                    },
                    userTurn: false,
                    opponentTurn: true,
                    attackConfirmed: true,
                    monsterStyle: null,
                    opponentStyle: {
                    border: "2px solid red",
                    padding: "10px"
                    },
                    action: "User Attacks"
                });
            }, () => {
            setTimeout(() => {
            this.setState(prevState => {
                return ({
                    ...this.state,
                    selectedMonster: {
                        monsterNum: this.props.monsterNumOne,
                        health: prevState.selectedMonster.health - this.state.opponentMonster.attack,
                        attack: this.props.attack,
                        defense: this.props.defense,
                        block: this.props.block
                    },
                    userTurn: true,
                    opponentTurn: false,
                    opponentStyle: null,
                    monsterStyle: {
                        border: "2px solid red",
                        padding: "10px"
                    },
                    action: "Opponent Attacks, User's Turn"
                    })
                });  
            }, 2000)
            });            
        }
    }
    
    
    
    render() {
        
        return(
            <div>
                <div className="row justify-content-center">
                    <div className="col col-sm-5">
                        <h1 id="battle-logo">Battle!</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-sm-5">
                        <h1 id="battle-logo">Action Ticker: {this.state.action}</h1>
                    </div>
                </div>
                {this.state.selectedMonster.health > 0 && this.state.opponentMonster.health > 0 ?
                <div className="row justify-content-center">
                    <div className="col col-sm-5" style={this.state.monsterStyle}>
                        <h1 id="monster-health">Health: {this.state.selectedMonster.health}</h1>
                        <img src={`https://robohash.org/${this.state.selectedMonster.monsterNum}?set=set2`} alt="monster" className="battle-img"/>
                        <p>Attack: {this.props.attack}</p>
                        <p>Defense: {this.props.defense}</p>
                        <p>Block: {this.props.block}</p>
                        <button onClick={this.attack} className="btn btn-success">Attack</button>
                    </div>
                    <div className="col col-sm-6 opponent-col" style={this.state.opponentStyle}>
                        <h1 id="opponent-health">Health: {this.state.opponentMonster.health}</h1>
                        <img src={`https://robohash.org/${this.state.opponentMonster.monsterNum}?set=set2`} alt="monster" className="battle-img"/>
                        <p>Attack: {this.state.opponentMonster.attack}</p>
                        <p>Defense: {this.state.opponentMonster.defense}</p>
                        <p>Block: {this.state.opponentMonster.block}</p>
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