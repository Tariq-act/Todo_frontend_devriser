import '@/styles/globals.css';
import { TodoProvider } from '@/context/todoContext';

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />;
    </TodoProvider>
  );
}
