import React, { Component } from "react";
import Select from 'react-select';
import {
  Container,
  PageTitle
} from './StyledComponents';
import StatsView from './StatsView.js';

class ChoosePlayerShip extends Component {

	constructor(props){
    super(props);
    this.state = {
      shipData : props.data,
      opponent: props.opponent
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
  let options = [];
  this.state.shipData.map(a => {
      options.push({value : a.id, label : a.class})
    });
    return (
      <Container visible>
        <h3>Your Opponent</h3>
        <p>For this match, the computer has selected the following ship:</p>
        <StatsView ship={this.props.opponent}/>
        <p>Now select your ship!</p>
        <div style={{width: '300px', margin: 'auto'}}>
        <Select options={options} />
        </div>
      </Container>
      )
      
  }
}

export default ChoosePlayerShip;