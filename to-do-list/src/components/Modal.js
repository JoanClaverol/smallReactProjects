const Modal = ({ task, setIsModalOpen, setTaskList, taskList }) => {


  const handleModalClose = (e) => {
    setIsModalOpen(false);
    e.preventDefault();

    if (e.target[0].value === '' || e.target[1].value === '') {
      return;
    } else {
      const newTask = {
        id: task.id,
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        done: false,
      };

      setTaskList(
        taskList.map(taskToEdit => {
          if (taskToEdit.id === task.id) {
            return newTask;
          }
          return taskToEdit
        })
      )

      e.target.reset();
    }

  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form className="task-form" onSubmit={handleModalClose}>
          <input type="text" placeholder={task.title} name="title" />
          <textarea placeholder={task.description} name="description" />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;