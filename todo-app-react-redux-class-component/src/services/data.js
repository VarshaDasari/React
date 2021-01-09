const getAllTodos = async () => {
  const res = await fetch('http://localhost:3001/todos');
  return res.json();
};

const saveTodo = async (todoItem) => {
  const res = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    body: JSON.stringify(todoItem),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
};

const deleteToDoItem = async (id) => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'DELETE',
  });
  return res;
};

export { saveTodo, deleteToDoItem };
export default getAllTodos;
