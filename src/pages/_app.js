import '@/styles/globals.css';
// import { TodoProvider } from '@/context/todoContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from '@/utils/redux/store';

export default function App({ Component, pageProps }) {
  return (
    // <TodoProvider>
    <Provider store={store}>
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
    </Provider>
    // </TodoProvider>
  );
}
