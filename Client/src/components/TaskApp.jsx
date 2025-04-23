import React from "react";
import { Provider } from "react-redux";
import { BoardProvider } from "../store/BoardContext";
import Board from "./Board";

const TaskApp = () => {
  return (
    <BoardProvider>
      <Board />
    </BoardProvider>
  );
};

export default TaskApp;
