import { MdDelete, MdEdit } from 'react-icons/md';
import data from '../../../dummyData.json';
import { useEffect, useState } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

function TaskList() {
  const [dummyData, setDummyData] = useState(data);
  const deleteTask = async (id) => {
    const updatedData = dummyData.filter((item) => item.id !== id);
    setDummyData(updatedData);
  };
  const editTask = (id) => {
    console.log('edit', id);
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
        {dummyData ? (
          dummyData.map((task, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#fff',
                borderRadius: '3px',
                fontFamily: 'inherit',
                textDecorationLine:
                  task.status === 'complete' ? 'line-through' : 'none',
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
                  onClick={() => editTask(task.id)}
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
    </Box>
  );
}

export default TaskList;
