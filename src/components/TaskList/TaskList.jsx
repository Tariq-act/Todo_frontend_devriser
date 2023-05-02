import styles from '@/styles/TaskList.module.css';
import { MdDelete, MdEdit } from 'react-icons/md';
import data from '../../../dummyData.json';
import { useEffect, useState } from 'react';

function TaskList() {
  const [dummyData, setDummyData] = useState(data);
  const deleteTask = async (id) => {
    const updatedData = dummyData.filter((item) => item.id !== id);
    setDummyData(updatedData);
  };
  const editTask = () => {
    console.log('edit');
  };

  return (
    <div className={styles.taskList}>
      <ul>
        {dummyData ? (
          dummyData.map((task, index) => (
            <li key={index}>
              <div className={styles.taskContent}>
                <h3>
                  {task.title.charAt(0).toUpperCase()}
                  {task.title.slice(1)}
                </h3>
                <p>{task.description}</p>
              </div>
              <div className={styles.taskControls}>
                <span onClick={() => deleteTask(task.id)}>
                  <MdDelete size={20} color='#E06469' />
                </span>
                <span onClick={() => editTask(task.id)}>
                  <MdEdit size={20} color='#19A7CE' />
                </span>
              </div>
            </li>
          ))
        ) : (
          <h3>No Todo Found</h3>
        )}
      </ul>
    </div>
  );
}

export default TaskList;
