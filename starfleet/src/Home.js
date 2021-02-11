import React, { Component } from "react";
import styled from 'styled-components';

import {
  Container,
  PageTitle
} from './StyledComponents';
//import './App.css';

const HomeContainer = styled(Container)`
  z-index: 10;
`;

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = { showHome: true };
	}

	homeClickHandler = () =>  {
		console.log('ch');
		this.setState({ showHome: false });
	}

	render = () => {
	 return (
    <HomeContainer visible={this.state.showHome}>
	    <PageTitle>Starfleet Showdown</PageTitle>
	    <p>Pit famous ships from the Star Trek universe against each other in close combat</p>
	    <button onClick={this.homeClickHandler}>meow</button>
    </HomeContainer>
  )
	}

}
export default Home;