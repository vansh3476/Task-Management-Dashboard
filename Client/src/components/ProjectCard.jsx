import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CalendarDays } from "lucide-react";
import styles from "../styles/ProjectCard.module.scss";
import { Folder } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <Draggable draggableId={project.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`${styles.projectCard} ${styles[project.colorClass]}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            opacity: snapshot.isDragging ? 0.8 : 1,
          }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.projectName}>
              <Folder />
              <span>{project.name} </span>
            </div>
            <div className={styles.projectPriority}>{project.priority}</div>
          </div>

          <div className={styles.cardMeta}>
            <div className={styles.dueDate}>
              <CalendarDays size={14} className={styles.dateIcon} />
              <span>
                {project.startDate} - {project.dueDate}
              </span>
            </div>
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.assignees}>
              {(project.assignees || []).slice(0, 3).map((assignee, idx) => (
                <div key={idx} className={styles.avatar}>
                  <img src={"../../public/person.png"} alt={assignee.name} />
                </div>
              ))}
              {(project.assignees || []).length > 3 && (
                <div className={styles.avatarCount}>
                  +{(project.assignees || []).length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ProjectCard;
