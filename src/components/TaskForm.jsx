import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title.trim()) {
      alert('Task title is required!');
      return;
    }
    onAddTask(title, description);
    setTitle('');
    setDescription('');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="add-task-button"
      >
        +
      </button>
      {isOpen && (
        <div className="task-form">
          <h4>Create New Task</h4>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="task-title-input"
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-description-input"
          />
          <button
            onClick={handleSubmit}
            className="submit-task-button"
          >
            Add Task
          </button>
        </div>
      )}
    </>
  );
};

export default TaskForm;
