import React, { Component } from "react";

export default class App extends Component {
  state = {
    toggle: false
  };

  handleToggle = () =>
    this.setState(prevState => ({ toggle: !prevState.toggle }));

  render() {
    return (
      <div>
        <p>The Status is {this.state.toggle ? "ON" : "OFF"} </p>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}
