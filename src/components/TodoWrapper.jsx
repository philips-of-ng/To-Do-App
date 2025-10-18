import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

// simulate API delay using Promise
const fakeApiCall = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, data });
    }, 1000);
  });
};

function TodoWrapper() {
  const [todos, setTodos] = useState(() => {
    // Load from localStorage using JSON
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage anytime todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // async/await used here
  const addTodo = async (todoText) => {
    const newTodo = { id: uuidv4(), task: todoText, completed: false, isEditing: false };

    // simulate network delay
    const response = await fakeApiCall(newTodo);

    if (response.status === 200) {
      setTodos([...todos, response.data]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = async (id) => {
    // simulate async delete
    await fakeApiCall();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <h1 style={{ color: 'white', textAlign: 'center' }}>Get Shii Done!</h1>

      <TodoForm addTodo={addTodo} />

      {todos.map((todo, index) => (
        <Todo
          key={index}
          task={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoWrapper;
