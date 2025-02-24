import PropTypes from 'prop-types';

function AddTodoForm({ newTodo, setNewTodo, handleAddTodo }) {
  return (
    <form onSubmit={handleAddTodo} style={styles.form}>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Add a new todo'
        style={styles.input}
      />
      <button type='submit' style={styles.button}>
        Add
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    gap: '8px',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    width: '70%',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

AddTodoForm.propTypes = {
  newTodo: PropTypes.string.isRequired,
  setNewTodo: PropTypes.func.isRequired,
  handleAddTodo: PropTypes.func.isRequired,
};

export default AddTodoForm;
