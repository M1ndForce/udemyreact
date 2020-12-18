import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
      { action: false },
    ],
    otherState: "some other value",
    showPersons: true,
  };

  toggleList = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  switchNameHandler = (newName) => {
    if (this.state.persons[3].action === false) {
      this.setState({
        persons: [
          { name: newName, age: 33 },
          { name: "Manu", age: 29 },
          { name: "Stephanienenka", age: 111111111111111 },
          { action: true },
        ],
      });
    } else if (this.state.persons[3].action === true) {
      this.setState({
        persons: [
          { name: "Max", age: 28 },
          { name: "Manu", age: 29 },
          { name: "Stephanie", age: 26 },
          { action: false },
        ],
      });
    }
  };

  render() {
    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return (
              <Person
                click={this.deletePerson}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello world </h1>
        {persons}
        <button
          onClick={this.switchNameHandler.bind(this, "Maximiliano")}
          style={style}
        >
          Switch Name
        </button>
        <button onClick={this.toggleList}>Show/hide list</button>
      </div>
    );

    // return React.createElement(
    // "div",
    // null,
    // React.createElement("h1", { className: "App" }, "Does this work now!")
    // );
  }
}

export default App;
