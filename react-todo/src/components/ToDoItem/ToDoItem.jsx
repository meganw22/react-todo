import PropTypes from 'prop-types';

function TodoItem({
  todo,
  isEditing,
  editText,
  onEdit,
  onSave,
  onDelete,
  onEditTextChange,
  onToggleCompleted,
}) {
  return (
    <li style={styles.todoItem}>
      {isEditing ? (
        <>
          <input
            type='text'
            value={editText}
            onChange={onEditTextChange}
            style={styles.editInput}
          />
          <button onClick={onSave} style={styles.saveButton}>
            Save
          </button>
        </>
      ) : (
        <>
          <span style={todo.completed ? styles.completedText : styles.todoText}>
            {todo.text}
          </span>
          <div style={styles.buttonGroup}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={onToggleCompleted}
              style={styles.checkbox}
            />
            <button onClick={onEdit} style={styles.editButton}>
              Edit
            </button>
            <button onClick={onDelete} style={styles.deleteButton}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  editText: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEditTextChange: PropTypes.func.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

const styles = {
  todoItem: {
    alignItems: 'center',
    background: '#f9f9f9',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
  },
  todoText: {
    textDecoration: 'none',
  },
  completedText: {
    textDecoration: 'line-through',
  },
  editInput: {
    fontSize: '16px',
    marginRight: '5px',
    padding: '5px',
    width: '60%',
  },
  saveButton: {
    background: '#c8e6c9',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '5px 10px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
  },
  editButton: {
    background: '#ffecb3',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '5px 10px',
  },
  deleteButton: {
    background: '#ffcdd2',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '5px 10px',
  },
};

export default TodoItem;
