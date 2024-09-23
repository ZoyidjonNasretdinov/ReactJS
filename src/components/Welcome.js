import React, { Component } from "react";

class Welcome  extends Component {
    render(props) {
        return (
        <h1>Class {this.props.name} a.k.a {this.props.herroName}</h1>
    )
    }
}

export default Welcome