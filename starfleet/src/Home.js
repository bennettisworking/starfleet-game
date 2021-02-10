import React, { Component } from "react";
import {
  Container,
  PageTitle
} from './StyledComponents';
//import './App.css';

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
    <Container visible={this.state.showHome}>
	    <PageTitle>Starfleet Showdown</PageTitle>
	    <p>Pit famous ships from the Star Trek universe against each other in close combat</p>
	    <button onClick={this.homeClickHandler}>meow</button>
    </Container>
  )
	}

}
export default Home;