import { useState } from 'react';
import Header from './components/header/Header';
import Modal from './components/Modal';
import TaskForm from './components/taskForm/TaskForm';
import TaskList from './components/taskList/TaskList';




function App() {

  const [taskList, setTaskList] = useState([
    {
      id: 1672159740003,
      title: 'Task 1',
      description: 'Task 1 description',
      done: false,
    },
    {
      id: 1672159740005,
      title: 'Task 2',
      description: 'Task 2 description',
      done: false,
    },
    {
      id: 1672159740006,
      title: 'Task 3',
      description: 'Task 3 description',
      done: true,
    },
  ]);



  return (
    <div className="App">
      <Header />
      <TaskForm taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
