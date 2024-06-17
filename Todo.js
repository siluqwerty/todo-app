import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = index => {
    const newTodos = todos.map((todo, i) => (
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='body'>
      <h1 className='heading'>To Do List</h1>
      <input className='input' 
        type="text" 
        placeholder='write your job here'
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button className='btn' onClick={addTodo}>Add </button>
      <ol className='list'>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
              {todo.text}
            </span>
            <button className='mark' onClick={() => toggleComplete(index)}>MARK</button>
            <button className='delete' onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
