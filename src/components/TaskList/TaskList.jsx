import styles from '@/styles/TaskList.module.css';
import { MdDelete, MdEdit } from 'react-icons/md';

function TaskList({ taskList }) {
  const deleteTask = () => {
    console.log('delete');
  };
  const editTask = () => {
    console.log('edit');
  };
  return (
    <div className={styles.taskList}>
      {/* {!taskList && <h3>No Todo Found</h3>} */}
      <ul>
        <li>
          <div className={styles.taskContent}>
            <h3>Title1</h3>
            <p>Description</p>
          </div>
          <div className={styles.taskControls}>
            <span onClick={deleteTask}>
              <MdDelete size={20} color='#E06469' />
            </span>
            <span onClick={editTask}>
              <MdEdit size={20} color='#19A7CE' />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TaskList;
