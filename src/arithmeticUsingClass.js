import React, { Component } from 'react';
import './arithmeticUsingClass.css';

class CalculatorClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: '',
    };
  }

  handleAddition = () => {
    this.setState({
      result: parseFloat(this.state.num1) + parseFloat(this.state.num2),
    });
  };

  handleSubtraction = () => {
    this.setState({
      result: parseFloat(this.state.num1) - parseFloat(this.state.num2),
    });
  };

  handleMultiplication = () => {
    this.setState({
      result: parseFloat(this.state.num1) * parseFloat(this.state.num2),
    });
  };

  handleDivision = () => {
    this.setState({
      result: (parseFloat(this.state.num1) / parseFloat(this.state.num2)).toFixed(2),
    });
  };

  render() {
    return (
      <div className="calculator">
        <input
          type="number"
          placeholder="Enter number 1"
          value={this.state.num1}
          onChange={(e) => this.setState({ num1: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter number 2"
          value={this.state.num2}
          onChange={(e) => this.setState({ num2: e.target.value })}
        />
        <br />
        <button onClick={this.handleAddition}>Add</button>
        <button onClick={this.handleSubtraction}>Subtract</button>
        <button onClick={this.handleMultiplication}>Multiply</button>
        <button onClick={this.handleDivision}>Divide</button>

        <br />
        <div className="result">Result: {this.state.result}</div>
      </div>
    );
  }
}

export default CalculatorClassComponent;
