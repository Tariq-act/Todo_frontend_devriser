import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';
import { Box, Button, MenuItem, Select, styled } from '@mui/material';

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
  const [addTask, setAddTask] = useState(false);

  const [selectStatus, setSelectStatus] = useState('ALL');

  const toggleModal = () => {
    setAddTask(!addTask);
  };

  return (
    <Box sx={{ margin: 'auto' }} maxWidth={'600px'} sm={'400px'}>
      <Header />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
          }}
          onClick={toggleModal}
        >
          Add Task
        </Button>

        <StyledSelect
          value={selectStatus}
          onChange={(e) => setSelectStatus(e.target.value)}
          sx={{
            padding: '0.5rem 1rem',
          }}
        >
          <MenuItem value={'ALL'}>ALL</MenuItem>
          <MenuItem value='completed'>Completed</MenuItem>
          <MenuItem value='pending'>Pending</MenuItem>
        </StyledSelect>
      </Box>

      <TaskList />
      <TaskModal addTask={addTask} toggleModal={toggleModal} />
    </Box>
  );
}

export default Task;
