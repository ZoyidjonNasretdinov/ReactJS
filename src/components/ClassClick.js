import React, { Component } from "react";

class ClassClick extends Component {
  // Define the handleClick method as a class property
  handleClick = () => {
    alert("Click Me!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;