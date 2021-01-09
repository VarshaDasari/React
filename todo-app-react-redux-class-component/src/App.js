import './App.css';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Provider store={store}>
            <TodoList />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
