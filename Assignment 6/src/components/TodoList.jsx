
import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;

    const updatedTasks = [...tasks, trimmed].sort();
    setTasks(updatedTasks);
    setInput(""); // Clear input field
  };

  const removeTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks.sort());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => removeTask(index)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
