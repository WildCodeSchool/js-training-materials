import React, { Component } from "react";

class CounterDisplay extends Component {
  render() {
    const { resetCallback, count } = this.props;

    return (
      <div className={this.getCSSText()}>
        <button onClick={resetCallback}>Reset</button>
        {this.getCount()}
      </div>
    );
  }

  getCSSText() {
    const { resetCallback, count } = this.props;

    if (count !== 0) {
      return "big";
    }
    return "small";
  }

  getCount() {
    if (this.props.count != 0) {
      return this.props.count;
    }
    return "";
  }
}

export default CounterDisplay;
