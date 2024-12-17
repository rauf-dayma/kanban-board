import React from 'react';
import TaskCard from './TaskCard.jsx';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/taskSlice.js';

const Column = ({ stage, tasks }) => {
  const dispatch = useDispatch();

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'task',
    drop: (item) => {
      if (item.stage !== stage) {
        dispatch(moveTask({ id: item.id, newStage: stage }));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className={`column ${isOver ? 'column-over' : ''}`}
    >
      <h3 className="column-title">{stage}</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <p className="column-empty">No tasks</p>
      )}
    </div>
  );
};

export default Column;
