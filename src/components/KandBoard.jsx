import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import Column from './Column.jsx';
import TaskForm from './TaskForm.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice.js';

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTask = (title, description) => {
    dispatch(addTask({ title, description }));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stages = ['To Do', 'In Progress', 'Peer Review', 'Done'];

  return (
    <div className="kanban-board">
      <SearchBar onSearch={setSearchQuery} />
      <div className="kanban-columns">
        {stages.map((stage) => (
          <Column
            key={stage}
            stage={stage}
            tasks={filteredTasks.filter((task) => task.stage === stage)}
          />
        ))}
      </div>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default KanbanBoard;
