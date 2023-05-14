import React from 'react';
import {
  Typography,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const Users = () => {
  const users = [
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
  ];

  return (
    <Box display='flex' flexDirection='column' alignItems='center' mt='50px'>
      <Box textAlign='center'>
        <Typography
          variant='h2'
          color='#7c5b8c'
          fontWeight='bold'
          sx={{ mb: '5px' }}
        >
          USERS
        </Typography>
        <Typography variant='h5' color='#d6a3ff'>
          List Of Users
        </Typography>
      </Box>
      <Box mt='40px'>
        <TableContainer component={Box} maxHeight='50vh' overflow={'scroll'}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Users;
