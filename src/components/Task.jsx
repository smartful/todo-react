import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../TaskContext';

function Task({ id, name, completed }) {
  const [tasks, setTasks] = useContext(TaskContext);

  const taskStyle = {
    width: '20rem',
    heigth: '10rem',
    color: 'white',
    backgroundColor: completed ? 'green' : 'red',
    textDecoration: completed ? 'line-through' : 'none',
    border: '2px solid black',
    borderRadius: '4px',
    padding: '5px',
    margin: '10px',
  }

  const toogleCompleteStatus = () => {
    const currentTask = tasks.filter((task) => task.id === id)[0];
    currentTask.completed = !currentTask.completed;
    const updatedTasks = tasks.map(task => (task.id === id ? currentTask : task));
    setTasks(updatedTasks);
  }

  return (
    <div style={taskStyle} onDoubleClick={toogleCompleteStatus}>
      {name}
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  completed: PropTypes.bool,
}

export default Task;