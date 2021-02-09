import React, { Component } from "react";
import './App.css';

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
    <div className="container home" style={{ display: this.state.showHome ? 'block' : 'none'}}>
	    <h1>Starfleet Showdown</h1>
	    <p>Pit famous ships from the Star Trek universe against each other in close combat</p>
	    <button onClick={this.homeClickHandler}>meow</button>
    </div>
  )
	}

}
export default Home;