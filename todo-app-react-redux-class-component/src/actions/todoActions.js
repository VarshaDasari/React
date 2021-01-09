import { FETCH_TODOS, NEW_TODOS, REMOVE_TODO } from './types';
import getAllTodos from '../services/data';

export function fetchTodos() {
  console.log('Inside action Creator');
  return function (dispatch) {
    fetch('http://localhost:3001/todos')
      .then((res) => res.json())

      .then((todos) =>
        dispatch({
          type: FETCH_TODOS,
          payload: todos,
        })
      );
  };
}

export function addTodo(todoItem) {
  console.log('Inside action Creator');
  return function (dispatch) {
    fetch('http://localhost:3001/todos', {
      body: JSON.stringify(todoItem),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())

      .then((todos) =>
        dispatch({
          type: NEW_TODOS,
          payload: todos,
        })
      );
  };
}

export function removeTodo(id) {
  console.log('Inside action Creator');
  return function (dispatch) {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())

      .then((todos) =>
        dispatch({
          type: REMOVE_TODO,
          payload: id,
        })
      );
  };
}
