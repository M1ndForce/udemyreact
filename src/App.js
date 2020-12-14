import "./App.css";
import React, {  useState } from "react";
import Person from "./Person/Person";

const App = (props) => {
  // setPersonsState() change state but not merge it
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
      { action: false },
    ],
    otherState: "some other value",
  });

  const [otherState, changeOtherState] = useState("Hi all");

  const switchNameHandler = () => {
    if (personState.persons[3].action === false) {
      setPersonsState({
        persons: [
          { name: "ololosha", age: 33 },
          { name: "Manu", age: 29 },
          { name: "Stephanienenka", age: 111111111111111 },
          { action: true },
        ],
      });
    } else if (personState.persons[3].action === true) {
      setPersonsState({
        persons: [
          { name: "Max", age: 28 },
          { name: "Manu", age: 29 },
          { name: "Stephanie", age: 26 },
          { action: false },
        ],
      });
    }
  };

  return (
    <div className="App">
      <h1> Hello world </h1>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        olololololo
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      >
        OLOLOLOLO HI World {otherState}
      </Person>
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );

  // return React.createElement(
  // "div",
  // null,
  // React.createElement("h1", { className: "App" }, "Does this work now!")
  // );
};

export default App;
// class component
//  state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 },
//       { action: false },
//     ],
//     otherState: "some other value",
//   };
//
//   switchNameHandler = () => {
//     if (this.state.persons[3].action === false) {
//       this.setState({
//         persons: [
//           { name: "ololosha", age: 33 },
//           { name: "Manu", age: 29 },
//           { name: "Stephanienenka", age: 111111111111111 },
//           { action: true },
//         ],
//       });
//     } else if (this.state.persons[3].action === true) {
//       this.setState({
//         persons: [
//           { name: "Max", age: 28 },
//           { name: "Manu", age: 29 },
//           { name: "Stephanie", age: 26 },
//           { action: false },
//         ],
//       });
//     }
//   };
