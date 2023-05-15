import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/utils/redux/user";

const Users = () => {
  // const { users } = useSelector((state) => state.users);
  // console.log(users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {};

  const handleDelete = (user) => {};
  const users = [
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
    { _id: '1', name: 'John Doe', email: 'johndoe@example.com' },
    { _id: '2', name: 'Jane Smith', email: 'janesmith@example.com' },
    { _id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com' },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box textAlign="center">
        <Typography
          variant="h2"
          color="#7c5b8c"
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          USERS
        </Typography>
        <Typography variant="h5" color="#d6a3ff">
          List Of Users
        </Typography>
      </Box>
      <Box mt="40px">
        <TableContainer component={Box}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <TableContainer component={Box} maxHeight="50vh" overflowY="scroll">
          <Table>
            <TableBody>
              {Array.isArray(users) && users.length ? (
                users.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{user.firstname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleEdit(user)}
                      >
                        <Edit />
                      </IconButton>

                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(user)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>No users found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Users;
