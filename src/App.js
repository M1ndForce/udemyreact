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
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 33 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 19 },
        { action: true },
      ],
    });
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
          click={() => this.switchNameHandler("MAMAMAMAMAMAMMAXIXIXIXI")}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          HI All
        </Person>
        <button
          onClick={this.switchNameHandler.bind(this, "Maximiliano")}
          style={style}
        >
          Switch Name
        </button>
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
