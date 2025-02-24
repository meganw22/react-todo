import TodoItem from '../ToDoItem/ToDoItem';
import PropTypes from 'prop-types';

function TodoList({
  todos,
  handleDeleteTodo,
  handleEditTodo,
  handleSaveTodo,
  handleToggleCompleted,
  editId,
  editText,
  setEditText,
}) {
  return (
    <ul style={styles.list}>
      {todos.map((todo) => {
        const isEditing = editId === todo.id;
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={isEditing}
            editText={editText}
            onEdit={() => handleEditTodo(todo.id, todo.text)}
            onSave={() => handleSaveTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
            onEditTextChange={(e) => setEditText(e.target.value)}
            onToggleCompleted={() => handleToggleCompleted(todo.id)}
          />
        );
      })}
    </ul>
  );
}

const styles = {
  list: {
    listStyleType: 'none',
    padding: 0,
  },
};

TodoList.propTypes = {
  editId: PropTypes.number,
  editText: PropTypes.string,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired,
  handleSaveTodo: PropTypes.func.isRequired,
  handleToggleCompleted: PropTypes.func.isRequired,
  setEditText: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodoList;
