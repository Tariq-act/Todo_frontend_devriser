import styles from '@/styles/TaskModal.module.css';
import { useState } from 'react';

import data from '../../../dummyData.json';

function TaskModal({ addTask, toggleModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    toggleModal();

    setTitle('');
    setDescription('');
    setStatus('');
    console.log(data.length);

    data.push({ id: data.length - 1 + 1, title, description, status });
  };

  return (
    <div className={addTask ? styles.taskModal : styles.closeModal}>
      <div className={styles.modalOverlay}></div>
      <div className={styles.taskModalCard}>
        <h4>Add Task</h4>
        <form>
          <div className={styles.formControl}>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              name='description'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.formControl}>
            <label htmlFor='status'>Status</label>
            <select
              name='status'
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option defaultValue='incomplete'>Incomplete</option>
              <option value='complete'>complete</option>
            </select>
          </div>
          <div className={styles.buttonControl}>
            <button className={styles.addTask} type='submit' onClick={onSubmit}>
              AddTask
            </button>
            <button className={styles.cancel} onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
