import { useRouter } from 'next/router';
import { useEffect } from 'react';

function PrivateRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
}

export default PrivateRoute;
