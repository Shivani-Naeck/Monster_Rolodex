// object destricturing
//import React, { Component } from "react";
//or
import React from "react";
//import the component created on the app
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/Search-Box/Search-box-component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      //array of objects
      monsters: [],
      searchField: "",
    };
  }

  //method when react puts component on page
  componentDidMount() {
    //fetch the api
    fetch("https://jsonplaceholder.typicode.com/users")
      //converts the promise in json format
      .then((response) => response.json())
      //set the state to the new json data
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex </h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
export default App;
