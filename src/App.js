import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1> Hello world </h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          olololololo
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          <h1>OLOLOLOLO HI World</h1>
        </Person>
        <button>Switch Name</button>
      </div>
    );
  }
  // return React.createElement(
  // "div",
  // null,
  // React.createElement("h1", { className: "App" }, "Does this work now!")
  // );
}

export default App;
