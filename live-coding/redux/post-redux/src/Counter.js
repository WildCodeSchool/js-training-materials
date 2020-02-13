import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
    //this.props.increment();
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
    //this.props.decrement();
  };

  render() {
    return (
      <div>
        <h2></h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

//const mapDispatchToProps = {
//  increment,
//  decrement
//};

//export default connect(mapStateToProps, mapDispatchToProps)(Counter); //why syntax
export default connect(mapStateToProps)(Counter); //why syntax
