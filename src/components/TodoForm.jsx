import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // use FormData to collect input
    const todoValue = formData.get('todo');

    if (todoValue.trim() === '') {
      alert('Please enter a task');
      return;
    }

    addTodo(todoValue);
    setValue('');
    e.target.reset(); // clears the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  );
}

export default TodoForm;
