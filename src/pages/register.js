'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegForm = () => {
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
            Register To the Task Tracker
          </Typography>
          <Box display='grid' gap='1rem' width='500px'>
            <TextField label='Full Name' name='firstName' fullWidth />
            <TextField label='Email' name='email' />
            <TextField label='Password' type='password' name='password' />
            <TextField
              label='Confirm Password'
              type='password'
              name='confirmPassword'
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
                onClick={() => router.push('/')}
              >
                REGISTER
              </Button>

              <Typography
                sx={{ display: 'flex', gap: '.5rem', marginTop: '1rem' }}
              >
                Don't have an account?
                <Link href={'/login'}>
                  <Typography
                    sx={{
                      color: '#8500FA',
                    }}
                  >
                    Log In here.
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

export default RegForm;
