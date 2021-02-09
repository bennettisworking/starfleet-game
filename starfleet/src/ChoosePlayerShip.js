import React, { Component } from "react";
import Select from 'react-select';

class ChoosePlayerShip extends Component {

	constructor(props){
    super(props);
    this.state = {
      shipData : props.data
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.data);
    if(prevProps.data !== this.state.shipData && prevProps.data.length!== 0) {
      this.setState({shipData : prevProps.data});
      console.log(this.state.shipData);
    }
  }

render = () => {
  let imgPath = 'img/ship_' + this.props.opponent.id + '.jpg';
  let options = [];
  this.state.shipData.map(a => {
      options.push({value : a.id, label : a.class})
    });
    return (
      <div className="container">
        <h3>Your Opponent</h3>
        <p>For this match, the computer has selected the following ship:</p>
        <div className="stats-display">
          <div className="stats-display__image">
            <img width="100%" src={imgPath}></img>
          </div>
          <div className="stats-display__stats">
            <h4 className="stats-display__ship-class">{this.props.opponent.class} Class</h4>
            <p className="stats-display__stat">Type: {this.props.opponent.type}</p>
            <p className="stats-display__stat">Length: {this.props.opponent.length}m</p>
            <p className="stats-display__stat">Weight: {this.props.opponent.mass} metric tons</p>
            <p className="stats-display__stat">Max. Speed: Warp {this.props.opponent.speed}</p>
            <p className="stats-display__stat">Crew size: {this.props.opponent.crew}</p>
            <p className="stats-display__stat">Phasers: {this.props.opponent.phasers} (Type {this.props.opponent.phaser_type})</p>
            <p className="stats-display__stat">Torpedoes: {this.props.opponent.torpedoes}</p>
          </div>
        </div>
        <p>Now select your ship!</p>
        <div style={{width: '300px', margin: 'auto'}}>
        <Select options={options} />
        </div>
      </div>
      )
      
  }
}

export default ChoosePlayerShip;