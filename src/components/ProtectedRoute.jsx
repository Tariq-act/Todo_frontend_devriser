'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useToastContainer } from 'react-toastify';

function ProtectedRoute({ children }) {
  const { userToken } = useToastContainer();
  const router = useRouter();
  // const { user, loading } = useAuth();
  console.log(userToken);
  let user = '';
  useEffect(() => {
    user = localStorage.getItem('token') || '';
  }, []);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return <>{user ? children : null}</>;
}

export default ProtectedRoute;
