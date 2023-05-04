import axios from 'axios';
export const register = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
      data
    );

    return await response;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
    data
  );
  const user = await response;
  localStorage.setItem('token',JSON.stringify(user.data.access_token));
  console.log(user);
  return user;
};
