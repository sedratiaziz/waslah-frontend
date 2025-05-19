import React from 'react';
import '../styles/Tasks.css';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    role: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/women/1.jpg',
    done: true,
  },
  {
    id: 2,
    title: 'Task 2',
    role: 'Software Developer',
    img: 'https://randomuser.me/api/portraits/women/2.jpg',
    done: false,
  },
  {
    id: 3,
    title: 'Task 3',
    role: 'Team Leader',
    img: 'https://randomuser.me/api/portraits/women/3.jpg',
    done: true,
  },
  {
    id: 4,
    title: 'Task 4',
    role: 'Project Manager',
    img: 'https://randomuser.me/api/portraits/women/4.jpg',
    done: false,
  },
];

const Tasks = () => {
  return (
    <div className="tasks-container">
      <h1 className="tasks-title">Your Tasks</h1>
      <div className="tasks-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-card${task.done ? ' done' : ''}`}
          >
            <img src={task.img} alt={task.role} className="task-avatar" />
            <div className="task-info">
              <h2 className="task-title">{task.title}</h2>
              <p className="task-role">{task.role}</p>
            </div>
            <div className="task-status">
              {task.done ? (
                <span className="status-complete">✓ Done</span>
              ) : (
                <span className="status-pending">⏳ Pending</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;