import React, { useContext } from 'react';
import { TaskContext } from '../TaskContext';
import Task from './Task';

function TodoList() {
  const [tasks, setTasks] = useContext(TaskContext);
  return (
    tasks.map((task) => <Task key={task.id} id={task.id} name={task.name} completed={task.completed}/>)
  );
}

export default TodoList;