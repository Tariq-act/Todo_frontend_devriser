'use client';

import styles from '@/styles/TaskModal.module.css';
import { useEffect, useState } from 'react';

import data from '../../../dummyData.json';

import { useTodoContext } from '@/context/todoContext';

import { useDispatch } from 'react-redux';
import { fetchTodos, updateTodo, updateTodos } from '@/utils/redux/task';

function EditModal({ task, toggleModal, isEdit }) {
  // const { updateTodo } = useTodoContext();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    toggleModal();

    dispatch(
      updateTodos({
        id: task.id,
        data: { title, description, status },
      })
    );

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
    <div className={isEdit ? styles.taskModal : styles.closeModal}>
      <div className={styles.modalOverlay}></div>
      <div className={styles.taskModalCard}>
        <h4>Edit Task</h4>
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
              <option defaultValue={0}>Incomplete</option>
              <option value={1}>complete</option>
            </select>
          </div>
          <div className={styles.buttonControl}>
            <button className={styles.addTask} type='submit' onClick={onSubmit}>
              Edit Task
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

export default EditModal;

// CryptoJS.AES.encrypt(encodedStr, 'secret key 123').toString()
// const encodedStr=encodeURIComponent(str)
