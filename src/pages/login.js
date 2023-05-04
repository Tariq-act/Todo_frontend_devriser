'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { login } from '@/service/userAPI';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTodoContext } from '@/context/todoContext';

const LoginForm = () => {
  const { login } = useTodoContext();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    if (!email || !password) {
      toast.error('Invaild');
      // console.log(userData);
    }
    const userData = await login({
      email,
      password,
    });

    console.log(userData);
    if (userData.status == 200) {
      router.push('/');
      toast.success('successfully');
    } else {
      toast.error('Invaild');
      console.log(userData);
      return;
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
          height={'100vh'}
          width={'100vw'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <form>
            <Typography
              align='center'
              variant='h5'
              color={'#667780'}
              fontWeight={'bold'}
              marginBottom={'1rem'}
            >
              Login To the Task Tracker
            </Typography>
            <Box display='grid' gap='1rem' width='500px' margin={'auto'}>
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
                  LOGIN
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
