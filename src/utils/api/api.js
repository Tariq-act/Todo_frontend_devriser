import { useSelector } from 'react-redux';

const { value } = useSelector((state) => state.authUser);

export const loginUser = async (userData) => {
  try {
    console.log(userData);
    const response = await fetch(`http://localhost:8080/client/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    // console.log(userData);
    const data = await response.json();
    console.log(data);
    return data.token;
  } catch (error) {
    console.log(error);
    return error;
  }
};
