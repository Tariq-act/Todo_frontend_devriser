'use client';

import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Box,
} from '@mui/material';

import { useRouter } from 'next/navigation';
import { useTodoContext } from '@/context/todoContext';

import { styled } from '@mui/system';
import { useEffect, useState } from 'react';

import { useTheme } from '@mui/material';

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const { logout } = useTodoContext();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserName(JSON.parse(localStorage.getItem('user')) || '');
      // Add any additional logic for token validation, if needed
    }
  }, []);

  const handleLogout = () => {
    // logout();
    localStorage.clear();
    router.push('/login');
  };

  return (
    <FlexBetween padding='1rem 6%' backgroundColor={'#FFFFFF'}>
      <Typography
        fontWeight='bold'
        fontFamily={'inherit'}
        fontSize='clamp(1rem, 2rem, 2.25rem)'
        color='#8500FA'
        sx={{
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
          },
        }}
      >
        Task Tracker
      </Typography>

      <FlexBetween gap='2rem'>
        <FormControl variant='standard'>
          <Select
            value={userName}
            sx={{
              backgroundColor: '#F0F0F0',
              borderRadius: '0.25rem',
              p: '0.25rem 1rem',
              '& .MuiSvgIcon-root': {
                pr: '0.25rem',
                width: '3rem',
              },
              '& .MuiSelect-select:focus': {
                backgroundColor: '#F0F0F0',
              },
            }}
            input={<InputBase />}
          >
            <MenuItem value={userName}>
              <Typography>{userName}</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </Select>
        </FormControl>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
