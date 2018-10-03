import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
    this.increseCount = this.increseCount.bind(this);
  }

  increseCount() {
    this.setState({
      result: this.state.result + 1
    });
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>result:{this.state.result}</p>
        <button onClick={this.increseCount.bind(this)}>click me</button>
        {Element}
        <SecondTitle />
      </div>
    );
  }
}

//const Element = <h2>welcome to stateless comonents</h2>;

const SecondTitle = () => <h1>welcome to second title</h1>;

export default Title;
