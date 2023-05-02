import Header from '../Header/Header';
import styles from '@/styles/Task.module.css';
import TaskList from '../TaskList/TaskList';
import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { Button } from '@mui/material';

function Task() {
  const [addTask, setAddTask] = useState(false);

  // const closeModal = (e) => {
  //   e.preventDefault();

  //   setAddTask(false);
  // };

  const toggleModal = (e) => {
    e.preventDefault();
    setAddTask(!addTask);
  };

  return (
    <div className={styles.task}>
      <Header />
      <div className={styles.taskButton}>
        <button onClick={toggleModal}>Add Task</button>
        <select>
          <option value='ALL' defaultValue={'ALL'}>
            ALL
          </option>
          <option value='completed'>Completed</option>
          <option value='pending'>Pending</option>
        </select>
      </div>

      <TaskList />
      <TaskModal addTask={addTask} toggleModal={toggleModal} />
    </div>
  );
}

export default Task;
