import styles from '@/styles/TaskModal.module.css';

function TaskModal({ addTask, toggleModal }) {
  return (
    <div className={addTask ? styles.taskModal : styles.closeModal}>
      <div className={styles.modalOverlay}></div>
      <div className={styles.taskModalCard}>
        <h4>Add Task</h4>
        <form>
          <div className={styles.formControl}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' />
          </div>
          <div className={styles.formControl}>
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              name='description'
              id='description'
            ></textarea>
          </div>
          <div className={styles.formControl}>
            <label htmlFor='description'>Status</label>
            <select name='status' id='status'>
              <option defaultValue='incomplete'>Incomplete</option>
              <option value='complete'>complete</option>
            </select>
          </div>
          <div className={styles.buttonControl}>
            <button className={styles.addTask} type='submit'>
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
