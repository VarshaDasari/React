//  In root reducer we have to combine all the other reducers
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default combineReducers({
  todos: todoReducer,
});
