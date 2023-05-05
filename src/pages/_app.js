import '@/styles/globals.css';
import { TodoProvider } from '@/context/todoContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />;
      {/* <ToastContainer
        position='top-right'
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      /> */}
    </TodoProvider>
  );
}
