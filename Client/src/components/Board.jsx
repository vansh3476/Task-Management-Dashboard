import React, { useCallback, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { useBoard } from "../store/BoardContext";
import AddTaskModal from "./AddTaskModal";
import "../styles/board.scss";
import "../styles/header.scss";

const Board = () => {
  const { state, moveProject, addTask } = useBoard();
  const [modalOpen, setModalOpen] = useState(false);

  const onDragEnd = useCallback(
    (result) => {
      const { destination, source, draggableId } = result;

      if (!destination) return;

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      moveProject(
        draggableId,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
    },
    [moveProject]
  );

  return (
    <div className="task-board">
      <header className="task-header">
        <div className="logo">Task management software</div>
        <div className="controls"></div>
      </header>

      <div className="board-content">
        <div className="board-header">
          <div className="title">All Tasks</div>
          <div className="actions">
            <button className="btn-add" onClick={() => setModalOpen(true)}>
              Add Task
            </button>
          </div>
        </div>

        <AddTaskModal
          visible={modalOpen}
          onOpenChange={setModalOpen}
          onCreate={addTask}
          onCancel={() => setModalOpen(false)}
        />

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="board-columns">
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;
