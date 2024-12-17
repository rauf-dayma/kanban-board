import React from 'react';
import { useDrag } from 'react-dnd';

const TaskCard = ({ task }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'task',
    item: { id: task.id, stage: task.stage },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={`task-card ${isDragging ? 'task-card-dragging' : ''}`}
    >
      <h3 className="task-title">{task.title}</h3>
      <p className="task-description">{task.description}</p>
    </div>
  );
};

export default TaskCard;
