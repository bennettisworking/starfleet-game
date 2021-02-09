import React, { Component } from "react";
import './App.css';
import API_service from './API_service.js';
import Home from './Home.js';
import ChoosePlayerShip from './ChoosePlayerShip.js';

class App extends Component {

    constructor(props){
      super(props);
      this.state = { 
        shipData : [],
        computerShip : {}
      };
      this.player = 0;
      this.playerShip = {};
      this.API_service = new API_service();
    }

    componentDidMount = () => {
      console.log('mount');
      let sd = this.API_service.getShips().then(
        data => {
          this.setState({shipData: data})
          this.init();
        }
      );
    }

    selectCompShip = () => {
      let sc = this.state.shipData.length;
      this.setState({computerShip : this.state.shipData[Math.floor(Math.random()*sc)]});
      console.log(this.state.computerShip.class);//co
    }

    init = () => {
      // select computer player
      this.selectCompShip();
    }

    render = () => {
    return (
      <div className="App">
        <Home/>
        <ChoosePlayerShip opponent={this.state.computerShip} data={this.state.shipData}/>
      </div>
    );
  }
}

export default App;
