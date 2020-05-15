import React, { Component } from 'react';
import Header from './Components/Header/Header';
import MonsterList from './Components/MonsterList/MonsterList';
import SelectedMonster from './Components/SelectedMonster/SelectedMonster';
import BattleStage from './Containers/BattleStage/BattleStage';
import './App.css';

class App extends Component {
  state = {
    monsters: [1,2,3,4,5,6,7,8],
    selectedMonster: {
      monsterNum: null,
      attack: 0,
      defense: 0
    },
    battleReady: false
  }
  
  callbackFunction = (monsterNum, attack, defense) => {
    this.setState({
      selectedMonster: {
        monsterNum,
        attack,
        defense
      }
    })
  }
  
  
  
  render() {
    
    
    return (
      <div className="App container">
        <Header />
        {this.state.selectedMonster.monsterNum === null ?
            <MonsterList monsters={this.state.monsters} parentCallback={this.callbackFunction}/> : 
          this.state.selectedMonster && this.state.battleReady === false ?
          <div>
            <SelectedMonster 
              monster={this.state.selectedMonster.monsterNum}
              attack={this.state.selectedMonster.attack} 
              defense={this.state.selectedMonster.defense}/>
            <div className="row">
              <div className="col col-sm-6">
                <button 
                  className="btn btn-success selected-monster-btn"
                  onClick={() => {this.setState({battleReady: true})}}>Ready for Battle</button>
                <button 
                  className="btn btn-warning selected-monster-btn"
                  onClick={() => {
                    this.setState({selectedMonster: {monsterNum: null}})
                  }}>Choose a Different Monster</button>
              </div>
            </div>
          </div>: <BattleStage 
                    monsterNumOne={this.state.selectedMonster.monsterNum}
                    attack={this.state.selectedMonster.attack}
                    defense={this.state.selectedMonster.defense}/>}
      </div>
    );    
  }

}

export default App;
