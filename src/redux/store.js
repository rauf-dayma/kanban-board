import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice'; // Import your task slice reducer

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Register the task slice reducer
  },
});

export default store;
