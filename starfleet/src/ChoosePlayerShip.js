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
        <p>{this.props.opponent.class}</p>
        <img width="300" src={imgPath}></img>
        <p>Now select your ship!</p>
        <div style={{width: '300px', margin: 'auto'}}>
        <Select options={options} />
        </div>
      </div>
      )
      
  }
}

export default ChoosePlayerShip;