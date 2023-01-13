import { useEffect, useRef } from "react";

const TaskForm = ({ taskList, setTaskList }) => {

  const handleSubmit = (e) => {

    e.preventDefault();
    if (e.target[0].value === '' || e.target[1].value === '') {
      return;
    } else {
      const newTask = {
        id: Date.now(),
        title: e.target[0].value,
        description: e.target[1].value,
        done: false,
      };

      setTaskList([...taskList, newTask]);
      e.target.reset();
    }
  };

  const textareaRef = useRef(null);

  useEffect(() => {
    const resizeTextarea = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "1px";
        textareaRef.current.style.height = Math.min(
          textareaRef.current.scrollHeight, 200) + "px";
      }
    }
    resizeTextarea();

    // call the resize function whenever the textarea value changes
    textareaRef.current.addEventListener("input", resizeTextarea);

    // remove the event listener when the component unmounts
    return () => {
      textareaRef.current.removeEventListener("input", resizeTextarea);
    };
  }, []);

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title" />
      <textarea placeholder="Task description" ref={textareaRef} />
      <button type="submit">Add task</button>
    </form>
  );
}

export default TaskForm;