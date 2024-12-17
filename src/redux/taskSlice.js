import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { title, description } = action.payload;
      state.push({
        id: Date.now(), // Unique ID for each task
        title,
        description,
        stage: 'To Do', // Default stage
      });
    },
    moveTask: (state, action) => {
      const { id, newStage } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.stage = newStage;
      }
    },
  },
});

export const { addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
