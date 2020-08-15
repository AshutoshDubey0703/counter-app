import React, { Component } from "react";

class Counter extends Component {
  state = {};

  render() {
    const { counter, onDecreament, onIncreament, onDelete } = this.props;
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onDecreament(counter.id)}
        >
          -
        </button>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncreament(counter.id)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
