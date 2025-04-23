import { createSlice } from "@reduxjs/toolkit";

// Initial state
export const initialBoardState = {
  projects: {
    "project-1": {
      id: "project-1",
      name: "Project Name",
      status: "PENDING",
      startDate: "01/01/2024",
      dueDate: "31/01/2024",
      priority: "P-1",
      assignees: [
        {
          id: "user-1",
          name: "User 1",
        },
        {
          id: "user-2",
          name: "User 2",
        },
      ],
      tasks: { total: 5, completed: 2 },
      colorClass: "blue-card",
    },
    "project-2": {
      id: "project-2",
      name: "Project Name",
      status: "PENDING",
      startDate: "01/02/2024",
      dueDate: "15/02/2024",
      priority: "P-2",
      assignees: [
        {
          id: "user-1",
          name: "User 1",
        },
      ],
      tasks: { total: 8, completed: 3 },
      colorClass: "green-card",
    },
    "project-3": {
      id: "project-3",
      name: "Project Name",
      status: "ACTIVE",
      startDate: "01/02/2024",
      dueDate: "05/03/2024",
      priority: "P-1",
      assignees: [
        {
          id: "user-3",
          name: "User 3",
        },
        {
          id: "user-4",
          name: "User 4",
        },
        {
          id: "user-5",
          name: "User 5",
        },
      ],
      tasks: { total: 10, completed: 5 },
      colorClass: "purple-card",
    },
    "project-4": {
      id: "project-4",
      name: "Project Name",
      status: "PENDING",
      startDate: "01/15/2024",
      dueDate: "20/02/2024",
      priority: "P-3",
      assignees: [
        {
          id: "user-2",
          name: "User 2",
        },
      ],
      tasks: { total: 6, completed: 2 },
      colorClass: "orange-card",
    },
    "project-5": {
      id: "project-5",
      name: "Project Name",
      status: "ACTIVE",
      startDate: "01/20/2024",
      dueDate: "10/04/2024",
      priority: "P-1",
      assignees: [
        {
          id: "user-1",
          name: "User 1",
        },
        {
          id: "user-5",
          name: "User 5",
        },
      ],
      tasks: { total: 12, completed: 8 },
      colorClass: "red-card",
    },
    "project-6": {
      id: "project-6",
      name: "Project Name",
      status: "PENDING",
      startDate: "02/01/2024",
      dueDate: "15/03/2024",
      priority: "P-2",
      assignees: [
        {
          id: "user-3",
          name: "User 3",
        },
      ],
      tasks: { total: 7, completed: 4 },
      colorClass: "blue-card",
    },
    "project-7": {
      id: "project-7",
      name: "Project Name",
      status: "ACTIVE",
      startDate: "02/10/2024",
      dueDate: "01/05/2024",
      priority: "P-2",
      assignees: [
        {
          id: "user-2",
          name: "User 2",
        },
        {
          id: "user-4",
          name: "User 4",
        },
      ],
      tasks: { total: 9, completed: 3 },
      colorClass: "green-card",
    },
    "project-8": {
      id: "project-8",
      name: "Project Name",
      status: "PENDING",
      startDate: "02/15/2024",
      dueDate: "20/04/2024",
      priority: "P-3",
      assignees: [
        {
          id: "user-5",
          name: "User 5",
        },
      ],
      tasks: { total: 5, completed: 1 },
      colorClass: "purple-card",
    },
    "project-9": {
      id: "project-9",
      name: "Project Name",
      status: "ACTIVE",
      startDate: "02/20/2024",
      dueDate: "25/01/2023",
      priority: "P-1",
      assignees: [
        {
          id: "user-1",
          name: "User 1",
        },
      ],
      tasks: { total: 8, completed: 5 },
      colorClass: "orange-card",
    },
    "project-10": {
      id: "project-10",
      name: "Project Name",
      status: "PENDING",
      startDate: "02/25/2024",
      dueDate: "28/02/2023",
      priority: "P-2",
      assignees: [
        {
          id: "user-3",
          name: "User 3",
        },
        {
          id: "user-4",
          name: "User 4",
        },
      ],
      tasks: { total: 11, completed: 7 },
      colorClass: "red-card",
    },
    "project-11": {
      id: "project-11",
      name: "Project Name",
      status: "ACTIVE",
      startDate: "03/01/2024",
      dueDate: "30/03/2023",
      priority: "P-1",
      assignees: [
        {
          id: "user-2",
          name: "User 2",
        },
      ],
      tasks: { total: 6, completed: 2 },
      colorClass: "blue-card",
    },
    "project-12": {
      id: "project-12",
      name: "Project Name",
      status: "PENDING",
      startDate: "03/05/2024",
      dueDate: "15/04/2023",
      priority: "P-3",
      assignees: [
        {
          id: "user-5",
          name: "User 5",
        },
        {
          id: "user-1",
          name: "User 1",
        },
      ],
      tasks: { total: 9, completed: 4 },
      colorClass: "green-card",
    },
    "project-13": {
      id: "project-13",
      name: "Project Name",
      status: "ACTIVE",
      startDate: "03/10/2024",
      dueDate: "05/05/2023",
      priority: "P-2",
      assignees: [
        {
          id: "user-3",
          name: "User 3",
        },
      ],
      tasks: { total: 7, completed: 3 },
      colorClass: "purple-card",
    },
    "project-14": {
      id: "project-14",
      name: "Project Name",
      status: "PENDING",
      startDate: "03/15/2024",
      dueDate: "01/06/2023",
      priority: "P-1",
      assignees: [
        {
          id: "user-4",
          name: "User 4",
        },
        {
          id: "user-2",
          name: "User 2",
        },
      ],
      tasks: { total: 10, completed: 5 },
      colorClass: "orange-card",
    },
    "project-15": {
      id: "project-15",
      name: "Project Name",
      status: "ACTIVE",
      startDate: "03/20/2024",
      dueDate: "20/05/2023",
      priority: "P-3",
      assignees: [
        {
          id: "user-1",
          name: "User 1",
        },
        {
          id: "user-5",
          name: "User 5",
        },
      ],
      tasks: { total: 8, completed: 6 },
      colorClass: "red-card",
    },
    "project-16": {
      id: "project-16",
      name: "Project Name",
      status: "PENDING",
      startDate: "03/25/2024",
      dueDate: "15/06/2023",
      priority: "P-2",
      assignees: [
        {
          id: "user-3",
          name: "User 3",
        },
      ],
      tasks: { total: 6, completed: 2 },
      colorClass: "blue-card",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      colorClass: "backlog",
      projectIds: ["project-1", "project-2", "project-3", "project-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      colorClass: "in-progress",
      projectIds: ["project-5", "project-6", "project-7", "project-8"],
    },
    "column-3": {
      id: "column-3",
      title: "Review",
      colorClass: "review",
      projectIds: ["project-9", "project-10", "project-11", "project-12"],
    },
    "column-4": {
      id: "column-4",
      title: "Completed",
      colorClass: "completed",
      projectIds: ["project-13", "project-14", "project-15", "project-16"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

const boardSlice = createSlice({
  name: "board",
  initialState: initialBoardState,
  reducers: {
    moveProject: (state, action) => {
      const {
        projectId,
        sourceColumnId,
        destinationColumnId,
        sourceIndex,
        destinationIndex,
      } = action.payload;

      const sourceProjectIds = Array.from(
        state.columns[sourceColumnId].projectIds
      );
      sourceProjectIds.splice(sourceIndex, 1);

      if (sourceColumnId === destinationColumnId) {
        sourceProjectIds.splice(destinationIndex, 0, projectId);
        state.columns[sourceColumnId].projectIds = sourceProjectIds;
      } else {
        const destinationProjectIds = Array.from(
          state.columns[destinationColumnId].projectIds
        );
        destinationProjectIds.splice(destinationIndex, 0, projectId);

        state.columns[sourceColumnId].projectIds = sourceProjectIds;
        state.columns[destinationColumnId].projectIds = destinationProjectIds;
      }
    },

    addProject: (state, action) => {
      const { project, columnId } = action.payload;

      // Add project to projects object
      state.projects[project.id] = project;

      // Add project ID to column
      state.columns[columnId].projectIds.push(project.id);
    },
  },
});

export const { moveProject, addProject } = boardSlice.actions;
export default boardSlice.reducer;
