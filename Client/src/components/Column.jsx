import React, { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Column.module.scss";

const Column = ({ column, tasks }) => {
  return (
    <div className={styles.column}>
      <div className={`${styles.columnHeader}`}>
        <div className={`${styles.labelWrapper} ${styles[column.colorClass]}`}>
          <div className={styles.columnTitle}>
            {column.title}
            <span className={styles.count}>{tasks.length}</span>
          </div>
        </div>
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            className={styles.columnContent}
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver
                ? "#f0f0f0"
                : "transparent",
            }}
          >
            {tasks.map((task, index) => (
              <ProjectCard key={task.id} project={task} index={index} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
