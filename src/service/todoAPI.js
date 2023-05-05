import axios from 'axios';

export const getTodos = async () => {
  const token = localStorage.getItem('token');
  console.log(token);

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/todo/getalltodo?limit=10&page=1`,
      {
        headers: {
          Authorization: token,
          'Content-Type': 'Application/json',
        },
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// axios
//   .get('https://fair-tan-drill-suit.cyclic.app/todo/getalltodo', {
//     headers: {
//       Authorization: token,
//       'Content-Type': 'Application/json',
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
