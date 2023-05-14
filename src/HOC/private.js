import { Loading } from '@/components/Loading/Loading';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  const router = useRouter();
  // const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');

    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return <>{children}</>;
}

export default PrivateRoute;
