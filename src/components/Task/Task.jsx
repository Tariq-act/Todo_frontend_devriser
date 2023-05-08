import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { Box, Button, MenuItem, Select, styled } from '@mui/material';
import { useTodoContext } from '@/context/todoContext';

import { useTheme } from '@mui/material';

const StyledSelect = styled(Select)({
  backgroundColor: 'white',
  borderRadius: '4px',

  minWidth: '120px',
  '& .MuiSelect-select': {
    padding: '0px',
  },
  '& .MuiSelect-icon': {
    color: 'black',
  },
});

function Task() {
  const theme = useTheme();
  const { pageNo, handleNextPage, handlePrevPage } = useTodoContext();
  const [addTask, setAddTask] = useState(false);

  const toggleModal = () => {
    setAddTask(!addTask);
  };

  return (
    <Box
      width={'600px'}
      sx={{
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
          width: '300px',
        },
      }}
    >
      <Header />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <Button
          sx={{
            backgroundColor: '#8500FA',
            color: '#FFFFFF',
            padding: '0.5rem 1rem',
            textTransform: 'capitalize',
            fontFamily: 'inherit',
            '&:hover': { backgroundColor: '#8500FA' },
            [theme.breakpoints.down('sm')]: {
              padding: '0.2rem .5rem',
            },
          }}
          onClick={toggleModal}
        >
          Add Task
        </Button>

        <Box>
          <Button
            disabled={pageNo == 1}
            onClick={handlePrevPage}
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '.8rem',
              },
            }}
          >
            Prev
          </Button>
          <Button>{pageNo}</Button>
          <Button
            onClick={handleNextPage}
            sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize: '.8rem',
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>

      <TaskList />
      <TaskModal addTask={addTask} toggleModal={toggleModal} />
    </Box>
  );
}

export default Task;
