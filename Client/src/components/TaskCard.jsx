
import React from 'react';
import { Clock, Flag } from 'lucide-react';
import styles from '../styles/TaskCard.module.scss';

const TaskCard = ({ task }) => {
  const getBadgeClass = () => {
    switch (task.badgeColor) {
      case 'blue-card':
        return styles.badgeBlue;
      case 'green-card':
        return styles.badgeGreen;
      case 'purple-card':
        return styles.badgePurple;
      case 'orange-card':
        return styles.badgeOrange;
      case 'red-card':
        return styles.badgeRed;
      default:
        return '';
    }
  };
  
  return (
    <div className={`${styles.taskCard} ${getBadgeClass()}`}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.taskName}>{task.name}</div>
          <div className={styles.taskCode}>{task.code}</div>
        </div>
      </div>
      
      <div className={styles.cardFooter}>
        <div className={styles.metaInfo}>
          <div className={styles.dueDate}>
            <Clock size={12} />
            {task.dueDate}
          </div>
          <div className={styles.priority}>
            <Flag size={12} />
            {task.priority}
          </div>
        </div>
        
        <div className={styles.assignees}>
          {task.assignees.map(assignee => (
            <div key={assignee.id} className={styles.avatarWrapper}>
              <img 
                src={assignee.avatar} 
                alt={assignee.name} 
                className={styles.avatar}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
