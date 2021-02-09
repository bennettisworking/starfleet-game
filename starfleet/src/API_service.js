import React, { Component } from "react";

class API_service extends Component {

	/*constructor(props){
    super(props);
    this.state = {
      categories: [],
      clues : []
    }
  }*/

getShips(){
    return fetch('http://localhost:3000/ships')
      .then(response => response.json())
      .then(data => {
      	//console.log(data);
        return data;
        //this.setState({ categories: data });
        /*data.forEach((category, ind) => {
          fetch('http://jservice.io/api/clues?category=' + category.id)
          .then(response => response.json())
          .then(data => {
            let temp = this.state.clues;
            temp[ind] = data.slice(0, this.clueCount);
            this.setState({clues: temp});
            });
          })*/
      })
  }
}

export default API_service;
