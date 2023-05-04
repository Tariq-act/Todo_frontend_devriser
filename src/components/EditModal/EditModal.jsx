'use client';

import styles from '@/styles/TaskModal.module.css';
import { useState } from 'react';

import data from '../../../dummyData.json';

import { useTodoContext } from '@/context/todoContext';

function EditModal({ task, toggleModal, isEdit }) {
  const { updateTodo } = useTodoContext();
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  // const getalltodo = () => {
  //   const token = localStorage.getItem('token') || '';
  //   fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/todo/getalltodo?limit=10&page=1`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Authorization: token,
  //         'Content-Type': 'Application/json',
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    toggleModal();

    // data.push({ id: data.length + 1, title, description, status });

    // const updateTodo = () => {
    //   const token = localStorage.getItem('token') || '';
    //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todo/update/${task.id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       Authorization: token,
    //       'Content-Type': 'Application/json',
    //     },
    //     body: JSON.stringify({ title, description, status }),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       console.log(res);
    //       getalltodo();
    //     })
    //     .catch((err) => console.log(err));
    // };

    // data.map((item) => {
    //   if (item.id === task.id) {
    //     item.title = title;
    //     item.description = description;
    //     item.status = status;
    //   }
    // });

    updateTodo(task.id, { title, description, status });

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
