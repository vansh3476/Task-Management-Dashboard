import React, { useCallback, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { useBoard } from "../store/BoardContext";
import AddProjectModal from "./AddProjectModal";
import "../styles/board.scss";
import "../styles/header.scss";

const Board = () => {
  const { state, moveProject, addProject } = useBoard();
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
    <div className="techyon-board">
      <header className="techyon-header">
        <div className="logo">TECHYON</div>
        <div className="controls"></div>
      </header>

      <div className="board-content">
        <div className="board-header">
          <div className="title">Projects</div>
          <div className="actions">
            <button className="btn-add" onClick={() => setModalOpen(true)}>
              + Project
            </button>
          </div>
        </div>

        <div className="board-filters">
          <div className="filter">
            <div className="filter-item">All Projects</div>
          </div>
        </div>

        <AddProjectModal
          visible={modalOpen}
          onOpenChange={setModalOpen}
          onCreate={addProject}
          onCancel={() => setModalOpen(false)}
        />

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="board-columns">
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const projects = column.projectIds.map(
                (projectId) => state.projects[projectId]
              );

              return (
                <Column key={column.id} column={column} projects={projects} />
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;
