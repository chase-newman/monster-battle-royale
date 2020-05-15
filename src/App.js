import React, { Component } from 'react';
import Header from './Components/Header/Header';
import MonsterList from './Components/MonsterList/MonsterList';
import SelectedMonster from './Components/SelectedMonster/SelectedMonster';
import './App.css';

class App extends Component {
  state = {
    monsters: [1,2,3,4],
    selectedMonster: {
      monsterNum: null,
    }
  }
  
  callbackFunction = (monsterNum) => {
    this.setState({
      selectedMonster: {
        monsterNum
      }
    })
  }
  
  
  
  render() {
    return (
      <div className="App container">
        <Header />
        {this.state.selectedMonster.monsterNum === null ?
          <MonsterList 
            monsters={this.state.monsters}
            parentCallback={this.callbackFunction}/> :
          <SelectedMonster monster={this.state.selectedMonster.monsterNum}/>}
      </div>
    );    
  }

}

export default App;
