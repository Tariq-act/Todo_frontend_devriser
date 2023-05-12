export const getTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const token = JSON.parse(localStorage.getItem('token')) || '';
    // Add any additional logic for token validation, if needed
    return token;
  }
};

export const getEmailFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('user')) || '';
    // Add any additional logic for token validation, if needed
    return user;
  }
};

export const getRolelFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const role = JSON.parse(localStorage.getItem('role')) || '';
    // Add any additional logic for user email validation, if needed
    return role;
  }
};
