import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  moveProject,
  addTask,
  setInitialProjectes,
} from "../features/board/boardSlice";

export const BoardContext = createContext(null);

export const BoardProvider = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.board);
  const [loading, setLoading] = useState(true);

  const fetchtasks = async () => {
    try {
      setLoading(true);
      const data = await fetch("http://localhost:3000/taskDetails", {
        method: "GET",
      });
      const tasks = await data.json();
      dispatch(setInitialProjectes({ tasks }));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchtasks();
  }, [dispatch]);

  const handleMoveProject = (
    taskId,
    sourceColumnId,
    destinationColumnId,
    sourceIndex,
    destinationIndex
  ) => {
    dispatch(
      moveProject({
        taskId,
        sourceColumnId,
        destinationColumnId,
        sourceIndex,
        destinationIndex,
      })
    );
  };

  const handleAddProject = ({ Task, columnId }) => {
    dispatch(addTask({ Task, columnId: Task.columnId }));
  };

  return (
    <BoardContext.Provider
      value={{
        state,
        moveProject: handleMoveProject,
        addTask: handleAddProject,
        loading: loading,
      }}
    >
      {loading ? <></> : children}
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
