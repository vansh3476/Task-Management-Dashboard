import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Column.module.scss";

const Column = ({ column, projects: initialProjectes }) => {
  const [projects, setProjects] = useState(initialProjectes.slice(0, 3));
  console.log("projects", initialProjectes, projects);
  return (
    <div className={styles.column}>
      <div className={`${styles.columnHeader}`}>
        <div className={`${styles.labelWrapper} ${styles[column.colorClass]}`}>
          <div className={styles.columnTitle}>
            {column.title}
            <span className={styles.count}>{projects.length}</span>
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
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            <div className={styles.footerLinks}>
              <div
                className={styles.footerLink}
                onClick={() =>
                  initialProjectes.length === projects.length
                    ? setProjects(initialProjectes.slice(0, 3))
                    : setProjects(initialProjectes)
                }
              >
                {initialProjectes.length === projects.length
                  ? "view less"
                  : "view more"}
              </div>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
