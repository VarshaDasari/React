import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class AddItem extends Component {
  state = {
    title: '',
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <button
            disabled={!this.state.title}
            onClick={() => {
              this.AddItemButtonHandler(this.state);
            }}
            className="btn btn-secondary"
          >
            Add
          </button>
        </div>
      </div>
    );
  }

  AddItemButtonHandler(data) {
    this.props.addTodo(data);
    this.setState({ title: '' });
  }
}

export default connect(null, { addTodo })(AddItem);
