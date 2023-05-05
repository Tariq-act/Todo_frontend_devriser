'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TodoContext = createContext({
  todos: [],
  useToken: '',
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  // const [userToken, setUserToken] = useState('');

  const register = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
        data
      );

      setLoading(false);
      return await response;
    } catch (error) {
      console.log(error.response);
      if (error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(error.response.data.message);
      }
      // toast.error(error.response.data.error);
    }
  };

  const login = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
        data
      );
      setLoading(false);
      const user = await response;
      localStorage.setItem('token', user.data.access_token);
      console.log(user.data.user_name);

      localStorage.setItem('user', user.data.user_name);
      // setUserToken(localStorage.getItem('token'));

      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleNextPage = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevPage = () => {
    setPageNo(pageNo - 1);
  };

  // GET ALL TODOS

  const getAllTodo = () => {
    const token = localStorage.getItem('token') || '';
    console.log(token);

    fetch(
      `https://fair-tan-drill-suit.cyclic.app/todo/getalltodo?page=${pageNo}&limit=10`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res, 'login');
        setTodos(res.result);
      })
      .catch((err) => console.log(err));

    // axios
    //   .get(
    //     `${process.env.NEXT_PUBLIC_BASE_URL}/todo/getalltodo?limit=10&page=${pageNo}`,
    //     {
    //       headers: {
    //         Authorization: token,
    //         'Content-Type': 'Application/json',
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setTodos(res.result);
    //   })
    //   .catch((err) => console.log(err));
  };

  const addTodo = (data) => {
    const token = localStorage.getItem('token');

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todo/addtodo`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getAllTodo();
      })
      .catch((err) => console.log(err));
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem('token');

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todo/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        'Content-Type': 'Application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getAllTodo();
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
  };

  const updateTodo = (id, data) => {
    const token = localStorage.getItem('token') || '';
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todo/update/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: token,
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getAllTodo();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllTodo();
  }, [pageNo]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        register,
        login,
        getAllTodo,
        deleteTask,
        addTodo,
        updateTodo,
        pageNo,
        handleNextPage,
        handlePrevPage,
        loading,
        logout,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
