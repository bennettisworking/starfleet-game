import React, { Component } from "react";
import {
  StatsContainer,
  StatsList,
  StatsImage
} from './StyledComponents';

class StatsView extends Component {

	constructor(props){
    super(props);
    this.state = {
      ship : props.ship
    }
    console.log(this.state.ship);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.ship !== this.state.ship && prevProps.ship.length!== 0) {
      this.setState({ship : prevProps.ship});
    }
    console.log(prevProps.ship)
  }

  render(){
    let imgPath = 'img/ship_' + this.state.ship.id + '.jpg';
    return(
       <StatsContainer>
          <StatsImage>
            <img width="100%" src={imgPath}></img>
          </StatsImage>
          <StatsList>
            <h4 className="stats-display__ship-class">{this.state.ship.class} Class</h4>
            <p className="stats-display__stat">Type: {this.state.ship.type}</p>
            <p className="stats-display__stat">Length: {this.state.ship.length}m</p>
            <p className="stats-display__stat">Weight: {this.state.ship.mass} metric tons</p>
            <p className="stats-display__stat">Max. Speed: Warp {this.state.ship.speed}</p>
            <p className="stats-display__stat">Crew size: {this.state.ship.crew}</p>
            <p className="stats-display__stat">Phasers: {this.state.ship.phasers} (Type {this.state.ship.phaser_type})</p>
            <p className="stats-display__stat">Torpedoes: {this.state.ship.torpedoes}</p>
          </StatsList>
        </StatsContainer>
      )
  }
};

export default StatsView;