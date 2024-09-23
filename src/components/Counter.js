import React, { Component } from "react";

export class Counter extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        };
    }
    
    Increment = () => {
        this.setState(
            prevState => ({
                count: prevState.count + 1
            }),
            () => {
                console.log('Callback value', this.state.count);
            }
        );
    }
    
    IncrementFive = () => {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }


    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.IncrementFive}>Increment 5</button>
            </div>
        );
    }
}

export default Counter;
