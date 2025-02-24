import { useState } from 'react';
import AddTodoForm from './components/AddToDoForm/AddToDoForm';
import TodoList from './components/ToDoList/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const handleEditTodo = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSaveTodo = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editText } : todo))
    );
    setEditId(null);
    setEditText('');
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main style={styles.container}>
      <h1>React To-Do List</h1>
      <AddTodoForm
        handleAddTodo={handleAddTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />

      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleSaveTodo={handleSaveTodo}
        handleToggleCompleted={handleToggleCompleted}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
      />
    </main>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '50px auto',
    maxWidth: '400px',
    textAlign: 'center',
  },
};

export default App;
