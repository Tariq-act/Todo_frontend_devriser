'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

import { register } from '@/utils/redux/auth';
import { useDispatch } from 'react-redux';

const RegForm = () => {
  const router = useRouter();
  const theme = useTheme();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      register({
        firstname,
        lastname,
        email,
        password,
      })
    );
  };

  return (
    <>
      <Head>
        <title>Register Todo</title>
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
              Register To the Task Tracker
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
            >
              <TextField
                type='text'
                label='First Name'
                required
                fullWidth
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <TextField
                type='text'
                label='Last Name'
                required
                fullWidth
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <TextField
                type='email'
                label='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

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
                  REGISTER
                </Button>

                <Box sx={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}>
                  <Typography>Don't have an account?</Typography>
                  <Link href={'/login'}>
                    <Typography
                      sx={{
                        color: '#8500FA',
                      }}
                    >
                      Log In here.
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

export default RegForm;
