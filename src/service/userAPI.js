import axios from 'axios';
export const register = async (data) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
    data
  );

  return await response;
};

export const login = async (data) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
    data
  );
  const user = await response;
  localStorage.setItem('token', user.data.access_token);
  return user;
};
