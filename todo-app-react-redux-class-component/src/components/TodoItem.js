import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div
        className="alert alert-primary d-flex justify-content-between"
        role="alert"
      >
        <span>{this.props.title}</span>
        {/* <button type="button" className="btn btn-outline-light"> */}
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => this.RemoveClick(this.props.id)}
        >
          &#10005;
        </span>
        {/* </button> */}
      </div>
    );
  }

  RemoveClick(id) {
    console.log('In TodoItem Child', id);
    this.props.RemoveItem(id);
  }
}

export default TodoItem;
