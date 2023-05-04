import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TodoContext = createContext({
  todos: [],
  useToken: '',
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const register = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
        data
      );

      await response;
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  const login = async (data) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
      data
    );
    const user = await response;
    localStorage.setItem('token', user.data.access_token);
    console.log(user);
    return user;
  };

  // GET ALL TODOS

  const getAllTodo = () => {
    const token = localStorage.getItem('token') || '';
    fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/todo/getalltodo?limit=10&page=1`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-Type': 'Application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTodos(res.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTodo();
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, register, login, getAllTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
