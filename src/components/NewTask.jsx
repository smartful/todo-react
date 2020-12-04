import React, { useState, useContext } from 'react';
import { TaskContext } from '../TaskContext';

function NewTask() {
  const [tasks, setTasks] = useContext(TaskContext);
  const [name, setName] = useState('');

  const changeName = (e) => setName(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name,
      completed: false,
    }
    setTasks([...tasks, newTask]);
    setName('');
  };

  return (
    <form onSubmit={addTask}>
      <input type='text' value={name} onChange={changeName} />
    </form>
  );
}

export default NewTask;