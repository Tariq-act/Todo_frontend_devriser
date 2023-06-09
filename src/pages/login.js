'use client';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import { useTheme } from '@mui/material';
import {
  register,
  login,
  handleInputChange,
  selectCounter,
  setInputValue,
} from '@/utils/redux/auth';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const theme = useTheme();

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { value, user } = useSelector((state) => state.authUser);

  const [role, setRole] = useState(value);

  function handleInputChange(event) {
    const newValue = event.target.value;
    dispatch(setInputValue(newValue));
  }

  const onSubmit = async () => {
    if (!email && !password) {
      alert('Please Fill all the fields');
      return;
    }

    if (password.length < 6) {
      alert('Password Should be Six digit or more');
      return;
    }

    dispatch(login({ user: { email, password }, value }));
    if (JSON.parse(localStorage.getItem('token')) != 'undefined') {
      router.push('/');
    }
  };

  return (
    <>
      <Head>
        <title>Login Todo</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Formik>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <form>
            <Typography
              align='center'
              variant='h5'
              color={'#667780'}
              fontWeight={'bold'}
              marginBottom={'1rem'}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  fontSize: '1.2rem',
                },
              }}
            >
              Login To the Task Tracker
            </Typography>
            <Box
              display='grid'
              gap='1rem'
              width='500px'
              sx={{
                [theme.breakpoints.down('sm')]: {
                  width: '300px',
                },
              }}
              margin={'auto'}
            >
              <TextField
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label='Password'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id='role'>Select Role</InputLabel>
                <Select
                  value={value}
                  labelId='role'
                  label='Select Role'
                  onChange={handleInputChange}
                >
                  <MenuItem value={'client'}>Client</MenuItem>
                  <MenuItem value={'user'}>User</MenuItem>
                </Select>
              </FormControl>
              {/* BUTTONS */}
              <Box>
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: '#8500FA',
                    color: '#FFFFFF',
                    '&:hover': { color: '#8500FA' },
                  }}
                  onClick={onSubmit}
                >
                  {/* {loading ? 'Loading...' : 'LOGIN'} */}LOGIN
                </Button>

                <Box sx={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
                  <Typography>Don't have an account?</Typography>

                  <Link href={'/register'}>
                    <Typography
                      sx={{
                        color: '#8500FA',
                      }}
                    >
                      Sign Up here.
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </form>
        </Box>
      </Formik>
    </>
  );
};

export default LoginForm;
