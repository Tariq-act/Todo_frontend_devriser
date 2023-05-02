'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  return (
    <Formik>
      <Box
        height={'100vh'}
        width={'100vw'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <form onSubmit='submit'>
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
            <TextField label='Email' name='email' />
            <TextField label='Password' type='password' name='password' />
            {/* BUTTONS */}
            <Box>
              <Button
                fullWidth
                sx={{
                  backgroundColor: '#8500FA',
                  color: '#FFFFFF',
                  '&:hover': { color: '#8500FA' },
                }}
                onClick={() => router.push('/')}
              >
                LOGIN
              </Button>

              <Typography
                sx={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}
              >
                Don't have an account?
                <Link href={'/register'}>
                  <Typography
                    sx={{
                      color: '#8500FA',
                    }}
                  >
                    {' '}
                    Sign Up here.
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
        </form>
      </Box>
    </Formik>
  );
};

export default LoginForm;
