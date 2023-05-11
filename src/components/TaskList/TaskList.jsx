'use client';

import { MdDelete, MdEdit } from 'react-icons/md';
import data from '../../../dummyData.json';
import { useEffect, useState } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import TaskModal from '../TaskModal/TaskModal';
import EditModal from '../EditModal/EditModal';

import { useTodoContext } from '@/context/todoContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '@/utils/store/task';

function TaskList() {
  const dispatch = useDispatch();
  // const { todos, deleteTask } = useTodoContext();

  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({});

  const { todos } = useSelector((state) => state.todos);

  console.log(todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const editTask = (task) => {
    setIsEdit(true);
    setEditData(task);
    console.log(task);
  };

  const toggleModal = () => {
    setIsEdit(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ecedf6',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '1rem',
      }}
    >
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {todos && todos.length > 0 ? (
          todos.map((task, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                borderRadius: '3px',
                fontFamily: 'inherit',
                textDecorationLine: task.status === 1 ? 'line-through' : 'none',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    fontFamily: 'inherit',
                    color: '#667780',
                    fontWeight: 'bold',
                  }}
                >
                  {task.title.charAt(0).toUpperCase()}
                  {task.title.slice(1)}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem' }}>
                  {task.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.8rem',
                }}
              >
                <Typography
                  variant='span'
                  sx={{ cursor: 'pointer' }}
                  onClick={() => deleteTask(task.id)}
                >
                  <MdDelete size={20} color='#E06469' />
                </Typography>
                <Typography
                  variant='span'
                  sx={{ cursor: 'pointer' }}
                  onClick={() => editTask(task)}
                >
                  <MdEdit size={20} color='#19A7CE' />
                </Typography>
              </Box>
            </ListItem>
          ))
        ) : (
          <Typography>No Todo Found</Typography>
        )}
      </List>
      {isEdit && (
        <EditModal task={editData} isEdit={isEdit} toggleModal={toggleModal} />
      )}
    </Box>
  );
}

export default TaskList;

{
  /* <ReactPaginate
previousLabel={'previous'}
nextLabel={'next'}
breakLabel={'...'}
breakClassName={'break-me'}
activeClassName={'active'}
containerClassName={'pagination'}
subContainerClassName={'pages pagination'}
initialPage={props.currentPage - 1}
pageCount={props.pageCount}
marginPagesDisplayed={2}
pageRangeDisplayed={5}
onPageChange={pagginationHandler}
/> */
}
