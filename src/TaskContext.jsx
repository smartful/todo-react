import React, {useState, createContext} from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props)  => {
  const initialState = [
    {
      id: 1,
      name: "Manger le petit dej",
      completed: true,
    },
    {
      id: 2,
      name: "Créer un réacteur à fusion nucléaire",
      completed: false,
    },
    {
      id: 3,
      name: "Créer une AIG",
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(initialState);
  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  );
}
