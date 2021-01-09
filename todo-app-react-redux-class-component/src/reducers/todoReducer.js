import { FETCH_TODOS, NEW_TODOS, REMOVE_TODO } from '../actions/types';

const initialState = {
  todos: [],
  todoItem: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case NEW_TODOS:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todoItem) => todoItem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
