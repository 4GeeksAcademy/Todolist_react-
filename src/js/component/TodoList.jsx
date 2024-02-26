import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
    <h1>Lista de Tareas</h1>
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Añadir tarea..."
      />
      <button onClick={handleAddTask}>Añadir</button>
    </div>
    <div className='tarea'>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(index)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default TodoApp;
