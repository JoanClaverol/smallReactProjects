const Task = (
  { task,
    handleTaskClick,
    handleTaskDelete,
    handleTaskEdit }) => {

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => handleTaskClick(task.id)} />
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="buttons">
        <button className="edit"
          onClick={() => handleTaskEdit(task)}>
          Edit</button>
        <button
          className="delete"
          onClick={() => handleTaskDelete(task.id)}>
          Delete</button>
      </div>
    </div>
  );
}

export default Task;