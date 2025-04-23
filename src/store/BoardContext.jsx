import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveProject, addProject } from "../features/board/boardSlice";

export const BoardContext = createContext(null);

export const BoardProvider = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.board);

  const handleMoveProject = (
    projectId,
    sourceColumnId,
    destinationColumnId,
    sourceIndex,
    destinationIndex
  ) => {
    dispatch(
      moveProject({
        projectId,
        sourceColumnId,
        destinationColumnId,
        sourceIndex,
        destinationIndex,
      })
    );
  };

  const handleAddProject = ({ project, columnId }) => {
    console.log("project, columnId", project, columnId);
    dispatch(addProject({ project, columnId: project.columnId }));
  };

  return (
    <BoardContext.Provider
      value={{
        state,
        moveProject: handleMoveProject,
        addProject: handleAddProject,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoard must be used within a BoardProvider");
  }
  return context;
};
