import { TaskProvider } from './TaskContext';
import TodoList from './components/TodoList';
import NewTask from './components/NewTask';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Todos</h1>
        <NewTask />
        <TodoList />
      </div>
    </TaskProvider>
  );
}

export default App;
