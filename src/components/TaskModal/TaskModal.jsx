'use client';

import styles from '@/styles/TaskModal.module.css';
import { useState } from 'react';

import data from '../../../dummyData.json';
import { useTodoContext } from '@/context/todoContext';
import { useDispatch } from 'react-redux';
import { createTodos, fetchTodos } from '@/utils/redux/task';

function TaskModal({ addTask, toggleModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(0);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    toggleModal();

    // addTodo({ title, description, status });
    dispatch(createTodos({ title, description, status }));
    dispatch(fetchTodos());

    setTitle('');
    setDescription('');
    setStatus('');
  };
  const closeModal = (e) => {
    e.preventDefault();
    toggleModal();
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
              required
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
              required
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
              required
            >
              <option defaultValue={0}>Incomplete</option>
              <option value={1}>complete</option>
            </select>
          </div>
          <div className={styles.buttonControl}>
            <button className={styles.addTask} type='submit' onClick={onSubmit}>
              AddTask
            </button>
            <button className={styles.cancel} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
