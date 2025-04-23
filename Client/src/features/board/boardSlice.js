import { createSlice } from "@reduxjs/toolkit";

// Initial state
export const initialBoardState = {};

const boardSlice = createSlice({
  name: "board",
  initialState: initialBoardState,
  reducers: {
    setInitialProjectes: (state, action) => {
      const { tasks: initialState } = action.payload;
      const { tasks, columns, columnOrder } = initialState;
      state.tasks = tasks;
      state.columns = columns;
      state.columnOrder = columnOrder;
    },
    moveProject: (state, action) => {
      const {
        taskId,
        sourceColumnId,
        destinationColumnId,
        sourceIndex,
        destinationIndex,
      } = action.payload;

      const sourceProjectIds = Array.from(
        state.columns[sourceColumnId].taskIds
      );
      sourceProjectIds.splice(sourceIndex, 1);

      if (sourceColumnId === destinationColumnId) {
        sourceProjectIds.splice(destinationIndex, 0, taskId);
        state.columns[sourceColumnId].taskIds = sourceProjectIds;
      } else {
        const destinationProjectIds = Array.from(
          state.columns[destinationColumnId].taskIds
        );
        destinationProjectIds.splice(destinationIndex, 0, taskId);

        state.columns[sourceColumnId].taskIds = sourceProjectIds;
        state.columns[destinationColumnId].taskIds = destinationProjectIds;
      }
    },

    addTask: (state, action) => {
      const { Task: task, columnId } = action.payload;
      // Add task to tasks object
      state.tasks[task.id] = task;

      // Add task ID to column
      state.columns[columnId].taskIds.unshift(task.id);
    },
  },
});

export const { moveProject, addTask, setInitialProjectes } = boardSlice.actions;
export default boardSlice.reducer;
