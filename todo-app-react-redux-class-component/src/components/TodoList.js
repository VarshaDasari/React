import React, { Component } from 'react';
import AddItem from './AddItem';
import TodoItem from './TodoItem';
import getAllTodos, { saveTodo, deleteToDoItem } from '../services/data';
import { connect } from 'react-redux';
import { fetchTodos, removeTodo } from '../actions/todoActions';

class TodoList extends Component {
  // state = {
  //   todos: [],
  // }; // null

  render() {
    return (
      <div className="jumbotron">
        <h2>TodoList</h2>
        <AddItem
          AddItemEventHandler={(data) => {
            this.AddItemEvent(data);
          }}
        />
        {this.props.todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            RemoveItem={(id) => this.RemoveToDoItem(id)}
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  async RemoveToDoItem(id) {
    console.log('In TodoList Parent', id);
    this.props.removeTodo(id);
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { fetchTodos, removeTodo })(TodoList);
