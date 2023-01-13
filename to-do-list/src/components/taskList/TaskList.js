import { useState } from 'react';
import Modal from '../Modal';
import Task from './Task';

const TaskList = ({ taskList, setTaskList }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleTaskClick = (taskId) => {
    const newTaskList = taskList.map(task => {
      if (task.id === taskId) return { ...task, done: !task.done };
      return task;
    })
    setTaskList(newTaskList);
  };

  const handleTaskDelete = (taskId) => {
    const newTaskList = taskList.filter(task => task.id !== taskId);
    setTaskList(newTaskList);
  };

  const handleTaskEdit = (task) => {
    setIsModalOpen(true);
    setTaskToEdit(taskList.find(t => t.id === task.id));
  };

  return (
    <div className="task-list">
      {isModalOpen && <Modal
        task={taskToEdit}
        setIsModalOpen={setIsModalOpen}
        setTaskList={setTaskList}
        taskList={taskList} />}
      {taskList.map(task => {
        return (
          <Task
            task={task}
            key={task.id}
            handleTaskClick={handleTaskClick}
            handleTaskEdit={handleTaskEdit}
            handleTaskDelete={handleTaskDelete} />
        )
      })}
    </div>
  );
}

export default TaskList;